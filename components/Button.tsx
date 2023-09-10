
import React from "react";

type Color = "red" | "blue" | "green";


interface ButtonProps {
  Color: "red" | "green";
}



const Button = () => {
  return (
    <div>
      <button className="bg-blue-500 text-white rounded px-4 py-2">
        Click me
      </button>
    </div>
  );
};

export default Button;
