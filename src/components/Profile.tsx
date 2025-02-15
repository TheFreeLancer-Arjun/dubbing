const profileData = {
  username: "acharya_prashant_ap",
  fullName: "आचार्य प्रशांत",
  profileImage: "src/components/Screenshot (21).png",
  stats: [
    { label: "Posts", value: "5,134" },
    { label: "Followers", value: "5.9M" },
    { label: "Following", value: "1" },
  ],
  reels: new Array(10).fill("src/components/Screenshot (21).png"),
};

export default function Profile() {
  return (
    <div className="w-[400px] bg-white p-4 rounded-lg shadow-lg">
      {/* Profile Header */}
      <div className="flex items-center gap-4">
        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-300">
          <img
            src={profileData.profileImage}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-lg font-bold">{profileData.username}</h2>
          <p className="text-gray-500 text-sm">{profileData.fullName}</p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex justify-between text-center my-4">
        {profileData.stats.map((stat, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold">{stat.value}</h3>
            <p className="text-gray-500 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-2">
        <button className="w-full bg-blue-500 text-white py-2 rounded-lg">Message</button>
        <button className="w-full bg-gray-300 text-black py-2 rounded-lg">Following</button>
      </div>

      {/* Reels Section */}
      <h3 className="text-md font-semibold mt-4">Reels</h3>

      <div className="w-full h-[10cm] overflow-y-scroll container overflow-hidden  rounded-lg ">
       <div className="flex  ">
       <div className="flex flex-wrap  gap-2">
          {profileData.reels.map((reel, index) => (
            <div key={index} className="h-[6cm] w-[3cm] bg-slate-300 rounded-lg">
              <img className="h-full w-full rounded-lg object-cover" src={reel} alt={`Reel ${index + 1}`} />
            </div>
          ))}
        </div>
       </div>
      </div>
    </div>
  );
}
