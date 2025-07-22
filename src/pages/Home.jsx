import MovieList from "../components/MovieList"
import MovieSlider from "../components/MovieSlider"
import Navbar from "../components/Navbar"

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="max-w-[1440px] mx-auto">
        <MovieSlider />

        <h2 className="text-xl font-semibold my-6">Doscover Movies</h2>
        <MovieList />
      </div>
    </div>
  )
}

export default Home