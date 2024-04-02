import { useImperativeHandle, forwardRef, useState } from "react";
import Son from "../son";

const Farther = forwardRef((props: any, ref: any) => {
  const [data, setData] = useState([1, 2, 3]);
  useImperativeHandle(ref, () => data);

  useImperativeHandle(ref, () => {
    return {
      data,
    };
  });

  return (
    <>
      <input />
      <button>farther button</button>
      <Son />
    </>
  );
});

export default Farther;
