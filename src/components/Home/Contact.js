import React from 'react';
import { Container,Row,Col,Card, FloatingLabel, Form, Button } from 'react-bootstrap';
import {BsFillTelephoneFill} from 'react-icons/bs'
import {ImLocation} from 'react-icons/im'
import {MdOutlineAlternateEmail} from 'react-icons/md'
import { BiSend } from 'react-icons/bi';
const Contact = () => {
    return (
        <React.Fragment>
            <section id='contact'>
                <Container className='py-5'>
                    <h2 className='h2 text-center'>Contact</h2>
                    <p className='p text-center'>N'hesitez pas de nous contacter pour plus d'information</p>
                    <Row className='py-5'>
                        <Col md={6}>
                            <Container fluid className='py-5'>
                                <Card>
                                    <span className='icon'>
                                        <ImLocation/>
                                    </span>
                                    <span className='description'>
                                        IVW 42 AMA Anosipatra Est <br/>
                                        Antanarivo Madagascar
                                    </span>
                                </Card>
                                <Card>
                                    <span className='icon'>
                                        <BsFillTelephoneFill/>
                                    </span>
                                    <span className='description'>
                                        +261 32 56 088 38
                                    </span>
                                </Card>
                                <Card>
                                    <span className='icon'>
                                        <MdOutlineAlternateEmail/>
                                    </span>
                                    <span className='description'>
                                        tsenantsika@fullcoding.mg
                                    </span>
                                </Card>
                            </Container>
                        </Col>
                        <Col md={6} className='py-3'>
                            <Card className='my-card'>
                                <form className='form'>
                                    <div className='card-body'>
                                        <FloatingLabel controlId='floatingInput' label="Username" className='mb-3'>
                                            <Form.Control type='text' placeholder='Username *'/>
                                        </FloatingLabel>
                                        <FloatingLabel controlId='floatingInput1' label="Email" className='mb-3'>
                                            <Form.Control type='email' placeholder='email@gmail.com'/>
                                        </FloatingLabel>
                                        <FloatingLabel controlId='floatingInput2' label="Subject" className='mb-3'>
                                            <Form.Control type='text' placeholder='subject'/>
                                        </FloatingLabel>
                                        <FloatingLabel controlId="floatingTextarea" label="Message">
                                            <Form.Control
                                            as="textarea"
                                            placeholder="Leave a comment here"
                                            style={{ height: '100px' }}
                                            />
                                        </FloatingLabel>      
                                    </div>
                                    <div className='card-footer'>
                                        <Button size='lg' color='black'>Envoyer <BiSend /> </Button>
                                    </div>
                                </form>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
}

export default Contact;
