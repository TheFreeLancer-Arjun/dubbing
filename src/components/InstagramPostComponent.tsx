import PostSend from "./PostSend";

const postsData = [
  {
    username: "acharya_prashant_ap",
    timeAgo: "6h",
    audio: "Original audio",
    imageUrl: "src/components/Screenshot (21).png",
    likes: "5,408 likes",
    caption: "कामवासना जब सर चढ़ कर बोले! ...",
    comments: "View all 26 comments",
  },
  {
    username: "acharya_prashant_ap",
    timeAgo: "8h",
    audio: "Motivational Audio",
    imageUrl: "src/components/Screenshot (21).png",
    likes: "3,208 likes",
    caption: "ध्यान और आत्मा का संबंध ...",
    comments: "View all 15 comments",
  }
];

const InstagramPostComponent = () => {
  return (
    <div className="flex flex-wrap gap-2 h-[17.4cm] w-[18cm] overflow-y-scroll container">
      <PostSend />

      {postsData.map((post, index) => (
        <div key={index} className="bg-white border-2 border-black w-[18cm] rounded-2xl">
          {/* Post Header */}
          <div className="w-full h-[1.5cm] flex justify-between p-2">
            <div className="flex items-center gap-2">
              <div className="h-[1.3cm] w-[1.3cm] bg-green-500 rounded-2xl"></div>
              <div>
                <div className="flex items-center gap-1">
                  <h1 className="font-semibold">{post.username}</h1>
                  <h2 className="text-gray-600 text-sm">• {post.timeAgo}</h2>
                </div>
                <h4 className="text-gray-500 text-xs">{post.audio}</h4>
              </div>
            </div>
          </div>

          {/* Post Image */}
          <div className="flex justify-center items-center w-full bg-black rounded-lg">
            <img
              className="w-auto h-[16cm] object-cover"
              src={post.imageUrl}
              alt="Post"
            />
          </div>

          {/* Post Footer */}
          <div className="w-full p-4">
            <h1 className="font-semibold">{post.likes}</h1>

            <div className="flex gap-2 text-sm">
              <h1 className="font-semibold">{post.username}</h1>
              <p>{post.caption}</p>
              <span className="text-gray-500 cursor-pointer">more</span>
            </div>

            <h1 className="text-gray-500 text-sm cursor-pointer">{post.comments}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InstagramPostComponent;
