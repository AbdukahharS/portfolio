// Dependencies
import { React } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ParticlesAnimation from './Components/ParticlesAnimation'
import Theme from './Styles/theme'
// Pages
import Home from './Pages/Home'
import Projects from './Pages/Projects'

function App() {
  return (
    <Router>
      <Theme>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
        <ParticlesAnimation />
      </Theme>
    </Router>
  )
}

export default App
