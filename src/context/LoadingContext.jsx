import { createContext, useEffect, useState } from "react";
// import { auth } from "../../firebase";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const LoadingContext = createContext();

// eslint-disable-next-line react/prop-types
export const LoadingContextProvider = ({ children }) => {
  const loadSkeleton = () => {
    return <Skeleton />;
  };

  return (
    <LoadingContext.Provider value={{ loadSkeleton }}>
      {children}
    </LoadingContext.Provider>
  );
};
