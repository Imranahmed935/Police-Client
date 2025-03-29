import React, { useState } from "react";
import { FaEdit, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const Experience = ({
  addNewItem,
  toggleEdit,
  sections,
  details,
  updateUserData,
}) => {
  const [district, setDistrict] = useState("");
  const [unit, setUnit] = useState("");
  const [time, setTime] = useState("");
  const [finishedTime, setFinishedTime] = useState("");
  const experienceInfo = { district, unit, time, finishedTime };
  console.log(experienceInfo);

  const handleExperience = async () => {
    await updateUserData({ experienceData: experienceInfo });
  };

  const handleExperienceSave = async () => {
    await handleExperience();
    toggleEdit("experience");
  };

  return (
    <div>
      <section className="mb-6 relative group">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-xl font-semibold">অভিজ্ঞতা</h2>
          <div className="flex gap-2">
            <button
              onClick={() => {
                addNewItem("experience");
                toggleEdit("experience");
              }}
              className="text-gray-500 "
            >
              <FaPlus size={16} />
            </button>
            <Link to={'/update'}>
              <button className="text-gray-500 ">
                <FaEdit size={16} />
              </button>
            </Link>
          </div>
        </div>

        <div className="space-y-4">
          {sections.experience ? (
            <div className="border-l-2 border-green-500 pl-4 mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    জেলা
                  </label>
                  <input
                    type="text"
                    defaultValue={details.experienceData?.district}
                    onChange={(e) => setDistrict(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded text-sm"
                    placeholder="সিলেট"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    ইউনিট
                  </label>
                  <input
                    defaultValue={details.experienceData?.unit}
                    onChange={(e) => setUnit(e.target.value)}
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded text-sm"
                    placeholder="কোম্পানীগঞ্জ থানা"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm text-gray-600 mb-1">
                    সময়কাল
                  </label>
                  <div className="flex gap-2">
                    <input
                      defaultValue={details.experienceData?.time}
                      onChange={(e) => setTime(e.target.value)}
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded text-sm"
                      placeholder="শুরু বছর (যেমন: 2018)"
                    />
                    <span className="self-center">থেকে</span>
                    <input
                      defaultValue={details.experienceData?.finishedTime}
                      onChange={(e) => setFinishedTime(e.target.value)}
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded text-sm"
                      placeholder="শেষ বছর (যেমন: বর্তমান)"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-2">
                <button
                  onClick={handleExperienceSave}
                  className="px-3 py-1 bg-blue-600 text-white rounded text-sm"
                >
                  save
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4 grid grid-cols-1 lg:grid-cols-3">
              {details.experienceData?.map((exData, index) => (
                <div
                  key={index}
                  className="border-l-2 border-blue-500 pl-4 py-3 bg-gray-50 rounded"
                >
                  <div className="">
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">
                        জেলা
                      </h3>
                      <p className="text-gray-800">
                        {exData.district || "উল্লেখ করা হয়নি"}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">
                        ইউনিট
                      </h3>
                      <p className="text-gray-800">
                        {exData.unit || "উল্লেখ করা হয়নি"}
                      </p>
                    </div>
                    <div className="col-span-2">
                      <h3 className="text-sm font-medium text-gray-500">
                        সময়কাল
                      </h3>
                      <p className="text-gray-800">
                        {exData.time || "উল্লেখ করা হয়নি"} -{" "}
                        {exData.finishedTime || "বর্তমান"}
                      </p>
                    </div>
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

export default Experience;
