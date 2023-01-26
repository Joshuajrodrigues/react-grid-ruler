import React, { FC, useEffect, useState } from "react";


const XCursor:FC<{
  limit?:number
  startPos?:number
}> = ({limit,startPos=0}) => {
  
  const [squareX, setSquareX] = useState(startPos);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);
  
  const handleMouseDownX = (event: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(event.clientX);
  };
  const handleMouseMoveX = (event: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      requestAnimationFrame(() => {
        const currentX = squareX + event.clientX - startX;
        let newLimit = limit || 0
        if (currentX >= 0 && currentX <= newLimit ) {
          setSquareX(squareX + event.clientX - startX);
          setStartX(event.clientX);
        }
      });
    }
  };
  console.log({
    limit,startPos,squareX,isDragging,startX
  })
  return (
    <div
      style={{ left: squareX + "px", zIndex: "111", userSelect: "none" }}
      onMouseDown={handleMouseDownX}
      onMouseMove={handleMouseMoveX}
      className={`w-0 flex justify-center h-full absolute ${
        isDragging ? "cursor-grabbing" : "cursor-grab"
      }  x-cursor`}
    >
      <span className="w-8 h-6 absolute text-white  text-center  bg-red-500">
        {squareX}
      </span>
    </div>
  );
};

export default XCursor;
