import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import about from '../../assets/img/bg/Ecommerce-Website.webp'

const About = () => {
    return (
        <React.Fragment>
            <section id='about'>
                <Container className='py-5'>
                    <h2 className='text-center h2'>A propos</h2>
                    <p className='text-center p'>Aimeriez-vous connaître plus sur Tsenan'Tsika</p>
                    <Row className='py-5'>
                        <Col md={6}>
                            <Container fluid>
                                <Image src={about.toString()} className='img-fluid'/>
                            </Container>
                        </Col>
                        <Col md={6}>
                            <h3 className='h3'>Tsenan'Tsika</h3>
                            <p className='p'>Tsenan'Tsika est une plateforme de vente et achat en ligne à Madagascar</p>
                            <hr/>
                            <ul>
                                <li>
                                    Vendre et acheter en toute securité
                                </li>
                                <li>
                                    Transaction et facturation instannée et en temps réel
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
}

export default About;
