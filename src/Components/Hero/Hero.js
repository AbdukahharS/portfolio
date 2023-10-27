import React from 'react'

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../Styles/GlobalComponents'
import Button from '../../Styles/GlobalComponents/Button'
import { SecondaryBtn } from '../../Styles/GlobalComponents'
import { LeftSection, SectionButtons } from './HeroStyles'

const Hero = () => (
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
        <SectionButtons>
          <Button>
            <a
              href='https://t.me/an_unchosen_one'
              rel='noreferrer'
              target='_blank'
            >
              Learn More
            </a>
          </Button>
          <SecondaryBtn hero>
            <a
              href='/files/Resume.pdf'
              download
              rel='noreferrer'
              target='_blank'
            >
              Download CV
            </a>
          </SecondaryBtn>
        </SectionButtons>
      </LeftSection>
    </Section>
  </>
)

export default Hero
