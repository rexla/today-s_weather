import React from "react";

const Topic = ({ text }) => {
  return (
    <div>
      <p className="text-left text-white text-2xl font-bold">{text}</p>
      <hr className="border-[1px] border-white" />
    </div>
  );
};

export default Topic;
