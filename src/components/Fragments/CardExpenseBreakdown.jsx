import React from "react";
import Card from "../Elements/Card";

const CardExpenseBreakdown = (props) => {
  const { data } = props;

  return (
    <Card
      title="Expenses Breakdown"
      desc={
        <div className="grid grid-cols-2 gap-4">
          {data.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="bg-white p-2 rounded-lg shadow-sm">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-gray-500">{item.category}</p>
                  <p className="text-sm font-bold">${item.amount}</p>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <p className="text-xs font-bold">{item.percentage}%</p>
                {item.arrow}
              </div>
            </div>
          ))}
        </div>
      }
    />
  );
};



export default CardExpenseBreakdown;