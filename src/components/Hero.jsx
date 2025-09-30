export default function Hero() {
  return (
    <div className="relative w-full h-screen bg-gray-700 flex items-center justify-center overflow-hidden">
      <img src="/monogramme.png" className="absolute w-2/3 opacity-10" />
      <img src="/star.svg" className="absolute bottom-0 left-0 w-48 animate-slowspin" />
      <a href="#projects" className="z-10 bg-gray-500 text-white px-6 py-2 rounded-full hover:bg-gray-600">
        Portfolio
      </a>
    </div>
  )
}
