import React from "react";

const Topic = ({ text, count }) => {
  return (
    <div>
      <div className="flex items-center">
        <p className="text-left text-white text-2xl font-bold">{text}</p>
        {count >= 0 && (
          <p className="ml-4 text-orange-200">Search count: {count}</p>
        )}
      </div>
      <hr className="border-[1px] border-white" />
    </div>
  );
};

export default Topic;
