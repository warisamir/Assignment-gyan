import './App.css'
import Banner from './components/Banner';
import Navbar from "./components/Navbar";
import REvents from "./components/EventPannel/Recommended";
import UEvents from "./components/EventPannel/Upcomming";

function App() {
  
  return (
    <>
    <Navbar/>
    <Banner/>
    <REvents/>
    <UEvents/>
    </>
  )
}

export default App
