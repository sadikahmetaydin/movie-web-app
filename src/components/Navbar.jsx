import { PlayCircleIcon, HeartIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Navbar = () => {

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      if(query.length < 2) {
        setResults([]);
        return;
      }

      try {
        const res = await axios.get(
          'https://api.themoviedb.org/3/search/movie',
          {
            params: {
              api_key: import.meta.env.VITE_TMDB_API_KEY,
              query,
            },
          }
        );
        setResults(res.data.results.slice(0, 5));
      } catch (error) {
        console.log("Search Error: ", error);
      }
    };

    const delayDebounce = setTimeout(() => {
      fetchMovies();
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [query])


  return (
    <div className="relative z-50 text-white max-w-[1440px] mx-auto flex items-center justify-between p-5">
      <h1 className="flex items-center gap-2 text-xl text-slate-800"><PlayCircleIcon className="w-10 h-10 text-red-500" /> MovieBox</h1>

      <div className="relative w-full flex justify-center">
        <input value={query} onChange={(e) => setQuery(e.target.value)} className="text-sm text-slate-800 px-4 py-2 rounded-md w-1/3 border border-slate-700 focus:outline-0" type="text" placeholder="Search movies..." />

        {results.length > 0 && (
          <div className="absolute top-full left-102 w-[600px] max-w-4xl bg-white text-black shadow-lg rounded mt-2 z-50">
            {results.map((movie) => (
              <div key={movie.id} className="flex items-center gap-2 p-3 border-b hover:bg-gray-100 hover:text-red-500 cursor-pointer"> 
                <img src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w92${movie.poster_path}`
                    : "https://via.placeholder.com/92x138?text=No+Image"
                } alt={movie.title} className="w-[60px] h-auto rounded" />
                <span className="text-l font-medium">{movie.title}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      
      <div className="bg-red-500 p-2 rounded-full">
        <Link to={"/favorites"}>
           <HeartIcon className="w-7 h-7 text-white"/>
        </Link>
      </div>
    </div>
  )
}

export default Navbar