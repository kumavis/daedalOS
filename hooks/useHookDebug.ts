import { useEffect } from "react";

// useful for debugging hooks re-runs
export function useHookDebug(
  debugLabel: string,
  dependenciesObj: Record<string, unknown>
): void {
  for (const [label, dep] of Object.entries(dependenciesObj)) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      console.info(`useHookDebug/${debugLabel}: ${label} updated`);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dep]);
  }
}
