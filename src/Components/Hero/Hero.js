import React from 'react'

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../Styles/GlobalComponents'
import Button from '../../Styles/GlobalComponents/Button'
import { LeftSection } from './HeroStyles'

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          I am Shahzad Abdukahhar (Shakhzodbek Kakhkhorov) and I'm from
          Surkhandarya, Uzbekistan. I am a computer science student at Inti
          International College in Malaysia. I can do Full-Stack Web
          Developments but I am better at Front-End
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
)

export default Hero
