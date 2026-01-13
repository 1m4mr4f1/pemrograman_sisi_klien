import React from "react";
import Icon from "../Elements/Icon";

const CardExpense = ({ data }) => {

  const getIcon = (category) => {
    switch (category) {
      case "Housing":
        return <Icon.House />; 
      case "Food":
        return <Icon.Food />;
      case "Transportation":
        return <Icon.Transport />; 
      case "Entertainment":
        return <Icon.Movie />;
      case "Shopping":
        return <Icon.Shopping />;
      default:
        return <Icon.Other />;
    }
  };

  const isIncrease = data.status === "up"; 
  const colorClass = isIncrease ? "text-red-500" : "text-green-500";
  const rotateClass = isIncrease ? "rotate-180" : "";

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-full flex flex-col justify-between">
      {/* HEADER CARD */}
      <div className="flex justify-between items-start mb-6">
        <div className="flex gap-4 items-center">
          {/* Container Icon dengan background abu-abu */}
          <div className="bg-gray-50 p-3 rounded-xl flex items-center justify-center text-gray-600">
             {/* Render Icon yang sudah dipastikan ada */}
             {getIcon(data.category)}
          </div>
          <div>
            <p className="text-gray-400 text-sm font-medium mb-1">{data.category}</p>
            <h4 className="text-xl font-bold text-gray-800">${data.total}</h4>
          </div>
        </div>

        {/* Percentage Info */}
        <div className="text-right">
          <div className="flex items-center justify-end gap-1 mb-1">
             <span className={`text-sm font-bold ${colorClass}`}>
               {data.percentage}%
             </span>
             {/* Panah Indikator */}
             <svg 
                className={`w-4 h-4 ${colorClass} ${rotateClass}`} 
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
             >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 14l-7 7-7-7" />
             </svg>
          </div>
          <p className="text-[10px] text-gray-400">Compare to last month</p>
        </div>
      </div>

      {/* LIST ITEM DETAILS */}
      <div className="space-y-4">
        {data.breakdown.map((item, index) => (
          <div key={index}>
             {/* Baris Item */}
            <div className="flex justify-between items-end mb-1">
                <span className="text-sm font-medium text-gray-600">{item.name}</span>
                <span className="text-sm font-bold text-gray-800">${item.amount}</span>
            </div>
            {/* Baris Tanggal */}
            <div className="flex justify-between items-start">
                <span className="text-xs text-gray-400">{item.date}</span>
                <span className="text-xs text-gray-400">{item.date}</span>
            </div>
             {/* Garis Pemisah (kecuali item terakhir) */}
            {index !== data.breakdown.length - 1 && (
                <hr className="border-dashed border-gray-100 mt-3" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardExpense;