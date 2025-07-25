const trailers = [
  {
    id: 1,
    title: "Dune: Part Two",
    videoUrl: "https://www.youtube.com/embed/Way9Dexny3w",
  },
  {
    id: 2,
    title: "Oppenheimer",
    videoUrl: "https://www.youtube.com/embed/bK6ldnjE3Y0",
  },
  {
    id: 3,
    title: "Barbie",
    videoUrl: "https://www.youtube.com/embed/pBk4NYhWNMM",
  },
];


const TrailerList = () => {
  return (
    <div className="flex overflow-hidden space-x-11 scrollbar-hide mb-10">
      {trailers.map((trailer) => (
        <div key={trailer.id} className="min-w-[450px] hover:scale-[1.02] transition-transform duration-300">
          <iframe
          className="w-[450px] h-[253px] rounded"
          src={trailer.videoUrl}
          title={trailer.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          ></iframe>
          <h3 className="text-xl font-semibold mt-4">{trailer.title}</h3>
        </div>
      ))}
    </div>
  )
}

export default TrailerList