import React from "react";

const OrderedList = ({ list = [] }) => {
  return (
    <ol className="list-decimal space-y-2">
      {list.map((list, index) => {
        return (
          <li key={index} className="text-base text-white font-semibold">
            {list.title}
            {list.detail && (
              <span className="font-normal block opacity-80">
                {list.detail}
              </span>
            )}
          </li>
        );
      })}
    </ol>
  );
};

export default OrderedList;
