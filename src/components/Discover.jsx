import { useEffect, useState } from "react"
import MovieCard from "./MovieCard"
import { Link } from "react-router-dom"
import { ChevronRightIcon } from "@heroicons/react/24/solid"

const Discover = () => {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchRandomMovies = async () => {
      try {
        const randomPage = Math.floor(Math.random() * 500) + 1;
        const res = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US&page=${randomPage}`
        );
        const data = await res.json();
        const shuffled = data.results.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, Math.floor(Math.random() * 11) + 25);
        
        const moviesWithRuntime = await Promise.all(
          selected.map(async (movie) => {
            try {
              const detailRes = await fetch(
                `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US`
              );
              const detailData = await detailRes.json();
              return {
                ...movie,
                runtime: detailData.runtime,
              };
            } catch (error) {
              console.log(`Something went wrong! ${movie.title}`, error)
              return {
                ...movie,
                runtime: null
              }
            }
          })
        )

        setMovies(moviesWithRuntime)
      } catch (error) {
        console.log("Something went wrong! ", error)
      }
    };

    fetchRandomMovies();
  }, [])

  const getFavorites = () => {
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : [];
  };

  const saveFavorites = (favorites) => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  const isFavorite = (id) => {
    return getFavorites().some((fav) => fav.id === id);
  }

  const toggleFavorite = (movie) => {
    const current = getFavorites();
    const exists = current.some((fav) => fav.id === movie.id);

    const updated = exists
      ? current.filter((fav) => fav.id !== movie.id)
      : [...current, movie];

    saveFavorites(updated);
  }

  return (
    <div className="px-6 py-10">

      <div className="flex justify-between items-center">
        <Link to={"/"}><h2 className="ml-12 text-3xl font-bold mb-6 text-gray-500 hover:text-red-500 cursor-pointer flex items-center relative">🎬 Home <ChevronRightIcon className="w-5 h-5 absolute left-35 top-3" /></h2></Link>
        <Link to={"/favorites"}><h2 className="mr-30 text-3xl font-bold mb-6 text-gray-500 hover:text-red-500 duration transition-all cursor-pointer flex items-center relative">❤️ Favorites <ChevronRightIcon className="w-5 h-5 absolute left-45 top-3" /></h2></Link>
      </div>

      <div className="flex flex-wrap space-x-10 space-y-10 justify-center">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            posterPath={movie.poster_path}
            releaseDate={movie.release_date}
            runtime={movie.runtime}
            isFavorite={isFavorite(movie.id)}
            onToggleFavorite={() => toggleFavorite(movie)}
          />
        ))}
      </div>
    </div>
  )
}

export default Discover