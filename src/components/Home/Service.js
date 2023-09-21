import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

import { BiShoppingBag,BiPaperclip  } from 'react-icons/bi'
import { FaRegHandshake } from 'react-icons/fa';

const Service = () => {
    return (
        <React.Fragment>
            <section id='service'>
                <Container className='py-5'>
                    <h2 className='h2 text-center'>Services</h2>
                    <p className='p text-center'>Profitez de nos services !</p>
                    <Row className='py-5'>
                        <Col md={4} className='mb-3'>
                            <Card>
                                <span className='icon'>
                                    <BiShoppingBag/>
                                </span>
                                <div className='card-body'>
                                <h3 className='card-title'>Vente</h3>
                                   
                                    <p className='text-justify'>
                                    Aimeriez-vous digitaliser votre commerce ou vous aimeriez d'integrer dans la commercialisation en ligne?
                                    <br/>
                                    Tsenan'Tsika vous offres l'opportinuité de vendre vos produits en ligne afin de fidélisé vos client et augmenté le taux de votre productivité</p>
                                </div>
                            </Card>
                        </Col>
                        <Col md={4} className='mb-3'>
                            <Card>
                                <span className='icon'>
                                    <BiPaperclip />
                                </span>
                                <div className='card-body'>
                                <h3 className='card-title'>Facturation</h3>
                                <p className='text-justify'>
                                    Aimeriez-vous digitaliser votre commerce ou vous aimeriez d'integrer dans la commercialisation en ligne?
                                    <br/>
                                    Tsenan'Tsika vous offres l'opportinuité de vendre vos produits en ligne afin de fidélisé vos client et augmenté le taux de votre productivité</p>
                                </div>
                            </Card>
                        </Col>
                        <Col md={4} className='mb-3'>
                            <Card>
                                <span className='icon'>
                                    <FaRegHandshake />
                                </span>
                                <div className='card-body'>
                                <h3 className='card-title'>Commande</h3>
                                <p className='text-justify'>
                                    Aimeriez-vous digitaliser votre commerce ou vous aimeriez d'integrer dans la commercialisation en ligne?
                                    <br/>
                                    Tsenan'Tsika vous offres l'opportinuité de vendre vos produits en ligne afin de fidélisé vos client et augmenté le taux de votre productivité</p>
                                </div>
                            </Card>
                        </Col>
                       
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
}

export default Service;
