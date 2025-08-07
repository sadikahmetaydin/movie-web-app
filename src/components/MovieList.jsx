import MovieCard from "./MovieCard"
import { useEffect, useState } from "react"

const MovieList = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US&page=1`
        );
        const data = await res.json();
        const randomMovies = data.results.sort(() => 0.5 - Math.random()).slice(0, 5);

        const detailMovies = await Promise.all(
          randomMovies.map(async (movie) => {
            const detailRes = await fetch (
              `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US`
            );
            const detailData = await detailRes.json();
            return {
              ...movie,
              runtime: detailData.runtime
            }
          })
        )

        setMovies(detailMovies)
      } catch (error) {
        console.log("Something went wrong: ", error);
      }
    };

    fetchPopularMovies();

  }, [])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
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
  )
}

export default MovieList