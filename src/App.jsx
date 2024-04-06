import Header from "./components/Header/Header"
import Catalog from "./components/Catalog/Catalog"
import Body from "./components/Body/Body"
import Events from "./components/Events/Events"
import Shows from "./components/Shows/Shows"
import Carousel from "./components/Carousel/Carousel"

function App() {

  return (
    <>
      <Header />
      <Catalog />
      <Body />
      <Carousel />
      {/* <Shows /> */}
      <Events />
    </>
  )
}

export default App
