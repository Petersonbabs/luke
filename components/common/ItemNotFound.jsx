import React from "react";

const ItemNotFound = ({text}) => {
  return (
    <div className="bg-gray-50 h-48 flex items-center justify-center">
      <p className="text-gray-500">{text}</p>
    </div>
  );
};

export default ItemNotFound;
