import { useEffect, useRef, useState } from "react";

import "./App.css";

import Marker from "./components/Marker";


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
        className=" relative w-80 h-80 border-black border rounded"
      >
        <Marker  limit={width} />
        <Marker limit={width} />
        <Marker direction="verticle" limit={height} />
        <Marker direction="verticle" limit={height} />
      </div>
    </div>
  );
}

export default App;
