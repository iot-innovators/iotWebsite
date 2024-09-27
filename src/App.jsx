import './App.css'
import {Landing } from './components/landing/Landing'
import NavBar from './components/navbar/Navbar'
import { EventBanner } from './components/eventBanner/EventBanner'
import { Events } from './components/events/Events'
import Foot from './components/footer/Foot'
import Clicks from './components/clicks/Clicks'
import Contact from './components/contact/Contact'
import Instapost from './components/instapost/Instapost'
import About from './components/about/About'
import Team from './components/team/Team'

function App() {

  return (
    <> 
    <div className='bg-bg1  h-full  bg-cover '>
      <NavBar/>
      <div className='px-10 md:px-24 '>
        <Landing/> 
      </div>
       {/* <Events/> */}
      {/* <NavBar/> */}
      {/* <Landing/> */}

      {/* <Landing/>
      <EventBanner/>
      // <Events/>
      <Clicks/>
      <Contact/>
      <Team/>
      <Foot/> */}
      </div>
    </>
  )
}

export default App
