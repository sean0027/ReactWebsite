import React from "react"
import Navbar from "./components/Navbar"
import Banner from "./sections/Banner"
import MemberShip from "./sections/Membership"
import Roadmap from "./sections/Roadmap"
import Team from "./sections/Team"
import Connect from "./sections/Connect"
import Join from "./sections/Join"
// import Newsletter from "./sections/Newsletter"
import "./App.css"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <MemberShip />
      <Team />
      <Roadmap />
      <Connect />
      <Join />
    </div>
  )
}

export default App
