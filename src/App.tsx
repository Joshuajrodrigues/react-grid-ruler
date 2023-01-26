import { useEffect, useRef, useState } from "react";

import "./App.css";

import XCursor from "./components/XCursor";
import YCursor from "./components/YCursor";

function App() {
  const parentRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (parentRef.current?.clientWidth)
      setWidth(parentRef.current?.clientWidth);
    if (parentRef.current?.clientHeight)
      setHeight(parentRef.current?.clientHeight);
  }, [parentRef.current?.clientWidth, parentRef.current?.clientHeight]);
  
  return (
    <div className="flex justify-center h-96 items-center">
      <div
        ref={parentRef}
        className=" relative w-52 h-52 border-black border rounded"
      >
        <XCursor limit={parentRef.current?.clientWidth} />
        <XCursor limit={parentRef.current?.clientWidth} />
      </div>
    </div>
  );
}

export default App;
