import React from "react";
import useAuth from "../Hooks/useAuth";

const UserInform = ({ logOut }) => {
  const { user } = useAuth();
  return (
    <div className='user-info-wrapper'>
      <div>
        {user.photoURL ? (
          <img
            className='mx-auto h-20 w-20 rounded-full'
            src={user.photoURL}
            alt=''
          />
        ) : (
          <i className='fas fa-user text-2xl ml-3'></i>
        )}
      </div>
      <div>
        <p className='font-medium mt-2'>{user.displayName}</p>
        <button className='button mt-3' onClick={logOut}>
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default UserInform;
