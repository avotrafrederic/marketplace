import React from 'react';
import { Container, Row,Col,Card, Button } from 'react-bootstrap';
import { FaUser,FaUsers,FaBuilding } from 'react-icons/fa';
const Pricing = () => {
    return (
        <React.Fragment>
            <section id='pricing'>
                <Container className='py-5'>
                    <h2 className='h2 text-center'>Abonnement</h2>
                    <p className='p text-center'>Profitez de nos plans tarrifaire</p>
                    <Row className='py-5'>
                        <Col md={4} className='mb-3'>
                            <Card>
                                <div className='card-header bg-light'></div>
                                <div className='card-body py-5 d-flex flex-column align-items-center'>
                                    <span className='d-flex justify-content-center align-items-center'>
                                        <FaUser size={27}/>
                                    </span>
                                    
                                    <h5 className='text-center mb-2 card-title'>Standard</h5>
                                    <p className='text-center'>
                                    Aimeriez-vous digitaliser votre commerce ou vous aimeriez d'integrer dans la commercialisation en ligne?
                                    </p>
                                    <h6 className='text-center my-2' style={{fontWeight:900}}>
                                    MGA 0 <strong style={{fontSize:'10px',fontWeight:900}}>/mois</strong>
                                    </h6>
                                    
                                </div>
                                <div className='card-footer bg-light'></div>
                            </Card>
                        </Col>
                        <Col md={4} className='mb-3'>
                            <Card>
                                <div className='card-header bg-warning'></div>
                                <div className='card-body py-5 d-flex flex-column align-items-center'>
                                    <span className='d-flex justify-content-center align-items-center'>
                                        <FaUsers size={27} />
                                    </span>
                                    <h5 className='text-center mb-2 card-title'>Premium</h5>
                                    <p className='text-center'>
                                    Aimeriez-vous digitaliser votre commerce ou vous aimeriez d'integrer dans la commercialisation en ligne?
                                    </p>
                                    <h6 className='text-center my-2' style={{fontWeight:900}}>
                                    MGA 100 000 <strong style={{fontSize:'10px',fontWeight:900}}>/mois</strong>
                                    </h6>
                                    <Button size='md' className='btn-warning text-uppercase' >Activer maintenant</Button>
                                </div>
                                <div className='card-footer bg-warning'></div>
                            </Card>
                        </Col>
                        <Col md={4} className='mb-3'>
                            <Card>
                                <div className='card-header bg-primary'></div>
                                <div className='card-body py-5 d-flex flex-column align-items-center'>
                                    <span className='d-flex justify-content-center align-items-center'>
                                        <FaBuilding size={27} />
                                    </span>
                                    <h5 className='text-center mb-2 card-title'>Ultimate</h5>
                                    <p className='text-center'>
                                    Aimeriez-vous digitaliser votre commerce ou vous aimeriez d'integrer dans la commercialisation en ligne?
                                    </p>
                                    <h6 className='text-center my-2' style={{fontWeight:900}}>
                                    MGA 200 000 <strong style={{fontSize:'10px',fontWeight:900}}>/mois</strong>
                                    </h6>
                                    <Button size='md' className='btn-primary text-uppercase' >Activer maintenant</Button>
                                </div>
                                <div className='card-footer bg-primary'></div>
                            </Card>
                            
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
}

export default Pricing;
