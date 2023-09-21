import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import '../../assets/css/index.css'

export default function Home() {
  return (
    <React.Fragment>
        <section id='home'>
            <Container>
              <Row>
                <Col md={6}>
                  <h1 className='h1'>Tsenan'Tsika</h1>
                  <p className="p">La solution pour tous !</p>
                  <button className='btn btn-xl'>Rejoinez-nous</button>
                </Col>
                <Col md={6}>
                </Col>
              </Row>
            </Container>
        </section>
    </React.Fragment>
  )
}
