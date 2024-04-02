import { useContext } from "react";
import Son from "../son";
import { ListContext } from "../grandPa";

export default function Farther() {
  const context = useContext(ListContext);
  console.log(context, "Farther context=====");

  const handelClick = () => {
    (context as any)[0].name = "cherry";
  };

  return (
    <>
      <p>Farther</p>
      <button onClick={handelClick}>farther button</button>
      <Son />
    </>
  );
}
