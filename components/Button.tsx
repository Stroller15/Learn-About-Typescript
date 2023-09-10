import React from "react";

type ButtonProps = {
  backgroundColor: string;
  fontSize: number;
  isred?: boolean;
}

const button = ({
  backgroundColor,
  fontSize,
  isred,
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
