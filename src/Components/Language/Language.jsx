import React from "react";
import { FaEdit, FaPlus } from "react-icons/fa";

const Language = ({addNewItem, toggleEdit}) => {
  return (
    <div>
      <section className="mb-6 relative group">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-xl font-semibold">ভাষা</h2>
          <div className="flex gap-2">
            <button
              onClick={() => addNewItem("languages")}
              className="text-gray-500 hover:text-blue-600 transition opacity-0 group-hover:opacity-100"
            >
              <FaPlus size={16} />
            </button>
            <button
              onClick={() => toggleEdit("languages")}
              className="text-gray-500 hover:text-blue-600 transition opacity-0 group-hover:opacity-100"
            >
              <FaEdit size={16} />
            </button>
          </div>
        </div>
        <div className="space-y-2">
          <div>
            <h3 className="font-medium">বাংলা</h3>
            <p className="text-gray-600 text-sm">প্রাঞ্জল</p>
          </div>
          <div>
            <h3 className="font-medium">ইংরেজি</h3>
            <p className="text-gray-600 text-sm">মধ্যম</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Language;
