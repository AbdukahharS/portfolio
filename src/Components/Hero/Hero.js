import React from 'react'

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../Styles/GlobalComponents'
import Button from '../../Styles/GlobalComponents/Button'
import { SecondaryBtn } from '../../Styles/GlobalComponents'
import { LeftSection } from './HeroStyles'

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Website
        </SectionTitle>
        <SectionText>
          I am Shahzod Abdukahhar (Shakhzodbek Kakhkhorov) and I'm from
          Surkhandarya, Uzbekistan. I am a computer science student at Inti
          International College in Malaysia. I can do Full-Stack Web
          Developments but I am better at Front-End
        </SectionText>
        <div>
          <Button onClick={props.handleClick}>Learn More</Button>
          <SecondaryBtn>Download CV</SecondaryBtn>
        </div>
      </LeftSection>
    </Section>
  </>
)

export default Hero
