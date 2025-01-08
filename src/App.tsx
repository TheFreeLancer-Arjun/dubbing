import React from "react";
import "tailwindcss/tailwind.css";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import PostSend from "./components/PostSend";

const App = () => {
  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {/* Main Layout */}
      <div className="flex flex-1">
        {/* Left Sidebar */}
     
<Profile/>
        {/* Center Section */}
        <div className="flex-1 bg-gray-50 p-4">
       <PostSend/>
          <div className="bg-white shadow rounded-lg p-4">Post/Feed Content</div>
        </div>

        {/* Right Section (Optional for future use) */}
        {/* <div className="w-1/4 bg-white shadow-lg p-4">Optional Right Section</div> */}
      </div>

      {/* Bottom Navbar */}
   <Navbar/>
    </div>
  );
};

export default App;
