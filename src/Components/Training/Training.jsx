import React from "react";
import { FaCertificate, FaEdit, FaPlus } from "react-icons/fa";

const Training = ({trainings, sections, addNewItem, toggleEdit}) => {
  return (
    <div>
      <section className="mb-6 relative group">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <FaCertificate className="text-blue-500" /> প্রশিক্ষণ ও সার্টিফিকেট
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() => addNewItem("training")}
              className="text-gray-500 hover:text-blue-600 transition opacity-0 group-hover:opacity-100"
            >
              <FaPlus size={16} />
            </button>
            <button
              onClick={() => toggleEdit("training")}
              className="text-gray-500 hover:text-blue-600 transition opacity-0 group-hover:opacity-100"
            >
              <FaEdit size={16} />
            </button>
          </div>
        </div>
        <div className="space-y-4">
          {trainings?.map((training) => (
            <div key={training.id} className="border-l-2 border-blue-500 pl-4">
              <div className="flex justify-between">
                {sections.training ? (
                  <input
                    type="text"
                    className="font-medium w-full p-1 border border-gray-300 rounded"
                    value={training.name}
                    onChange={(e) =>
                      handleTrainingChange(training.id, "name", e.target.value)
                    }
                  />
                ) : (
                  <h3 className="font-medium">{training.name}</h3>
                )}
                {sections.training && (
                  <button className="text-red-500 text-sm">Delete</button>
                )}
              </div>
              <div className="mt-1">
                {sections.training ? (
                  <input
                    type="text"
                    className="text-sm text-gray-600 w-full p-1 border border-gray-300 rounded"
                    value={training.issuer}
                    onChange={(e) =>
                      handleTrainingChange(
                        training.id,
                        "issuer",
                        e.target.value
                      )
                    }
                  />
                ) : (
                  <p className="text-sm text-gray-600">{training.issuer}</p>
                )}
              </div>
              <div className="flex justify-between mt-1">
                <div>
                  {sections.training ? (
                    <>
                      <input
                        type="text"
                        className="text-sm text-gray-500 w-20 p-1 border border-gray-300 rounded mr-2"
                        value={training.year}
                        onChange={(e) =>
                          handleTrainingChange(
                            training.id,
                            "year",
                            e.target.value
                          )
                        }
                        placeholder="Year"
                      />
                      <input
                        type="text"
                        className="text-sm text-gray-500 w-32 p-1 border border-gray-300 rounded"
                        value={training.credential}
                        onChange={(e) =>
                          handleTrainingChange(
                            training.id,
                            "credential",
                            e.target.value
                          )
                        }
                        placeholder="Credential ID"
                      />
                    </>
                  ) : (
                    <>
                      <span className="text-sm text-gray-500 mr-2">
                        {training.year}
                      </span>
                      {training.credential && (
                        <span className="text-sm text-gray-500">
                          Credential ID: {training.credential}
                        </span>
                      )}
                    </>
                  )}
                </div>
                {sections.training && (
                  <button className="text-blue-500 text-sm">Save</button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Training;
