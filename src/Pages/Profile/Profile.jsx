import { updateProfile } from "firebase/auth";
import React, { useContext, useState } from "react";
import {
  FaCamera,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaGlobe,
  FaPlus,
  FaEdit,
  FaAward,
  FaCertificate,
} from "react-icons/fa";
import {
  HiOutlineBuildingOffice2,
  HiOutlineMapPin,
  HiOutlineEnvelope,
} from "react-icons/hi2";
import auth from "../../firebase/firebase.config";
import axios from "axios";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import Experience from "../../Components/Experience/Experience";
import Education from "../../Components/Education/Education";
import Reward from "../../Components/Reward/Reward";
import Training from "../../Components/Training/Training";
import Skill from "../../Components/Skill/Skill";
import Language from "../../Components/Language/Language";
import Interest from "../../Components/Interest/Interest";
import PersonalInfo from "../../Components/PersonalInfo/PersonalInfo";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [coverColor, setCoverColor] = useState("#1E317D");
  const [aboutInfo, setAboutInfo] = useState("");
  console.log(aboutInfo);
  const [sections, setSections] = useState({
    about: false,
    experience: false,
    education: false,
    skills: false,
    languages: false,
    interests: false,
    rewards: false,
    training: false,
  });

  const {
    data: details = {},
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["profileInfo", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/users/${user.email}`);
      return res.data;
    },
  });

  console.log(details);
  //imageUpload function
  const handleImageUpload = async (imageFile) => {
    const formData = new FormData();
    formData.append("image", imageFile);
    const res = await fetch(
      `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imgBB}`,
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await res.json();
    return data.data.url;
  };

  // Combined update function that handles both cases
  const updateUserData = async (updateData) => {
    try {
      const res = await axios.put(
        `http://localhost:5000/users/${user?.email}`,
        updateData
      );
      if (res.data.success) {
        refetch();
      }
      console.log(res.data);
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  // Image update handler
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    const imageUrl = await handleImageUpload(file);

    // Update Firebase
    await updateProfile(auth.currentUser, {
      photoURL: imageUrl,
    });

    // Update MongoDB with only image (won't affect aboutInfo)
    await updateUserData({ image: imageUrl });
  };

  // About section handler
  const handleAboutInfo = async () => {
    // Update MongoDB with only aboutData (won't affect profilePic)
    const res = await updateUserData({ aboutData: aboutInfo });
    console.log(res);
  };
  const [rewards, setRewards] = useState([
    {
      id: 1,
      title: "সেরা ফ্রন্টএন্ড ডেভেলপার",
      issuer: "ডিজিটাল বাংলাদেশ",
      year: "২০২৩",
    },
  ]);

  const [trainings, setTrainings] = useState([
    {
      id: 1,
      name: "রিঅ্যাক্ট মাস্টারক্লাস",
      issuer: "প্রোগ্রামিং হিরো",
      year: "২০২২",
      credential: "PH12345",
    },
  ]);

  const handleCoverColorChange = (e) => {
    setCoverColor(e.target.value);
  };

  const toggleEdit = (section) => {
    setSections({ ...sections, [section]: !sections[section] });
  };

  const addNewItem = (section) => {
    if (section === "rewards") {
      setRewards([
        ...rewards,
        { id: rewards.length + 1, title: "", issuer: "", year: "" },
      ]);
    } else if (section === "training") {
      setTrainings([
        ...trainings,
        {
          id: trainings.length + 1,
          name: "",
          issuer: "",
          year: "",
          credential: "",
        },
      ]);
    }
  };

  const handleTrainingChange = (id, field, value) => {
    setTrainings(
      trainings.map((training) =>
        training.id === id ? { ...training, [field]: value } : training
      )
    );
  };

  const handleSave = async () => {
    await handleAboutInfo(), toggleEdit("about");
  };

  return (
    <div className="max-w-7xl mx-auto min-h-screen flex gap-3 mt-4">
      {/* Cover Photo */}
      <div className="max-w-4xl">
        <div
          className="relative h-48 bg-gray-200 rounded-t-lg"
          style={{ backgroundColor: coverColor }}
        >
          {/* Change Cover Color */}
          <input
            type="color"
            className="absolute top-4 right-4 cursor-pointer w-8 h-8 opacity-0 hover:opacity-100 transition-opacity"
            value={coverColor}
            onChange={handleCoverColorChange}
            title="Change cover color"
          />

          {/* Profile Picture */}
          <div className="relative w-32 h-32">
            {/* Profile Picture */}
            <div className="w-full h-full absolute -bottom-32 left-4 rounded-full border-4 border-white overflow-hidden shadow-md">
              <img
                src={details.profilePic}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Camera Icon Overlay */}
            <label className="absolute -bottom-32 -right-2  bg-[#1E317D] p-2 rounded-full cursor-pointer transition-all duration-200 shadow-sm z-10">
              <FaCamera className="text-white" size={16} />
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-b-lg shadow-sm">
          {/* Profile Header */}
          <div className="pt-20 px-6">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-bold">ইমরান আহমেদ</h1>
                <p className="text-gray-600 mt-1">
                  ফ্রন্টএন্ড ডেভেলপার | রিঅ্যাক্ট স্পেশালিস্ট
                </p>

                <div className="flex items-center gap-4 mt-3 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <HiOutlineMapPin size={14} />
                    ঢাকা, বাংলাদেশ
                  </span>
                  <span className="flex items-center gap-1">
                    <HiOutlineEnvelope size={14} />
                    imrantahir9918@gmail.com
                  </span>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="px-4 py-1 bg-blue-600 text-white rounded-full text-sm hover:bg-blue-700 transition">
                  সংযোগ করুন
                </button>
                <button className="px-4 py-1 border border-gray-400 rounded-full text-sm hover:bg-gray-100 transition">
                  বার্তা
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-4 text-gray-600">
              <a href="#" className="hover:text-blue-600 transition">
                <FaLinkedin size={18} />
              </a>
              <a href="#" className="hover:text-gray-800 transition">
                <FaGithub size={18} />
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="hover:text-blue-600 transition">
                <FaGlobe size={18} />
              </a>
            </div>
          </div>

          {/* Sections */}
          <div className="mt-6 border-t border-gray-200 px-6 py-4">
            {/* About */}
            <section className="mb-6 relative group">
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-xl font-semibold">সম্পর্কে</h2>
                <button
                  onClick={() => toggleEdit("about")}
                  className="text-gray-500"
                >
                  <FaEdit size={16} />
                </button>
              </div>
              {sections.about ? (
                <>
                  <textarea
                    className="w-full p-2 border border-gray-300 rounded"
                    defaultValue={details.aboutInfo}
                    onChange={(e) => setAboutInfo(e.target.value)}
                  />
                  <div className="flex justify-end">
                    <button
                      onClick={handleSave}
                      className="bg-[#1B2E7A] text-white rounded p-1 px-2"
                    >
                      Save
                    </button>
                  </div>
                </>
              ) : (
                <p className="text-gray-700">
                  {details.aboutInfo || "No information provided"}
                </p>
              )}
            </section>

            <div className="mt-6 border-t border-gray-200 py-4 w-full"></div>
            {/* Experience */}
            <Experience
              toggleEdit={toggleEdit}
              addNewItem={addNewItem}
              updateUserData={updateUserData}
              sections={sections}
              details={details}
              handleSave={handleSave}
            />
            <div className="mt-6 border-t border-gray-200 py-4 w-full"></div>
            {/* Education */}
            <Education sections={sections} />
            <div className="mt-6 border-t border-gray-200 py-4 w-full"></div>
            {/* Rewards (New Section) */}
            <Reward rewards={rewards} sections={sections} />
            <div className="mt-6 border-t border-gray-200 py-4 w-full"></div>
            {/* Training & Certifications (New Section) */}
            <Training
              toggleEdit={toggleEdit}
              addNewItem={addNewItem}
              sections={sections}
              trainings={trainings}
            />
            <div className="mt-6 border-t border-gray-200 py-4 w-full"></div>
            {/* Skills */}
            <Skill addNewItem={addNewItem} toggleEdit={toggleEdit} />
            <div className="mt-6 border-t border-gray-200 py-4 w-full"></div>
            {/* Languages */}
            <Language addNewItem={addNewItem} toggleEdit={toggleEdit} />
            <div className="mt-6 border-t border-gray-200 py-4 w-full"></div>
            {/* Interests */}
            <Interest toggleEdit={toggleEdit} addNewItem={addNewItem} />
          </div>
        </div>
      </div>
      <div className="bg-white rounded shadow flex-1 h-[600px]">
        <PersonalInfo />
      </div>
    </div>
  );
};

export default Profile;
