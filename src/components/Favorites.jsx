import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/24/solid"

const Favorites = () => {

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  const removeFavorite = (id) => {
    const updated = favorites.filter((movie) => movie.id !== id);
    localStorage.setItem("favorites", JSON.stringify(updated));
    setFavorites(updated);
  }

  return (
    <div className="px-6 py-6">

      <div className="flex justify-between items-center">
        <Link to={"/"}><h2 className="ml-12 text-3xl font-bold mb-6 text-gray-500 hover:text-red-500 cursor-pointer flex items-center relative">🎬 Home <ChevronRightIcon className="w-5 h-5 absolute left-35 top-3" /></h2></Link>
        <Link to={"/discover"}><h2 className="mr-32 text-3xl font-bold mb-6 text-gray-500 hover:text-red-500 cursor-pointer flex items-center relative">🎬 Discover Movies <ChevronRightIcon className="w-5 h-5 absolute left-72 top-3" /></h2></Link>
      </div>

      {favorites.length === 0 ? (
        <p className="text-red-400 text-center font-semibold">There is no favorite movies!</p>
      ) : (
        <div className="flex flex-wrap space-x-10 space-y-10 justify-center">
          {favorites.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              posterPath={movie.poster_path}
              releaseDate={movie.release_date}
              runtime={movie.runtime}
              isFavorite={true}
              onToggleFavorite={() => removeFavorite(movie.id)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Favorites