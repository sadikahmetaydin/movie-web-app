import { HeartIcon as SolidHeart } from "@heroicons/react/24/solid";
import { HeartIcon as OutlineHeart } from "@heroicons/react/24/outline";
import { ClockIcon } from "@heroicons/react/24/solid"
import { Link } from "react-router-dom"

const MovieCard = ({ id, title, posterPath, releaseDate, runtime, isFavorite, onToggleFavorite }) => {
  return (
    <div className="hover:scale-105 transition-transform duration-300 w-[250px]">
        
        <Link to={`/movie/${id}`}>
          <div className="mb-4">
            <img className="w-[250px] h-[370px] object-cover rounded-lg" src={
              posterPath
                ? `https://image.tmdb.org/t/p/w500${posterPath}`
                : "https://via.placeholder.com/250x370?text=No+Image"
            } alt={title} />
          </div>
        </Link>

        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-semibold truncate">{title}</h2>
          <button onClick={onToggleFavorite}>
            {isFavorite ? (
              <SolidHeart className="w-5 h-5 text-red-500" />
            ) : (
              <OutlineHeart className="w-5 h-5 text-gray-400 hover:text-red-500" />
            )}
          </button>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <h2>{releaseDate?.slice(0, 4) || "-"}</h2>
          <div className="flex items-center gap-1">
            <ClockIcon className="w-5 h-5 text-red-500" />
            <span>{runtime ? `${runtime}m` : "—"}</span>
          </div>
        </div>
      </div>
  )
}

export default MovieCard