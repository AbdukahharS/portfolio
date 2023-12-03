import React, { useEffect, useState } from 'react'

import { Container, Card } from './ProjectsStyles'
import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../Styles/GlobalComponents'
import { projects as data } from '../../Constants/constants'
import 'react-multi-carousel/lib/styles.css'

const Projects = ({ skills }) => {
  const [projects, setProjects] = useState(data)

  useEffect(() => {
    if (skills.length === 0) {
      setProjects(data)
    } else {
      const arr = []
      skills.forEach((skill) => {
        data.forEach((el) => {
          if (el.tags.includes(skill) && !arr.includes(el)) {
            arr.push(el)
          }
        })
      })
      setProjects(arr)
    }
  }, [skills])

  return (
    <Section nopadding id='projects'>
      <SectionDivider />
      <SectionTitle main>Projects</SectionTitle>
      <Container>
        {projects.map((project, i) => (
          <Card key={i}>{project.title}</Card>
        ))}
      </Container>
      <SectionDivider colorAlt />
    </Section>
  )
}

export default Projects

/*<Carousel
      responsive={responsive}
      draggable={true}
      swipable={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
    >
      {projects.map((p, i) => {
        return (
          <BlogCard key={i}>
            <Img src={require(`../../Images/${p.image}`)} />
            <TitleContent>
              <HeaderThree>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className='card-info'>{p.description}</CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>
                })}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={p.visit}>Live</ExternalLinks>
              <ExternalLinks href={p.source}>Source</ExternalLinks>
            </UtilityList>
          </BlogCard>
        )
      })}
    </Carousel>*/
