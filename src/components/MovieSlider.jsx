import { PlayIcon } from "@heroicons/react/24/solid"

const MovieSlider = () => {
  return (
    <div className="relative py-2">
      <img className="w-[1440px] h-[600px] object-cover brightness-[70%] rounded-md" src="https://www.arkitera.com/wp-content/uploads/2024/03/dune-part-two-production-design-patrice-vermette_dezeen_2364_hero.jpg" alt="johnWick" />

      <div className="absolute top-50 left-[10%] text-gray-100 flex flex-col items-start gap-4">
        <h2 className="text-4xl font-semibold">Dune: Part One</h2>

        <p className="w-md text-left text-sm">A mythic and emotionally charged hero's journey, "Dune" tells the story of Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, who must travel to the most dangerous planet in the universe to ensure the future of his family and his people.</p>

        <button className="flex items-center gap-1 bg-rose-700 px-5 p-2 rounded-md"><PlayIcon className="w-7 h-7" />Watch Trailer</button>

      </div>
    </div>
  )
}

export default MovieSlider