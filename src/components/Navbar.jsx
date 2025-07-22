import { PlayCircleIcon, StarIcon } from "@heroicons/react/24/outline"

const Navbar = () => {
  return (
    <div className="bg-gray-900 text-white max-w-[1440px] mx-auto flex items-center justify-between p-5">
      <h1 className="flex items-center gap-2 text-xl"><PlayCircleIcon className="w-10 h-10 text-red-500" /> MovieBox</h1>

      <input className="bg-gray-800 text-sm text-white px-4 py-2 rounded-md w-1/3" type="text" placeholder="Search movies..." />

      <div className="bg-red-500 p-2 rounded-full">
        <StarIcon className="w-7 h-7 text-white"/>
      </div>
    </div>
  )
}

export default Navbar