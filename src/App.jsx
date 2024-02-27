import './App.css'
import {Landing } from './components/landing/Landing'
import NavBar from './components/navbar/Navbar'
import { EventBanner } from './components/eventBanner/EventBanner'
import { Events } from './components/events/Events'
import Foot from './components/footer/Foot'
import Clicks from './components/clicks/Clicks'
function App() {

  return (
    <>
      <NavBar/>
      <Landing/>
      <EventBanner/>
      <Events/>
      <Clicks/>
      <Foot/>
    </>
  )
}

export default App
