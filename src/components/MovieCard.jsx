import { HeartIcon } from "@heroicons/react/24/outline"
import { ClockIcon } from "@heroicons/react/24/solid"

const MovieCard = () => {
  return (
    <div className="hover:scale-105 transition-transform duration-300">
      
      <div className="mb-4">
        <img className="w-[250px] h-[370px]" src="https://m.media-amazon.com/images/M/MV5BNWIyNmU5MGYtZDZmNi00ZjAwLWJlYjgtZTc0ZGIxMDE4ZGYwXkEyXkFqcGc@._V1_.jpg" alt="cover" />
      </div>

      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-semibold">Dune: Part One</h2>
        <HeartIcon className="w-5 h-5 text-red-500 cursor-pointer" />
      </div>

      <div className="flex items-center justify-between text-sm text-gray-500">
        <h2>2025</h2>
        <div className="flex items-center gap-1">
          <ClockIcon className="w-5 h-5 text-red-500" />
          <span>104m</span>
        </div>
      </div>
    </div>
  )
}

export default MovieCard


