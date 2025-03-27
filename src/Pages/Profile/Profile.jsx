import React, { useState } from "react";
import { FaCamera, FaLinkedin, FaGithub, FaTwitter, FaGlobe, FaPlus, FaEdit, FaAward, FaCertificate } from "react-icons/fa";
import { HiOutlineBuildingOffice2, HiOutlineMapPin, HiOutlineEnvelope } from "react-icons/hi2";

const Profile = () => {
  const [coverColor, setCoverColor] = useState("#1E317D");
  const [profilePic, setProfilePic] = useState(null);
  const [sections, setSections] = useState({
    about: false,
    experience: false,
    education: false,
    skills: false,
    languages: false,
    interests: false,
    rewards: false,
    training: false
  });

  const [rewards, setRewards] = useState([
    { id: 1, title: "সেরা ফ্রন্টএন্ড ডেভেলপার", issuer: "ডিজিটাল বাংলাদেশ", year: "২০২৩" },
  ]);

  const [trainings, setTrainings] = useState([
    { id: 1, name: "রিঅ্যাক্ট মাস্টারক্লাস", issuer: "প্রোগ্রামিং হিরো", year: "২০২২", credential: "PH12345" },
  ]);

  const handleProfileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  const handleCoverColorChange = (e) => {
    setCoverColor(e.target.value);
  };

  const toggleEdit = (section) => {
    setSections({...sections, [section]: !sections[section]});
  };

  const addNewItem = (section) => {
    if (section === 'rewards') {
      setRewards([...rewards, { id: rewards.length + 1, title: "", issuer: "", year: "" }]);
    } else if (section === 'training') {
      setTrainings([...trainings, { id: trainings.length + 1, name: "", issuer: "", year: "", credential: "" }]);
    }
  };

  const handleRewardChange = (id, field, value) => {
    setRewards(rewards.map(reward => 
      reward.id === id ? {...reward, [field]: value} : reward
    ));
  };

  const handleTrainingChange = (id, field, value) => {
    setTrainings(trainings.map(training => 
      training.id === id ? {...training, [field]: value} : training
    ));
  };

  return (
    <div className="max-w-7xl mx-auto min-h-screen bg-gray-100 py-6 ">
      {/* Cover Photo */}
      <div className="relative h-48 bg-gray-200 rounded-t-lg" style={{ backgroundColor: coverColor }}>
        {/* Change Cover Color */}
        <input
          type="color"
          className="absolute top-4 right-4 cursor-pointer w-8 h-8 opacity-0 hover:opacity-100 transition-opacity"
          value={coverColor}
          onChange={handleCoverColorChange}
          title="Change cover color"
        />

        {/* Profile Picture */}
        <div className="absolute -bottom-16 left-6">
          <div className="relative w-32 h-32 rounded-full border-4 border-white overflow-hidden bg-white">
            <img
              src={
                profilePic ||
                "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              }
              alt="Profile"
              className="w-full h-full object-cover"
            />
            {/* Camera Icon Input */}
            <label className="absolute bottom-0 right-0 bg-gray-200 p-2 rounded-full cursor-pointer hover:bg-gray-300 transition">
              <FaCamera className="text-gray-700" size={14} />
              <input type="file" accept="image/*" onChange={handleProfileChange} className="hidden" />
            </label>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-b-lg shadow-sm">
        {/* Profile Header */}
        <div className="pt-20 px-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold">ইমরান আহমেদ</h1>
              <p className="text-gray-600 mt-1">ফ্রন্টএন্ড ডেভেলপার | রিঅ্যাক্ট স্পেশালিস্ট</p>
              
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
                onClick={() => toggleEdit('about')}
                className="text-gray-500 hover:text-blue-600 transition opacity-0 group-hover:opacity-100"
              >
                <FaEdit size={16} />
              </button>
            </div>
            {sections.about ? (
              <textarea 
                className="w-full p-2 border border-gray-300 rounded"
                defaultValue="আমি একজন প্যাশনেট ফ্রন্টএন্ড ডেভেলপার, যিনি রিঅ্যাক্ট এবং মডার্ন ওয়েব টেকনোলজিতে দক্ষ। আমার ২+ বছর অভিজ্ঞতা আছে রিঅ্যাক্ট, জাভাস্ক্রিপ্ট এবং সম্পর্কিত টেকনোলজিতে কাজ করার।"
              />
            ) : (
              <p className="text-gray-700">
                আমি একজন প্যাশনেট ফ্রন্টএন্ড ডেভেলপার, যিনি রিঅ্যাক্ট এবং মডার্ন ওয়েব টেকনোলজিতে দক্ষ। 
                আমার ২+ বছর অভিজ্ঞতা আছে রিঅ্যাক্ট, জাভাস্ক্রিপ্ট এবং সম্পর্কিত টেকনোলজিতে কাজ করার।
              </p>
            )}
          </section>

            <div className="mt-6 border-t border-gray-200 py-4 w-full" ></div>
          {/* Experience */}
          <section className="mb-6 relative group">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-xl font-semibold">অভিজ্ঞতা</h2>
              <div className="flex gap-2">
                <button 
                  onClick={() => addNewItem('experience')}
                  className="text-gray-500 hover:text-blue-600 transition opacity-0 group-hover:opacity-100"
                >
                  <FaPlus size={16} />
                </button>
                <button 
                  onClick={() => toggleEdit('experience')}
                  className="text-gray-500 hover:text-blue-600 transition opacity-0 group-hover:opacity-100"
                >
                  <FaEdit size={16} />
                </button>
              </div>
            </div>
            <div className="space-y-4">
              <div className="border-l-2 border-blue-500 pl-4">
                <div className="flex justify-between">
                  <h3 className="font-medium">ফ্রন্টএন্ড ডেভেলপার</h3>
                  {sections.experience && (
                    <button className="text-red-500 text-sm">Delete</button>
                  )}
                </div>
                <div className="flex items-center text-sm text-gray-600 mt-1">
                  <HiOutlineBuildingOffice2 size={14} className="mr-1" />
                  <span>টেক সলিউশন লিমিটেড</span>
                </div>
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>২০২২ - বর্তমান</span>
                  {sections.experience && (
                    <button className="text-blue-500 text-sm">Edit</button>
                  )}
                </div>
                {sections.experience ? (
                  <textarea 
                    className="w-full p-2 border border-gray-300 rounded mt-2 text-sm"
                    defaultValue="রিঅ্যাক্ট জাভাস্ক্রিপ্ট ব্যবহার করে ওয়েব অ্যাপ্লিকেশন ডেভেলপমেন্ট, UI/UX ইম্প্রুভমেন্ট, এবং পারফরমেন্স অপ্টিমাইজেশনের কাজ করেছি।"
                  />
                ) : (
                  <p className="text-gray-700 mt-2 text-sm">
                    রিঅ্যাক্ট জাভাস্ক্রিপ্ট ব্যবহার করে ওয়েব অ্যাপ্লিকেশন ডেভেলপমেন্ট, UI/UX ইম্প্রুভমেন্ট, 
                    এবং পারফরমেন্স অপ্টিমাইজেশনের কাজ করেছি।
                  </p>
                )}
              </div>
            </div>
          </section>
          <div className="mt-6 border-t border-gray-200 py-4 w-full" ></div>
          {/* Education */}
          <section className="mb-6 relative group">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-xl font-semibold">শিক্ষা</h2>
              <div className="flex gap-2">
                <button 
                  onClick={() => addNewItem('education')}
                  className="text-gray-500 hover:text-blue-600 transition opacity-0 group-hover:opacity-100"
                >
                  <FaPlus size={16} />
                </button>
                <button 
                  onClick={() => toggleEdit('education')}
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
          <div className="mt-6 border-t border-gray-200 py-4 w-full" ></div>
          {/* Rewards (New Section) */}
          <section className="mb-6 relative group">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <FaAward className="text-yellow-500" /> পুরস্কার ও স্বীকৃতি
              </h2>
              <div className="flex gap-2">
                <button 
                  onClick={() => addNewItem('rewards')}
                  className="text-gray-500 hover:text-blue-600 transition opacity-0 group-hover:opacity-100"
                >
                  <FaPlus size={16} />
                </button>
                <button 
                  onClick={() => toggleEdit('rewards')}
                  className="text-gray-500 hover:text-blue-600 transition opacity-0 group-hover:opacity-100"
                >
                  <FaEdit size={16} />
                </button>
              </div>
            </div>
            <div className="space-y-4">
              {rewards.map((reward) => (
                <div key={reward.id} className="border-l-2 border-yellow-500 pl-4">
                  <div className="flex justify-between">
                    {sections.rewards ? (
                      <input
                        type="text"
                        className="font-medium w-full p-1 border border-gray-300 rounded"
                        value={reward.title}
                        onChange={(e) => handleRewardChange(reward.id, 'title', e.target.value)}
                      />
                    ) : (
                      <h3 className="font-medium">{reward.title}</h3>
                    )}
                    {sections.rewards && (
                      <button className="text-red-500 text-sm">Delete</button>
                    )}
                  </div>
                  <div className="mt-1">
                    {sections.rewards ? (
                      <input
                        type="text"
                        className="text-sm text-gray-600 w-full p-1 border border-gray-300 rounded"
                        value={reward.issuer}
                        onChange={(e) => handleRewardChange(reward.id, 'issuer', e.target.value)}
                      />
                    ) : (
                      <p className="text-sm text-gray-600">{reward.issuer}</p>
                    )}
                  </div>
                  <div className="flex justify-between mt-1">
                    {sections.rewards ? (
                      <input
                        type="text"
                        className="text-sm text-gray-500 w-20 p-1 border border-gray-300 rounded"
                        value={reward.year}
                        onChange={(e) => handleRewardChange(reward.id, 'year', e.target.value)}
                      />
                    ) : (
                      <span className="text-sm text-gray-500">{reward.year}</span>
                    )}
                    {sections.rewards && (
                      <button className="text-blue-500 text-sm">Save</button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
          <div className="mt-6 border-t border-gray-200 py-4 w-full" ></div>
          {/* Training & Certifications (New Section) */}
          <section className="mb-6 relative group">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <FaCertificate className="text-blue-500" /> প্রশিক্ষণ ও সার্টিফিকেট
              </h2>
              <div className="flex gap-2">
                <button 
                  onClick={() => addNewItem('training')}
                  className="text-gray-500 hover:text-blue-600 transition opacity-0 group-hover:opacity-100"
                >
                  <FaPlus size={16} />
                </button>
                <button 
                  onClick={() => toggleEdit('training')}
                  className="text-gray-500 hover:text-blue-600 transition opacity-0 group-hover:opacity-100"
                >
                  <FaEdit size={16} />
                </button>
              </div>
            </div>
            <div className="space-y-4">
              {trainings.map((training) => (
                <div key={training.id} className="border-l-2 border-blue-500 pl-4">
                  <div className="flex justify-between">
                    {sections.training ? (
                      <input
                        type="text"
                        className="font-medium w-full p-1 border border-gray-300 rounded"
                        value={training.name}
                        onChange={(e) => handleTrainingChange(training.id, 'name', e.target.value)}
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
                        onChange={(e) => handleTrainingChange(training.id, 'issuer', e.target.value)}
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
                            onChange={(e) => handleTrainingChange(training.id, 'year', e.target.value)}
                            placeholder="Year"
                          />
                          <input
                            type="text"
                            className="text-sm text-gray-500 w-32 p-1 border border-gray-300 rounded"
                            value={training.credential}
                            onChange={(e) => handleTrainingChange(training.id, 'credential', e.target.value)}
                            placeholder="Credential ID"
                          />
                        </>
                      ) : (
                        <>
                          <span className="text-sm text-gray-500 mr-2">{training.year}</span>
                          {training.credential && (
                            <span className="text-sm text-gray-500">Credential ID: {training.credential}</span>
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
          <div className="mt-6 border-t border-gray-200 py-4 w-full" ></div>
          {/* Skills */}
          <section className="mb-6 relative group">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-xl font-semibold">দক্ষতা</h2>
              <div className="flex gap-2">
                <button 
                  onClick={() => addNewItem('skills')}
                  className="text-gray-500 hover:text-blue-600 transition opacity-0 group-hover:opacity-100"
                >
                  <FaPlus size={16} />
                </button>
                <button 
                  onClick={() => toggleEdit('skills')}
                  className="text-gray-500 hover:text-blue-600 transition opacity-0 group-hover:opacity-100"
                >
                  <FaEdit size={16} />
                </button>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">React</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">JavaScript</span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Node.js</span>
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">HTML5</span>
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">CSS3</span>
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Git</span>
            </div>
          </section>
          <div className="mt-6 border-t border-gray-200 py-4 w-full" ></div>
          {/* Languages */}
          <section className="mb-6 relative group">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-xl font-semibold">ভাষা</h2>
              <div className="flex gap-2">
                <button 
                  onClick={() => addNewItem('languages')}
                  className="text-gray-500 hover:text-blue-600 transition opacity-0 group-hover:opacity-100"
                >
                  <FaPlus size={16} />
                </button>
                <button 
                  onClick={() => toggleEdit('languages')}
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
          <div className="mt-6 border-t border-gray-200 py-4 w-full" ></div>
          {/* Interests */}
          <section className="relative group">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-xl font-semibold">আগ্রহ</h2>
              <div className="flex gap-2">
                <button 
                  onClick={() => addNewItem('interests')}
                  className="text-gray-500 hover:text-blue-600 transition opacity-0 group-hover:opacity-100"
                >
                  <FaPlus size={16} />
                </button>
                <button 
                  onClick={() => toggleEdit('interests')}
                  className="text-gray-500 hover:text-blue-600 transition opacity-0 group-hover:opacity-100"
                >
                  <FaEdit size={16} />
                </button>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <span className="flex items-center gap-1 text-gray-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                কোডিং
              </span>
              <span className="flex items-center gap-1 text-gray-700">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                বই পড়া
              </span>
              <span className="flex items-center gap-1 text-gray-700">
                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                সিনেমা দেখা
              </span>
              <span className="flex items-center gap-1 text-gray-700">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                নতুন স্কিল শেখা
              </span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Profile;