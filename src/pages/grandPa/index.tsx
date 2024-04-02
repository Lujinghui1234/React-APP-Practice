import { useState, createContext, useEffect } from "react";
import { loadable } from "~/routes/utils";

const Farther = loadable(() => import("~/pages/farther"));
export const ListContext = createContext("");

export default function GrandPa() {
  const [list, setList] = useState<any>([{ name: "rose", age: 18 }]);

  useEffect(() => {
    console.log(list[0].name, "grandPa name=====");
  }, [list]);

  const handelClick = () => {
    const newItem = { name: "jack", age: 20 };
    setList((prev: any) => [...prev, newItem]);
  };

  return (
    <ListContext.Provider value={list}>
      <Farther />
      <p>GrandPa</p>
      <p>grandPa name:{list[0].name}</p>
      <button onClick={handelClick}>grandPa button</button>
    </ListContext.Provider>
  );
}
