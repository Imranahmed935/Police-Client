import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import Modal from "../../Components/Modal/Modal";
import Swal from "sweetalert2";

const ExperienceUpdate = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const { user } = useContext(AuthContext);

  const {
    data: userData = {},
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["profileInfo", user?.email],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/users/${user?.email}`);
      return res.data;
    },
    enabled: !!user?.email,
  });

  const handleEditClick = (exp, index) => {
    setSelectedExperience(exp);
    setSelectedIndex(index);
    document.getElementById("exp_modal").showModal();
  };

  const handleDeleteExp = (id, index) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axios.delete(
          `http://localhost:5000/users/${id}?index=${index}`
        );
        if (res.data.success) {
          refetch()
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };

  return (
    <div className="min-h-screen max-w-4xl mx-auto p-4">
      <div className="bg-white rounded shadow p-6 my-2">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          অভিজ্ঞতা আপডেট
        </h1>

        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="space-y-4">
            {userData.experienceData?.map((exp, inx) => (
              <div
                key={inx}
                className="border-l-4 border-blue-500 pl-4 py-3 bg-gray-50 rounded"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">জেলা</h3>
                    <p className="text-gray-800">
                      {exp.district || "উল্লেখ করা হয়নি"}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">ইউনিট</h3>
                    <p className="text-gray-800">
                      {exp.unit || "উল্লেখ করা হয়নি"}
                    </p>
                  </div>
                  <div className="col-span-2">
                    <h3 className="text-sm font-medium text-gray-500">
                      সময়কাল
                    </h3>
                    <p className="text-gray-800">
                      {exp.time || "শুরু"} - {exp.finishedTime || "বর্তমান"}
                    </p>
                  </div>
                </div>

                <div className="flex justify-end gap-2 mt-3">
                  <button
                    onClick={() => handleDeleteExp(userData._id, inx)}
                    className="p-2 text-red-500 hover:text-red-700"
                  >
                    <FaTrash />
                  </button>
                  <button
                    onClick={() => handleEditClick(exp, inx)}
                    className="p-2 text-blue-500 hover:text-blue-700"
                  >
                    <FaEdit />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      <Modal
        selectedExperience={selectedExperience}
        selectedIndex={selectedIndex}
        refetch={refetch}
      />
    </div>
  );
};

export default ExperienceUpdate;
