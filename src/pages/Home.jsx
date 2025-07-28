import MovieList from "../components/MovieList"
import MovieSlider from "../components/MovieSlider"
import Navbar from "../components/Navbar"
import { ChevronRightIcon } from "@heroicons/react/24/outline"
import TrailerList from "../components/TrailerList"
import FamousActors from "../components/FamousActors"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="max-w-[1440px] mx-auto">
        <MovieSlider />

        <div className="flex items-center justify-between">
          <h2 className="text-4xl font-semibold my-6">Featured Movie</h2>
          <h2 className="text-md text-red-500 flex items-center justify-center gap-1">See more <ChevronRightIcon className="w-5 h-5" /></h2>
        </div>

        <MovieList />


        <div className="flex items-center justify-between mt-5">
          <h2 className="text-4xl font-semibold my-6">New Arrival</h2>
          <h2 className="text-md text-red-500 flex items-center justify-center gap-1">See more <ChevronRightIcon className="w-5 h-5" /></h2>
        </div>

        <MovieList />


        <div className="flex items-center justify-between mt-5">
          <h2 className="text-4xl font-semibold my-6">Exclusive Videos</h2>
          <h2 className="text-md text-red-500 flex items-center justify-center gap-1">See more <ChevronRightIcon className="w-5 h-5" /></h2>
        </div>

        <TrailerList />

        <div className="flex items-center justify-between mt-5">
          <h2 className="text-4xl font-semibold my-6">Featured Casts</h2>
          <h2 className="text-md text-red-500 flex items-center justify-center gap-1">See more <ChevronRightIcon className="w-5 h-5" /></h2>
        </div>

        <FamousActors />

        <Footer />

      </div>
    </div>
  )
}

export default Home