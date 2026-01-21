import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

const StatsCard = ({ title, value, icon: Icon, trend, trendValue, bgColor }) => {
  return (
    <div className={`${bgColor} rounded-lg shadow-md p-6 text-white`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm opacity-90">{title}</p>
          <h3 className="text-3xl font-bold mt-2">{value}</h3>
          {trend && (
            <div className="flex items-center gap-1 mt-2 text-xs">
              {trend === "up" ? (
                <TrendingUp className="w-4 h-4" />
              ) : (
                <TrendingDown className="w-4 h-4" />
              )}
              <span>{trendValue}% vs last month</span>
            </div>
          )}
        </div>
        <div className="bg-white bg-opacity-30 p-3 rounded-lg">
          <Icon className="w-8 h-8" />
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
