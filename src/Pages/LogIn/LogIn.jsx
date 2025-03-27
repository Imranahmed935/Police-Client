import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react'; // Optional: You can use Heroicons or FontAwesome too
import { AuthContext } from '../../AuthProvider/AuthProvider';

const LogIn = () => {
  const {handleLogin} = useContext(AuthContext)
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password)
    .then((result)=>{
      console.log(result.user)
    }).catch((err)=>{
      console.log(err.message)
    })
  };

  return (
    <div className="min-h-screen  flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#ffffff] rounded shadow p-8">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">লগইন করুন</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">ইমেইল</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="আপনার ইমেইল দিন"
              className="w-full input input-bordered rounded-lg hover:border-[#1E317D] transition-colors"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">পাসওয়ার্ড</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="পাসওয়ার্ড লিখুন"
                className="w-full input input-bordered rounded-lg pr-10 hover:border-[#1E317D] transition-colors"
                required
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

          {/* Login button */}
          <button
            type="submit"
            className="w-full mt-2 bg-[#1E317D] text-white py-2 rounded-lg transition"
          >
            লগইন করুন
          </button>
        </form>

        {/* No account? Sign up link */}
        <p className="text-sm text-center text-gray-600 mt-6">
          আপনার একাউন্ট নেই?{' '}
          <Link to="/signUp" className="text-blue-600 hover:underline">
            সাইন আপ করুন
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
