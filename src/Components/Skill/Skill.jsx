import React from "react";
import { FaEdit, FaPlus } from "react-icons/fa";

const Skill = ({addNewItem, toggleEdit}) => {
  return (
    <div>
      <section className="mb-6 relative group">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-xl font-semibold">দক্ষতা</h2>
          <div className="flex gap-2">
            <button
              onClick={() => addNewItem("skills")}
              className="text-gray-500 hover:text-blue-600 transition opacity-0 group-hover:opacity-100"
            >
              <FaPlus size={16} />
            </button>
            <button
              onClick={() => toggleEdit("skills")}
              className="text-gray-500 hover:text-blue-600 transition opacity-0 group-hover:opacity-100"
            >
              <FaEdit size={16} />
            </button>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
            React
          </span>
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
            Tailwind CSS
          </span>
          <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
            JavaScript
          </span>
          <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
            Node.js
          </span>
          <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
            HTML5
          </span>
          <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
            CSS3
          </span>
          <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
            Git
          </span>
        </div>
      </section>
    </div>
  );
};

export default Skill;
