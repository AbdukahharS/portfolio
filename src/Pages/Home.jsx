// Dependencies
import { React, useState } from 'react'
import { Section } from '../Styles/GlobalComponents'
// Components
import Hero from '../Components/Hero/Hero'
import Projects from '../Components/Projects/Projects'
import Technologies from '../Components/Technologies/Technologies'
import { Layout } from '../Layout/Layout'
const Home = () => {
  const [skills, setSkills] = useState([])

  return (
    <Layout>
      <Section grid>
        <Hero />
      </Section>
      <Technologies skills={skills} setSkills={setSkills} />
      <Projects skills={skills} />
    </Layout>
  )
}

export default Home
