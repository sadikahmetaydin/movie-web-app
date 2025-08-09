import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import MovieDetails from "./pages/MovieDetails"
import Discover from "./components/Discover"
import Favorites from "./components/Favorites"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/movie/:id" element={ <MovieDetails /> } />
        <Route path="/discover" element={ <Discover />} />
        <Route path="/favorites" element={ <Favorites />} />
      </Routes>
    </Router>
  )
}

export default App