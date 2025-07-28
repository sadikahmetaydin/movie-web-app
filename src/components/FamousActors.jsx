const actors = [
  {
    name: 'Leonardo DiCaprio',
    image: 'https://m.media-amazon.com/images/M/MV5BMjI0MTg3MzI0M15BMl5BanBnXkFtZTcwMzQyODU2Mw@@._V1_FMjpg_UX1000_.jpg',
  },
  {
    name: 'Scarlett Johansson',
    image: 'https://m.media-amazon.com/images/M/MV5BMTM3OTUwMDYwNl5BMl5BanBnXkFtZTcwNTUyNzc3Nw@@._V1_FMjpg_UX1000_.jpg',
  },
  {
    name: 'Keanu Reeves',
    image: 'https://m.media-amazon.com/images/M/MV5BNDEzOTdhNDUtY2EyMy00YTNmLWE5MjItZmRjMmQzYTRlMGRkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
  },
  {
    name: 'Timothée Chalamet',
    image: 'https://m.media-amazon.com/images/M/MV5BZTIyZWY4ZjktOGJiZi00NGFkLTllMjctZjJjMmNiMjIxOTY2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
  },
  {
    name: 'Chloë Grace Moretz',
    image: 'https://m.media-amazon.com/images/M/MV5BMTIyMzYyMjItNGE3YS00N2NiLWFkNGEtZDhiZTI2ODk4Zjc0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
  }
];

const FamousActors = () => {
  return (
    <div className="py-10">
      <div className="flex flex-wrap justify-center gap-11">
        {actors.map((actor, index) => (
          <div className="text-center rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300" key={index}>
            <img src={actor.image} alt={actor.name} className="w-[250px] h-[350px] object-cover" />
            <p className="py-2 font-semibold text-sm">{actor.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
export default FamousActors