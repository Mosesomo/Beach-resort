import Beaches from "./components/Beaches"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Resorts from "./components/Resorts"
import Search from "./components/Search"
import Slide from "./components/Slide"


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Resorts />
      <Search />
      <Beaches />
      <Slide />
      <Footer />
    </div>
  )
}

export default App
