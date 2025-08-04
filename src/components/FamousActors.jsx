import { useEffect, useState } from "react"
import axios from "axios"

const FamousActors = () => {

  const [actors, setActors] = useState([])

  const randomActors = (actors) => {
    return [...actors].sort(() => Math.random() - 0.5)
  }

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/person/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}`)
      .then((res) => {
        const actor = randomActors(res.data.results)
        const limited = actor.slice(0, 10)
        setActors(limited)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="py-10">
      <div className="flex flex-wrap justify-center gap-11">
        {actors.map((actor) => (
          <div className="text-center rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300" key={actor.id}>
            <img src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`} alt={actor.name} className="w-[250px] h-[350px] object-cover" />
            <p className="py-2 font-semibold text-sm">{actor.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FamousActors