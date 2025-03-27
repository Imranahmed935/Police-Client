import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("Logged out successfully");
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

  const commonLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "bg-[#1E317D] text-white p-2 rounded"
              : "text-[#1E317D] p-2 rounded"
          }
        >
          হোম
        </NavLink>
      </li>
    </>
  );

  const authLinks = user ? (
    <>
      <li><NavLink to="/profile">প্রোফাইল</NavLink></li>
      <li><NavLink to="/dashboard">ড্যাশবোর্ড</NavLink></li>
      <li><NavLink to="/settings">সেটিংস</NavLink></li>
      <li><button className="bg-red-500 text-white p-2 rounded" onClick={handleLogout}>লগআউট</button></li>
    </>
  ) : (
    <>
      <li>
        <NavLink
          to="/login"
          className="bg-[#1E317D] text-white p-2 rounded"
        >
          লগইন
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/signUp"
          className="border border-[#1E317D] text-[#1E317D] p-2 rounded"
        >
          সাইন-আপ
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-[#FFFFFF]">
      <div className="navbar px-4 max-w-7xl mx-auto">
      {/* Logo */}
      <div className="flex-1">
        <NavLink to="/" className="text-xl font-bold text-[#1E317D]">
          MyApp
        </NavLink>
      </div>

      {/* Navigation */}
      <div className="flex-none">
        {/* Mobile menu */}
        <div className="dropdown dropdown-end lg:hidden">
          <label tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {commonLinks}
            {authLinks}
          </ul>
        </div>

        {/* Desktop menu */}
        <ul className="menu menu-horizontal hidden lg:flex items-center gap-4">
          {commonLinks}
          {user ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="User Avatar"
                    src={user.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {authLinks}
              </ul>
            </div>
          ) : (
            authLinks
          )}
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
