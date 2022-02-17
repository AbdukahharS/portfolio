import React from 'react'

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from './ProjectsStyles'
import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../Styles/GlobalComponents'
import { projects } from '../../Constants/constants'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}

const Projects = () => (
  <Section nopadding id='projects'>
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <Carousel
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
    </Carousel>
  </Section>
)

export default Projects
