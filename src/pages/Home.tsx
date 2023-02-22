import { useCallback, useEffect, useState } from "react";
import Child from "./Child";

const Home = (PROPS: any) => {
  const [child, setChild] = useState("This is Child Component");

  return (
    <>
      <p className="text-4xl">hello World!</p>
      <p>{PROPS.first}</p>
      <Child {...{ ...PROPS, child }} />
    </>
  );
};

export default Home;
