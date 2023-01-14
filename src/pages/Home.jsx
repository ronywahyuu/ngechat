import React from "react";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";
// import.meta.env

const Home = () => {
  // console.log(import.meta.env.VITE_apiKey);
  return (
    <div className="home">
      <div className="container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
