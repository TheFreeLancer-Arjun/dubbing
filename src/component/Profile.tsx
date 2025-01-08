
export default function Profile() {
  return (
    <div className="w-1/4 bg-white shadow-lg p-4">
    <div className="text-center mb-6">
      <div className="w-24 h-24 bg-red-400 rounded-full mx-auto mb-4"></div>
      <h2 className="text-lg font-bold">Salman Khan</h2>
      <p className="text-gray-500 text-sm">Car se logon ko kuchalna</p>
    </div>
    <div>
      <h3 className="text-md font-semibold mb-3">Reels</h3>
      <div className="grid grid-cols-3 gap-2">
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className="w-full h-24 bg-gray-200 rounded-lg shadow-sm"
          ></div>
        ))}
      </div>
    </div>
  </div>
  )
}
