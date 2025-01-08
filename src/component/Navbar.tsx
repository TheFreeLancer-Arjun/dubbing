import { IoHome } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";
import { BsBagFill } from "react-icons/bs";
import { BsFillCameraReelsFill } from "react-icons/bs";
import { IoMdPerson } from "react-icons/io";

export default function Navbar() {
  return (
    <div className="flex justify-center items-center h-[3cm] bg-black">
      {/* Taskbar */}
      <div className="flex items-center justify-center gap-4  shadow-xl p-3 rounded-2xl w-[20cm] bg-white/50">
        {/* Individual Icons */}
        <div className="w-[2cm] h-[2cm] bg-white flex justify-center items-center shadow-lg hover:scale-110 transition-transform rounded-2xl">
          <IoHome className="text-4xl text-gray-700" />
        </div>
        <div className="w-[2cm] h-[2cm] bg-white flex justify-center items-center shadow-lg hover:scale-110 transition-transform rounded-2xl">
          <IoNotifications className="text-4xl text-gray-700" />
        </div>
        <div className="w-[2cm] h-[2cm] bg-white flex justify-center items-center shadow-lg hover:scale-110 transition-transform rounded-2xl">
          <BsBagFill className="text-4xl text-gray-700" />
        </div>
        <div className="w-[2cm] h-[2cm] bg-white flex justify-center items-center shadow-lg hover:scale-110 transition-transform rounded-2xl">
          <BsFillCameraReelsFill className="text-4xl text-gray-700" />
        </div>
        <div className="w-[2cm] h-[2cm] bg-white flex justify-center items-center shadow-lg hover:scale-110 transition-transform rounded-2xl">
          <IoMdPerson className="text-4xl text-gray-700" />
        </div>
      </div>
    </div>
  );
}
