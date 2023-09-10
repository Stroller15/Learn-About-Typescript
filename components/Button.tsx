
import React from "react";

type Color = "red" | "blue" | "black";


type ButtonProps = {
  backgroundColor: Color;
  textColor?: Color;
  fontSize: number;
  isRed?: boolean;
}

const button = ({
  backgroundColor,
  fontSize,
  isRed,
}: ButtonProps) => {
  return (
    <div>
      <button className="bg-blue-500 text-white rounded px-4 py-2">
        Click me
      </button>
    </div>
  );
};

export default button;
