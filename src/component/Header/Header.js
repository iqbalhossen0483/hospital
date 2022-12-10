import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import UserInform from "./UserInform";

const Header = ({ className }) => {
  const [showMenu, setShowMenu] = useState(true);
  const [userInfo, setUserInfo] = useState(false);
  const { user, logOut } = useAuth();
  const header = useRef(null);

  //log out for user information page
  const LogOut = () => {
    logOut();
    setUserInfo(false);
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 480) setShowMenu(true);
    });
    window.addEventListener("click", (e) => {
      if (!header.current?.contains(e.target)) setUserInfo(false);
    });
  }, []);

  return (
    <div ref={header} className={"header " + className}>
      <div className='col-span-3 flex justify-start pl-5'>
        <Link to='/' className='text-2xl font-semibold cursor-pointer'>
          Islamia Hospital
        </Link>
      </div>

      {/* for mobile view */}
      <div className='text-right mr-4 text-2xl md:hidden'>
        <li
          onClick={() => setShowMenu((prev) => !prev)}
          className='fas fa-bars text-gray-500'
        />
      </div>

      {/* for tablet and above */}
      <div className={`menu-container ${showMenu ? "flex" : "hidden"}`}>
        <i
          onClick={() => setShowMenu(false)}
          className='closebtn fas fa-times'
        />
        <Link to='/'>Home</Link>
        <a href='#doctors'>Doctors</a>
        <Link to={user.email ? "/my-account" : "/log-in"}>Account</Link>
        <Link to='/contact-us'>Contact</Link>

        {/* user img */}
        {user.email && user.displayName && (
          <p
            className='cursor-pointer'
            onClick={() => setUserInfo((prev) => !prev)}
          >
            {user.displayName}
          </p>
        )}
      </div>
      {userInfo && <UserInform logOut={LogOut} />}
    </div>
  );
};

export default Header;
