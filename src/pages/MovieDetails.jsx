import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ClockIcon } from "@heroicons/react/24/solid"

const MovieDetails = () => {

  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`)
      .then((res) => res.json())
      .then((data) => setMovie(data))
      .catch((err) => console.log(err))
  }, [id])

  if (!movie) return <div className="text-white p-10">Loading...</div>

  return (
    <div className="p-10 max-w-6xl mx-auto flex items-center gap-5">

      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="mb-4 rounded shadow" />

      <div>
        <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
        <p className="text-xl text-gray-400 mb-3">{movie.overview}</p>
        <p className="text-sm text-gray-400 flex items-center gap-1"><ClockIcon className="w-4.5 h-4.5 text-red-500" /> {movie.runtime} minute / {movie.release_date?.slice(0, 4)}</p>
      </div>

    </div>
  )
}

export default MovieDetails