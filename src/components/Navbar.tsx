import { IoHome, IoNotifications } from "react-icons/io5";
import { BsBagFill, BsFillCameraReelsFill } from "react-icons/bs";
import { IoMdPerson } from "react-icons/io";

const navItems = [
  { id: 1, icon: <IoHome />, label: "Home" },
  { id: 2, icon: <IoNotifications />, label: "Notifications" },
  { id: 3, icon: <BsBagFill />, label: "Bag" },
  { id: 4, icon: <BsFillCameraReelsFill />, label: "Reels" },
  { id: 5, icon: <IoMdPerson />, label: "Profile" },
];

export default function Navbar() {
  return (
    <div className="flex justify-center items-center h-[2cm] bg-">
      <div className="flex items-center justify-center gap-4 shadow-xl p-3 h-[1.8cm] rounded-2xl w-[20cm] bg-black/50">
        {navItems.map((item) => (
          <div
            key={item.id}
            className="w-[1.5cm] h-[1.5cm] bg-white flex justify-center items-center shadow-lg hover:scale-110 hover:mb-2 transition-all rounded-2xl"
            title={item.label}
          >
            <span className="text-4xl text-black">{item.icon}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
