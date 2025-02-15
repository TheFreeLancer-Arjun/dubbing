

export default function PostSend() {
  return (
    <div className="bg-white shadow rounded-lg p-4 mb-6 w-[18cm]">
    <input
      type="text"
      placeholder="Write your post"
      className="w-full  p-2 border border-gray-300 rounded-md mb-4"
    />
    <div className="flex gap-2">
      <button className="px-4 py-2 bg-red-300 rounded-full">Photo</button>
      <button className="px-4 py-2 bg-red-300 rounded-full">Video</button>
      <button className="px-4 py-2 bg-red-300 rounded-full">Write</button>
    </div>
  </div>
  )
}
