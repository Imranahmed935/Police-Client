import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react"; // Optional: You can use Heroicons or FontAwesome too
import { AuthContext } from "../../AuthProvider/AuthProvider";

const SignUp = () => {
  const {handleSignUp} = useContext(AuthContext)
  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState("");
  const [bpNumber, setBpNumber] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginCredencial = {fullName, bpNumber, birthDate, email, password}

  const handleForm = (e) => {
    e.preventDefault();
    handleSignUp(email, password)
    .then((result)=>{
      console.log(result.user)
    }).catch((err)=>{
      console.log(err.message)
    })

    
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

          {/* Forgot password */}
          <div className="text-right">
            <Link to="/forgot-password" className="text-sm underline">
              পাসওয়ার্ড ভুলে গেছেন?
            </Link>
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
