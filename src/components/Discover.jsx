import { useEffect, useState } from "react"
import MovieCard from "./MovieCard"

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

  return (
    <div className="px-6 py-10">
      <div className="flex flex-wrap space-x-10 space-y-10 justify-center">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            posterPath={movie.poster_path}
            releaseDate={movie.release_date}
            runtime={movie.runtime}
          />
        ))}
      </div>
    </div>
  )
}

export default Discover