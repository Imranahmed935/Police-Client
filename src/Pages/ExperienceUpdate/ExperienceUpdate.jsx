import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";

const ExperienceUpdate = () => {
  const [experiences, setExperiences] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const { user } = useContext(AuthContext);

  const {
    data: allExperiences = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["experiencesValue"],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/users/${user?.email}`);
      setExperiences(res.data.experienceData || []);
      return res.data.experienceData || [];
    },
  });



  return (
    <div className="min-h-screen max-w-4xl mx-auto p-4">
      <div className="bg-white rounded shadow p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          অভিজ্ঞতা আপডেট
        </h1>

        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="border-l-4 border-blue-500 pl-4 py-3 bg-gray-50 rounded"
              >
                {editingId === exp._id ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">
                        জেলা
                      </label>
                      <input
                        type="text"
                        
                        className="w-full p-2 border border-gray-300 rounded text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">
                        ইউনিট
                      </label>
                      <input
                        type="text"
                       
                        className="w-full p-2 border border-gray-300 rounded text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">
                        শুরু বছর
                      </label>
                      <input
                        type="text"
                        
                        className="w-full p-2 border border-gray-300 rounded text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">
                        শেষ বছর
                      </label>
                      <input
                        type="text"
                       
                        className="w-full p-2 border border-gray-300 rounded text-sm"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">
                        জেলা
                      </h3>
                      <p className="text-gray-800">
                        {exp.district || "উল্লেখ করা হয়নি"}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">
                        ইউনিট
                      </h3>
                      <p className="text-gray-800">
                        {exp.unit || "উল্লেখ করা হয়নি"}
                      </p>
                    </div>
                    <div className="col-span-2">
                      <h3 className="text-sm font-medium text-gray-500">
                        সময়কাল
                      </h3>
                      <p className="text-gray-800">
                        {exp.time || "উল্লেখ করা হয়নি"} -{" "}
                        {exp.finishedTime || "বর্তমান"}
                      </p>
                    </div>
                  </div>
                )}

                <div className="flex justify-end gap-2 mt-3">
                  {editingId === exp._id ? (
                    <>
                      
                      <button
                        className="px-3 py-1 bg-blue-600 text-white rounded text-sm"
                      >
                        সংরক্ষণ
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                      
                        className="p-2 text-red-500 hover:text-red-700"
                      >
                        <FaTrash />
                      </button>
                      <button
                        className="p-2 text-blue-500 hover:text-blue-700"
                      >
                        <FaEdit />
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceUpdate;
