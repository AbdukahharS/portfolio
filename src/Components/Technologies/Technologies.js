import React from 'react'
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../Styles/GlobalComponents'
import { technologies } from '../../Constants/constants'
import { List, ListItem } from './TechnologiesStyles'

const Technologies = ({ skills, setSkills }) => {
  const handleClick = (e, str) => {
    const btn = e.target
    btn.classList.toggle('active')
    let ind = skills.indexOf(str)
    if (ind === -1) {
      setSkills([...skills, str])
    } else {
      setSkills((skils) => {
        let upd = skils.filter((skil, i) => {
          if (i !== ind) {
            return skil
          }
        })
        return upd
      })
    }
  }
  return (
    <Section id='tech'>
      <SectionDivider divider />
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        I've worked with a range a technologies in the web development world.
        From Back-end To Design
      </SectionText>
      <List>
        {technologies.map((tech, i) => (
          <ListItem onClick={(e) => handleClick(e, tech)}>{tech}</ListItem>
        ))}
      </List>
      {/* <List>
        <ListItem>
          <picture>
            <DiReact size='3rem' />
          </picture>
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              Experiece with <br />
              React.js
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture>
            <DiFirebase size='3rem' />
          </picture>
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              Experience with <br />
              Node and Databases
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture>
            <DiZend size='3rem' />
          </picture>
          <ListContainer>
            <ListTitle>UI/UX</ListTitle>
            <ListParagraph>
              Experience with <br />
              tools like Figma
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List> */}
    </Section>
  )
}

export default Technologies
