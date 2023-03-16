import React from "react";
import {  CustomContext } from ".";

function GlobalContext(props: React.PropsWithChildren<{}>) {
  return (
    <div>
        <CustomContext>
            {props.children}
        </CustomContext>
    </div>
  );
}

export default GlobalContext;
