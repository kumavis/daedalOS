import { installApplication } from "components/apps/AppInstaller";
import { useFileSystem } from "contexts/fileSystem";
import { ProcessConsumer } from "contexts/process";
import { AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";

const RenderComponent = dynamic(
  () => import("components/system/Apps/RenderComponent")
);

const AppsLoader: FC = () => {
  const appsInitialized = useRef(false);
  const {
    fs,
    readdir,
    readFile,
    stat,
  } = useFileSystem();

  useEffect(() => {
    if (!fs) return;
    // run once
    if (appsInitialized.current) return;
    appsInitialized.current = true;

    // set up virtualImport
    // imports from local fs
    globalThis.virtualImport = async (url: string) => {
      // dynamic import to ensure ses is available
      const { importLocation } = await import("@endo/compartment-mapper");
      // const buffer = await readFile(url);
      // const code = buffer.toString();
      // const importDataUri = `data:text/javascript;charset=utf-8,${encodeURIComponent(code)}`
      // const imported = await eval(`import('${importDataUri}')`)
      // const imported = await eval(code)
      // console.log('virtualImport', url, imported)

      const read = async (location: string) => {
        try {
          const result = await readFile(new URL(location).pathname);
          console.log('read', new URL(location).pathname)
          return result
        } catch (e) {
          console.log('read (fail)', new URL(location).pathname)
          throw e
        }
      }

      debugger
      const { namespace } = await importLocation(
        read,
        `file://x/${url}`,
        {
          globals: { ...globalThis, Math, Intl },
          modules: {},
        }
      );
      console.log('namespace', namespace)

      return namespace.default;
    }

    // initialize apps
    (async function () {
      // find application directories
      const files = await readdir("/Applications");
      const applicationDirs: Array<string> = [];
      await Promise.all(
        files.map(async (file) => {
          const path = `/Applications/${file}`;
          const details = await stat(path);
          if (details.isDirectory()) {
            applicationDirs.push(path);
          }
        })
      );
      // install each application
      await Promise.all(
        applicationDirs.map(async (dir) => {
          const appManifestBuffer = await readFile(`${dir}/manifest.json`);
          const appManifest = JSON.parse(appManifestBuffer.toString());
          // TODO: installing here, the "open with" context menu doesn't populate
          try {
            installApplication(appManifest);
          } catch (e) {
            console.error(e);
          }
        })
      );
    })();
  }, [fs, readdir, readFile, stat]);

  return (
    <ProcessConsumer>
      {({ processes = {} }) => (
        <AnimatePresence initial={false} presenceAffectsLayout={false}>
          {Object.entries(processes).map(
            ([id, { closing, Component, hasWindow }]) =>
              id &&
              Component &&
              !closing && (
                <RenderComponent
                  key={id}
                  Component={Component}
                  hasWindow={hasWindow}
                  id={id}
                />
              )
          )}
        </AnimatePresence>
      )}
    </ProcessConsumer>
  );
};

export default AppsLoader;
