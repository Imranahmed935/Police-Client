import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";

const Modal = ({ selectedExperience, selectedIndex, refetch }) => {
  const { user } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    district: "",
    unit: "",
    time: "",
    finishedTime: "",
  });

  useEffect(() => {
    if (selectedExperience) {
      setFormData({ ...selectedExperience });
    }
  }, [selectedExperience]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async () => {
    try {
      await axios.put(
        `http://localhost:5000/users/experience/${user.email}`,
        {
          experienceIndex: selectedIndex,
          updatedExperience: formData,
        }
      );
      refetch();
      document.getElementById("exp_modal").close();
    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  return (
    <dialog id="exp_modal" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg mb-4">অভিজ্ঞতা আপডেট করুন</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
          <div>
            <label className="block text-sm mb-1">জেলা</label>
            <input
              name="district"
              type="text"
              className="w-full p-2 border rounded"
              value={formData.district}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm mb-1">ইউনিট</label>
            <input
              name="unit"
              type="text"
              className="w-full p-2 border rounded"
              value={formData.unit}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm mb-1">শুরু বছর</label>
            <input
              name="time"
              type="text"
              className="w-full p-2 border rounded"
              value={formData.time}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm mb-1">শেষ বছর</label>
            <input
              name="finishedTime"
              type="text"
              className="w-full p-2 border rounded"
              value={formData.finishedTime}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="modal-action">
          <form method="dialog">
            <button className="btn">বাতিল</button>
          </form>
          <button className="btn bg-blue-500 text-white" onClick={handleUpdate}>
            সংরক্ষণ করুন
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
