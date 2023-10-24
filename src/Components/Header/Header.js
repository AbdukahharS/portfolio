import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { FaTelegramPlane } from 'react-icons/fa'

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  LogoImg,
  LogoText,
} from './HeaderStyles'

const Header = () => (
  <Container>
    <Div1>
      <a
        href='/'
        style={{ display: 'flex', alignItems: 'center', color: 'white' }}
      >
        <LogoImg src={require('../../Images/logo.png')} alt='Logo' />
        <LogoText>Shahzad Abdukahhar</LogoText>
      </a>
    </Div1>
    <Div2>
      <li>
        <NavLink href='#projects'>Projects</NavLink>
      </li>
      <li>
        <NavLink href='#tech'>Technologies</NavLink>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com/AbdukahharS/' target='_blank'>
        <AiFillGithub size='3rem' />
      </SocialIcons>
      <SocialIcons
        href='https://www.linkedin.com/in/shakhzodbek-kakhkhorov-217ab9265/'
        target='_blank'
      >
        <AiFillLinkedin size='3rem' />
      </SocialIcons>
      <SocialIcons href='https://t.me/shahzod_qaxxorov' target='_blank'>
        <FaTelegramPlane size='3rem' />
      </SocialIcons>
    </Div3>
  </Container>
)

export default Header
