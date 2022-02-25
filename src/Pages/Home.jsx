// Dependencies
import { React } from 'react'
import { Section } from '../Styles/GlobalComponents'
// Components
import Hero from '../Components/Hero/Hero'
import Projects from '../Components/Projects/Projects'
import Technologies from '../Components/Technologies/Technologies'
import { Layout } from '../Layout/Layout'
const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
      </Section>
      <Projects />
      <Technologies />
    </Layout>
  )
}

export default Home
