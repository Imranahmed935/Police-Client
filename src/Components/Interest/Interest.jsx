import React from "react";
import { FaEdit, FaPlus } from "react-icons/fa";

const Interest = ({addNewItem, toggleEdit}) => {
  return (
    <div>
      <section className="relative group">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-xl font-semibold">আগ্রহ</h2>
          <div className="flex gap-2">
            <button
              onClick={() => addNewItem("interests")}
              className="text-gray-500 hover:text-blue-600 transition opacity-0 group-hover:opacity-100"
            >
              <FaPlus size={16} />
            </button>
            <button
              onClick={() => toggleEdit("interests")}
              className="text-gray-500 hover:text-blue-600 transition opacity-0 group-hover:opacity-100"
            >
              <FaEdit size={16} />
            </button>
          </div>
        </div>
        <div className="flex flex-wrap gap-4">
          <span className="flex items-center gap-1 text-gray-700">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            কোডিং
          </span>
          <span className="flex items-center gap-1 text-gray-700">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            বই পড়া
          </span>
          <span className="flex items-center gap-1 text-gray-700">
            <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
            সিনেমা দেখা
          </span>
          <span className="flex items-center gap-1 text-gray-700">
            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
            নতুন স্কিল শেখা
          </span>
        </div>
      </section>
    </div>
  );
};

export default Interest;
