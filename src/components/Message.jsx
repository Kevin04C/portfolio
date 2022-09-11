import React from "react";

export const Message = ({ message, type }) => {
  const classMessage =
    type === "error"
      ? "border-red-800 bg-red-200 text-red-700"
      : "border-green-800 bg-green-300";

  return <div className={`border p-3 rounded mb-5 ${classMessage} `}>{message}</div>;
};
