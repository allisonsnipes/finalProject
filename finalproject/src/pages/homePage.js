import React from 'react'
import footer from '../components/footer'
import jumbotron from '../components/jumbotron'
import navbar from '../components/navbar'
import pictures from '../components/pictures'
import createAccountModal from '../components/createAccountModal'
import loginModal from '../components/loginModal'
import wrapper from '../components/wrapper'
import form from '../components/form'
import col from '../components/col'
import Footer from '../components/footer'

function index () {
  return (
    <div>
      <Navbar />

      <Container>
        <Row>
          <Col size='md-12'>
            <Jumbotron />
          </Col>
        </Row>
        <Pictures />>
      </Container>
      <Footer />
    </div>
  )
}
