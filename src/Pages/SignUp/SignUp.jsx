import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react"; // Optional: You can use Heroicons or FontAwesome too
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import axios from "axios";
import toast from "react-hot-toast";


const SignUp = () => {
  const { handleSignUp } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState("");
  const [bpNumber, setBpNumber] = useState("");
  const [Designation, setDesignation] = useState('')
  const [birthDate, setBirthDate] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleForm = async (e) => {
    e.preventDefault();
  
    try {
      const result = await handleSignUp(email, password);
      console.log(result.user);
  
      await updateProfile(auth.currentUser, {
        displayName: fullName,
      });
      console.log('Profile updated');
  
      // Prepare user info to send to backend
      const signUpInfo = {
        name: fullName,
        email,
        bpNumber,
        birthDate,
        Designation,
        password
      };
  
      // POST to your server
      const res = await axios.post('http://localhost:5000/users', signUpInfo);
      if(res.data.insertedId){
        toast.success('সফলভাবে সম্পন্ন হয়েছে');

      }
  
      // Navigate after everything is successful
      navigate('/');
    } catch (err) {
      console.error(err.message);
    }
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#ffffff] shadow rounded  p-8">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          সাইন আপ করুন
        </h2>

        <form onSubmit={handleForm} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              নাম
            </label>
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              type="text"
              placeholder="আপনার নাম লিখুন"
              className="w-full input input-bordered rounded-lg hover:border-[#1E317D] transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              বিপি নম্বর
            </label>
            <input
              value={bpNumber}
              onChange={(e) => setBpNumber(e.target.value)}
              type="text"
              placeholder="বিপি নম্বর"
              className="w-full input rounded-lg hover:border-[#1E317D] transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              পদবি (Designation)
            </label>
            <select
              value={Designation}
              onChange={(e)=>setDesignation(e.target.value)}
              className="w-full input input-bordered rounded-lg hover:border-[#1E317D] transition-colors"
              required
            >
              <option value="">পদবি নির্বাচন করুন</option>
              <option value="ইন্সপেক্টর জেনারেল অফ পুলিশ (IGP)">ইন্সপেক্টর জেনারেল অফ পুলিশ (IGP)</option>
              <option value="অতিরিক্ত ইন্সপেক্টর জেনারেল (Addl. IGP)">
                অতিরিক্ত ইন্সপেক্টর জেনারেল (Addl. IGP)
              </option>
              <option value="ডিপুটি ইন্সপেক্টর জেনারেল (DIG)">ডিপুটি ইন্সপেক্টর জেনারেল (DIG)</option>
              <option value="অতিরিক্ত ডিআইজি (Addl. DIG)">অতিরিক্ত ডিআইজি (Addl. DIG)</option>
              <option value="পুলিশ সুপার (SP)">পুলিশ সুপার (SP)</option>
              <option value="অতিরিক্ত এসপি (Addl. SP)">অতিরিক্ত এসপি (Addl. SP)</option>
              <option value="সহকারী পুলিশ সুপার (ASP)">সহকারী পুলিশ সুপার (ASP)</option>
              <option value="ইন্সপেক্টর (Inspector)">ইন্সপেক্টর (Inspector)</option>
              <option value="সাব-ইন্সপেক্টর (SI)">সাব-ইন্সপেক্টর (SI)</option>
              <option value="সার্জেন্ট (Sergeant)">সার্জেন্ট (Sergeant)</option>
              <option value="সহকারী সাব-ইন্সপেক্টর (ASI)">সহকারী সাব-ইন্সপেক্টর (ASI)</option>
              <option value="নায়েক (Nayek)">নায়েক (Nayek)</option>
              <option value="কনস্টেবল (Constable)">কনস্টেবল (Constable)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              জন্মতারিখ
            </label>
            <input
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              type="date"
              className="w-full input input-bordered rounded-lg hover:border-[#1E317D] transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              ইমেইল
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="আপনার ইমেইল দিন"
              className="w-full input input-bordered rounded-lg hover:border-[#1E317D] transition-colors"
            />
          </div>

          {/* Password with show/hide icon */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              পাসওয়ার্ড
            </label>
            <div className="relative">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
                placeholder="পাসওয়ার্ড লিখুন"
                className="w-full input input-bordered rounded-lg pr-10 hover:border-[#1E317D] transition-colors"
              />
              <span
                className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </span>
            </div>
          </div>

          {/* Sign up button */}
          <button
            type="submit"
            className="w-full mt-2 bg-[#1E317D] text-white py-2 rounded-lg transition"
          >
            সাইন আপ
          </button>
        </form>

        {/* Already have an account? */}
        <p className="text-sm text-center text-gray-600 mt-6">
          ইতিমধ্যে একটি একাউন্ট আছে?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            লগইন করুন
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
