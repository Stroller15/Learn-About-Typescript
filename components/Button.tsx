import React from "react";

const button = ({
  backgroundColor,
  fontSize,
}: {
  backgroundColor: string;
  fontSize: number;
}) => {
  return (
    <div>
      <button className="bg-blue-500 text-white rounded px-4 py-2">
        Click me
      </button>
    </div>
  );
};

export default button;
