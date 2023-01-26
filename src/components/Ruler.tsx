import React, { FC, ReactNode, useEffect, useState } from "react";
import XCursor from "./XCursor";
import YCursor from "./YCursor";

const Ruler: FC<{
  children: ReactNode;
  parentRef:React.RefObject<HTMLDivElement>
}> = ({ children,parentRef }) => {
console.log(parentRef.current)

  return (
    <>

      {children}
    </>
  );
};

export default Ruler;
