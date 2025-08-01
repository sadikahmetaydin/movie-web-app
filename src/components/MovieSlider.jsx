import { PlayIcon } from "@heroicons/react/24/solid"
import { useState, useEffect } from "react";

const movies = [
  {
    title: "Dune: Part One",
    description:
      'A mythic and emotionally charged hero\'s journey, "Dune" tells the story of Paul Atreides...',
    image:
      "https://images.squarespace-cdn.com/content/v1/521dec4de4b0912f523f3b56/1636288167116-W44IFJZKNMKSQOC9QBN5/dune-poster.jpg?format=2500w",
  },
  {
    title: "John Wick: Chapter 4",
    description:
      "John Wick uncovers a path to defeating The High Table. But before he can earn his freedom...",
    image:
      "https://static1.squarespace.com/static/51b3dc8ee4b051b96ceb10de/51ce6099e4b0d911b4489b79/6403dbe07bb4393b73768200/1678769138071/review-john-wick-chapter-4-elevates-the-badass-action-franchise-to-a-new-level.jpg?format=1500w",
  },
  {
    title: "Oppenheimer",
    description:
      "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
    image:
      "https://media.gq-magazine.co.uk/photos/621688bb1feae1d12c8572d1/16:9/w_1920,h_1080,c_limit/230222_oppenheimer_HP.jpg",
  },
  {
    title: "Interstellar",
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    image:
      "https://habereksprescomtr.teimg.com/haberekspres-com-tr/uploads/2024/08/interstellar-movie-wide.jpg",
  },
  {
    title: "The Batman",
    description:
      "When a sadistic killer leaves behind a trail of cryptic clues, Batman must investigate the city's corruption.",
    image:
      "https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/dfa50804-e6f6-4fa2-a732-693dbc50527b/37082735-6715-11ef-96ad-02805d6a02df?host=wbd-images.prod-vod.h264.io&partner=beamcom",
  },
];

const MovieSlider = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % movies.length)
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentMovie = movies[currentIndex];

  return (
    <div className="relative py-2">
      <img className="w-[1440px] h-[600px] object-cover brightness-[70%] rounded-md" src={currentMovie.image} alt={currentMovie.title} />

      <div className="absolute top-50 left-[10%] text-gray-100 flex flex-col items-start gap-4">
        <h2 className="text-4xl font-semibold">{currentMovie.title}</h2>

        <p className="w-md text-left text-sm">{currentMovie.description}</p>

        <button className="flex items-center gap-1 bg-rose-700 px-5 p-2 rounded-md"><PlayIcon className="w-7 h-7" />Watch Trailer</button>

      </div>
    </div>
  )
}

export default MovieSlider