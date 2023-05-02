// useful for debugging hooks re-runs
export function useHookDebug(debugLabel, dependenciesObj) {
  for (const [label, dep] of Object.entries(dependenciesObj)) {
    useEffect(() => {
      console.info(`useHookDebug/${debugLabel}: ${label} updated`);
    }, [dep]);
  };
}