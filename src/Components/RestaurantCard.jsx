import React from "react";
import {Star} from "lucide-react" // for rating icon
import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {

// const {name, cloudinaryImageId, cuisines, avgRating, deliveryTime} = resList?.info;
  return (
    <div className=" res-card max-w-sm rounded-2xl overflow-hidden shadow-md bg-white hover:shadow-lg transition cursor-pointer">
      {/* Restaurant Image */}
      <img
        className="h-40 w-full object-cover"
        src={CDN_URL+resData.info.cloudinaryImageId}
        alt={resData.info.name}
      />

      {/* Restaurant Details */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{resData.info.name}</h3>
        <p className="text-sm text-gray-500">{resData.info.cuisines.join(", ")}</p>

        {/* Ratings & Delivery Info */}
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-1 text-yellow-500">
            <Star size={16} fill="currentColor" />
            <span className="text-sm font-medium text-gray-700">{resData.info.avgRating}</span>
          </div>
          <span className="text-sm text-gray-600">⏱ {resData.info.sla.deliveryTime} mins</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
