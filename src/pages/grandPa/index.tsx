import { useState, useRef, lazy } from "react";
import { loadable } from "~/routes/utils";
const Farther = lazy(() => import("~/pages/farther"));
//const Farther = loadable(() => import("~/pages/farther")); //ref error

export default function GrandPa() {
  const [list, setList] = useState<any>([{ name: "rose", age: 18 }]);
  const farRef = useRef<any>(null);

  return (
    <>
      <Farther ref={farRef} />
      <button onClick={() => console.log(farRef.current.data, "data===")}>
        Click
      </button>
    </>
  );
}
