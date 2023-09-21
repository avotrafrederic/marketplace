import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { AiFillFacebook,AiFillLinkedin,AiFillTwitterCircle } from 'react-icons/ai';

export default function Footer() {
  return (
    <React.Fragment>
        <footer className='footer' id='footer'>
            <Container>
                <Row className='py-4'>
                  <Col md={4}>
                    
                  </Col>
                  <Col md={4} className='footer-icon'>
                    <span className='icon'>
                      <AiFillTwitterCircle />
                    </span>
                    <span className='icon'>
                      <AiFillFacebook />
                    </span>
                    <span className='icon'>
                    <AiFillLinkedin />
                    </span>
                  </Col>
                  <Col md={4}>
                     
                  </Col>
                </Row>
                <Row>
                  <Col md={4}>
                    
                  </Col>
                  <Col md={4}>
                    <p className='p text-center'>Copyright &copy; FullCoding.mg 2023</p>
                  </Col>
                  <Col md={4}>

                  </Col>
                </Row>
            </Container>
        </footer>
    </React.Fragment>
  )
}
