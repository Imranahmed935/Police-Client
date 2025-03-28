import React from "react";


const Dashboard = () => {
  return (
    <div className="flex h-screen  max-w-7xl mx-auto mt-6">
      {/* Left Side Menu */}
      <div className="w-52 bg-blue-800 text-white flex flex-col items-center py-2">
        <div className="mb-8 text-center">
          <div className="text-2xl font-bold">ড্যাশবোর্ড</div>
        </div>
        
        {/* Menu Items */}
        <div className="flex flex-col items-center space-y-8 w-full">
          <button className="w-full hover:bg-blue-700 transition">
            <div className="text-xs">c.l</div>
          </button>
          
          <button className="w-full hover:bg-blue-700 transition">
            <div className="text-xs">p.l</div>
          </button>
          
          <button className="w-full hover:bg-blue-700 transition bg-blue-700">
            <div className="text-xs">lap</div>
          </button>
          
          <button className="w-full hover:bg-blue-700 transition">
            <div className="text-xs">r.r.l</div>
          </button>
        </div>
      </div>

      {/* Right Side Application Form */}
      <div className="flex-1 p-6 overflow-auto bg-[#FFFFFF] w-full ml-4">
        
      </div>
    </div>
  );
};

export default Dashboard;