import { React } from 'react'
import Theme from './Styles/theme'
import ParticlesAnimation from './Components/ParticlesAnimation'
import Hero from './Components/Hero/Hero'
import Projects from './Components/Projects/Projects'
import Technologies from './Components/Technologies/Technologies'
import { Layout } from './Layout/Layout'
import { Section } from './Styles/GlobalComponents'

function App() {
  return (
    <Theme>
      <Layout>
        <Section grid>
          <Hero />
        </Section>
        <Projects />
        <Technologies />
      </Layout>
      <ParticlesAnimation />
    </Theme>
  )
}

export default App
