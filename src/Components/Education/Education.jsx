import React from "react";
import { FaEdit, FaPlus } from "react-icons/fa";

const Education = ({sections}) => {
  return (
    <div>
      <section className="mb-6 relative group">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-xl font-semibold">শিক্ষা</h2>
          <div className="flex gap-2">
            <button
              onClick={() => addNewItem("education")}
              className="text-gray-500 hover:text-blue-600 transition opacity-0 group-hover:opacity-100"
            >
              <FaPlus size={16} />
            </button>
            <button
              onClick={() => toggleEdit("education")}
              className="text-gray-500 hover:text-blue-600 transition opacity-0 group-hover:opacity-100"
            >
              <FaEdit size={16} />
            </button>
          </div>
        </div>
        <div className="space-y-4">
          <div className="border-l-2 border-green-500 pl-4">
            <div className="flex justify-between">
              <h3 className="font-medium">এইচএসসি (বিজ্ঞান)</h3>
              {sections.education && (
                <button className="text-red-500 text-sm">Delete</button>
              )}
            </div>
            <p className="text-gray-600 text-sm mt-1">ঢাকা কলেজ, ঢাকা</p>
            <div className="flex justify-between text-sm text-gray-500 mt-1">
              <span>২০২১ - ২০২৩</span>
              {sections.education && (
                <button className="text-blue-500 text-sm">Edit</button>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
