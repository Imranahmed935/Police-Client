import React, { useState } from "react";
import { FaEdit, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const Education = ({
  toggleEdit,
  addNewItem,
  updateUserData,
  sections,
  details,
}) => {
  const [degreeName, setDegreeName] = useState("");
  const [academy, setAcademy] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const educationForm = { degreeName, academy, startTime, endTime };

  const handleSaveEdu = () => {
    updateUserData({ educationInfo: educationForm });
    toggleEdit("education");
  };
  return (
    <div>
      <section className="mb-6 relative group">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-xl font-semibold">শিক্ষাগত যোগ্যতা</h2>
          <div className="flex gap-2">
            <button
              onClick={() => {
                addNewItem("education");
                toggleEdit("education");
              }}
              className="text-gray-500"
            >
              <FaPlus size={16} />
            </button>
            <Link to="/update">
              <button className="text-gray-500">
                <FaEdit size={16} />
              </button>
            </Link>
          </div>
        </div>

        <div className="space-y-4">
          {sections.education ? (
            <div className="border-l-2 border-green-500 pl-4 mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    ডিগ্রির নাম
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setDegreeName(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded text-sm"
                    placeholder="এইচএসসি (বিজ্ঞান)"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    প্রতিষ্ঠান
                  </label>
                  <input
                    onChange={(e) => setAcademy(e.target.value)}
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded text-sm"
                    placeholder="ঢাকা কলেজ, ঢাকা"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm text-gray-600 mb-1">
                    সময়কাল
                  </label>
                  <div className="flex gap-2">
                    <input
                      onChange={(e) => setStartTime(e.target.value)}
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded text-sm"
                      placeholder="শুরু বছর (যেমন: ২০২১)"
                    />
                    <span className="self-center">থেকে</span>
                    <input
                      onChange={(e) => setEndTime(e.target.value)}
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded text-sm"
                      placeholder="শেষ বছর (যেমন: ২০২৩)"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-2">
                <button
                  onClick={handleSaveEdu}
                  className="px-3 py-1 bg-blue-600 text-white rounded text-sm"
                >
                  সংরক্ষণ করুন
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4 grid grid-cols-1 lg:grid-cols-3">
              {details.educationInfo?.map((edu, index) => (
                <div
                  key={index}
                  className="border-l-2 border-blue-500 pl-4 py-3 bg-gray-50 rounded"
                >
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">
                      ডিগ্রি
                    </h3>
                    <p className="text-gray-800">
                      {edu.degreeName || "উল্লেখ করা হয়নি"}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">
                      প্রতিষ্ঠান
                    </h3>
                    <p className="text-gray-800">
                      {edu.academy || "উল্লেখ করা হয়নি"}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">
                      সময়কাল
                    </h3>
                    <p className="text-gray-800">
                      {edu.startTime || "উল্লেখ করা হয়নি"} -{" "}
                      {edu.endTime || "বর্তমান"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Education;
