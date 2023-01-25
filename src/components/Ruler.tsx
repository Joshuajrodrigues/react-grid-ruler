import React, { FC, ReactNode, useEffect, useState } from 'react'

const Ruler: FC<{
    children: ReactNode
}> = ({
    children
}) => {
        const [squareX1, setSquareX1] = useState(0)
        const [squareX2, setSquareX2] = useState(0)
        const [isDragging, setIsDragging] = useState(false);
        const [startX, setStartX] = useState(0);
        const [startX2, setStartX2] = useState(0)

        useEffect(() => {
            document.addEventListener('mouseup', handleMouseUp);
            return () => {
                document.removeEventListener('mouseup', handleMouseUp);
            }
        }, []);
        const handleMouseDownX1 = (event: React.MouseEvent<HTMLDivElement>) => {
            setIsDragging(true);
            setStartX(event.clientX);
        }
        const handleMouseMoveX1 = (event: React.MouseEvent<HTMLDivElement>) => {
            if (isDragging) {
                requestAnimationFrame(() => {
                    const currentX = squareX1 + event.clientX - startX;
                    if (currentX >= 0 && currentX <= 144) {
                        setSquareX1(squareX1 + event.clientX - startX);
                        setStartX(event.clientX);
                    }

                });
            }
        }

        const handleMouseDownX2 = (event: React.MouseEvent<HTMLDivElement>) => {
            setIsDragging(true);
            setStartX2(event.clientX);
        }
        const handleMouseMoveX2 = (event: React.MouseEvent<HTMLDivElement>) => {
            if (isDragging) {
                requestAnimationFrame(() => {
                    const currentX = squareX2 + event.clientX - startX2;
                    if (currentX >= 0 && currentX <= 144) {
                        setSquareX2(squareX2 + event.clientX - startX2);
                        setStartX2(event.clientX);
                    }

                });
            }
        }
        const handleMouseUp = () => {
            setIsDragging(false);
        }



        return (
            <>
                <div
                    style={{ left: squareX1 + 'px', zIndex: "111", userSelect: "none", }}
                    onMouseDown={handleMouseDownX1}
                    onMouseMove={handleMouseMoveX1}
                    className={`w-4 h-4 bg-red-500 absolute ${isDragging ? "cursor-grabbing" : "cursor-grab"}  x-cursor`} />
                <div
                    style={{ left: squareX2 + 'px', zIndex: "111", userSelect: "none", }}
                    onMouseDown={handleMouseDownX2}
                    onMouseMove={handleMouseMoveX2}
                    className={`w-4 h-4 bg-red-500 absolute ${isDragging ? "cursor-grabbing" : "cursor-grab"} 
                       x-cursor`} />


                {children}
            </>
        )
    }

export default Ruler