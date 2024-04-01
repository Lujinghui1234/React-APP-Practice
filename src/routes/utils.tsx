import type { ReactElement } from "react";
import { lazy, Suspense } from "react";

export const loadable = (path: any): (() => ReactElement) => {
  const LazyComponent = lazy(path);
  const loadingComponent = <div>loading</div>;
  return () => {
    return (
      <Suspense fallback={loadingComponent}>
        <LazyComponent />
      </Suspense>
    );
  };
};
