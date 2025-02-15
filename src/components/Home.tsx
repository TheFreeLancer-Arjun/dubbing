
import "tailwindcss/tailwind.css";

import Profile from "./Profile";

import Navbar from "./Navbar";
import InstagramPostComponent from "./InstagramPostComponent";

export default function Home() {
  return (
    
          <div className="h-screen flex flex-col bg-gray-100">
      {/* Main Layout */}


     
   <div className="flex   justify-start items-start ">

   <div className="flex flex-1">
     

     <Profile/>
     <InstagramPostComponent/>
   </div>

  
   </div>

      {/* Bottom Navbar */}
      <Navbar />
    </div>
    
  )
}
