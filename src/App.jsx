import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import MovieDetails from "./pages/MovieDetails"
import Discover from "./components/Discover"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/movie/:id" element={ <MovieDetails /> } />
        <Route path="/discover" element={ <Discover />} />
      </Routes>
    </Router>
  )
}

export default App