import React from 'react'

import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import { Container } from './LayoutStyles'

export const Layout = ({ children }) => {
  return (
    <Container id='main'>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  )
}
