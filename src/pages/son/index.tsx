import { useContext } from "react";
import { ListContext } from "../grandPa";

export default function Son() {
  const context = useContext(ListContext);
  return <div>Son</div>;
}
