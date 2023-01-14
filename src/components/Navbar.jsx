import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import { LoadingContext } from "../context/LoadingContext";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Navbar = () => {
  const { currentUser, loading } = useContext(AuthContext);
  const { loadSkeleton } = useContext(LoadingContext);

  // console.log(`is Loading: ${loading}`);
  return (
    <div className="navbar">
      {/* {loadSkeleton} */}
      <span className="logo">Ngechat</span>
      <div className="user">
        {loading && <Skeleton />}
        {!loading && (
          <>
            <img src={currentUser.photoURL} alt="" />
            <span>{currentUser.displayName}</span>
            <button onClick={() => signOut(auth)}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.33333 35C7.41667 35 6.63167 34.6739 5.97833 34.0217C5.32611 33.3683 5 32.5833 5 31.6667V8.33333C5 7.41667 5.32611 6.63167 5.97833 5.97833C6.63167 5.32611 7.41667 5 8.33333 5H20V8.33333H8.33333V31.6667H20V35H8.33333ZM26.6667 28.3333L24.375 25.9167L28.625 21.6667H15V18.3333H28.625L24.375 14.0833L26.6667 11.6667L35 20L26.6667 28.3333Z"
                  fill="#8E8E8E"
                />
              </svg>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
