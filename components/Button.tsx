import React from "react";


type ButtonProps = {
  backgroundColor: "red" | "blue" | "black";
  textColor: "red" | "blue" | "black";
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
