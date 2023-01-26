import React, { useEffect, useState } from 'react'

const YCursor = () => {
    const [squareY, setSquareY] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startY, setStartY] = useState(0);
    const handleMouseUp = () => {
      setIsDragging(false);
    };
    useEffect(() => {
      document.addEventListener("mouseup", handleMouseUp);
      return () => {
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }, []);
    const handleMouseDownY = (event: React.MouseEvent<HTMLDivElement>) => {
      setIsDragging(true);
      setStartY(event.clientY);
    };
    const handleMouseMoveY = (event: React.MouseEvent<HTMLDivElement>) => {
      if (isDragging) {
        requestAnimationFrame(() => {
          const currentX = squareY + event.clientY - startY;
          if (currentX >= 0-(32/2) && currentX <= 144) {
            setSquareY(squareY + event.clientY - startY);
            setStartY(event.clientY);
          }
        });
      }
    };
    return (
      <div
        style={{ top: squareY + "px", zIndex: "111", userSelect: "none" }}
        onMouseDown={handleMouseDownY}
        onMouseMove={handleMouseMoveY}
        className={`w-full flex align-middle justify-start h-0 absolute ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        } y-cursor `}
      >
        <span className="w-6 h-8 absolute text-white  text-center  bg-red-500">
          {squareY +16}
        </span>
      </div>
    );
}

export default YCursor