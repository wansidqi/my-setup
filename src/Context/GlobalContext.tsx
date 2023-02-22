import React from "react";
import { ComponentBehaviorContext, CustomContext } from ".";

function GlobalContext(props: React.PropsWithChildren<{}>) {
  return (
    <div>
      <ComponentBehaviorContext>
        <CustomContext>
            {props.children}
        </CustomContext>
      </ComponentBehaviorContext>
    </div>
  );
}

export default GlobalContext;
