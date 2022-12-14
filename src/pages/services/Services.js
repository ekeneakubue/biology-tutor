import React from 'react'
import './Services.css'
import {Container, Row, Col, Button} from 'react-bootstrap'

export default function Services() {
  return (
    <div>
        <Container className='justify-content-center'>
            <Row>
                <Col>
                    <div className='info'>
                        <h6 className='text-primary'>SERVICES</h6>
                        <h3>WHAT WE DO</h3>
                    </div>
                </Col>                
            </Row>
            
            <Row className='row justify-content-center'>
                <Col md={6} className="text-center">
                    <div className='cover'>
                        <img src='images/services.avif' alt='services' className='aboutimg setup'/>
                    </div>
                </Col>

                <Col md={6} className="text-justify-center about-info">                    
                    <h3>
                        Learning is a continous process, it is then the aim of man to make 
                        learning as easy as possible through the use of technology, this is 
                        what motivated the design of Virtual Biology Lesson.
                    </h3><br/>
                    <div className='text-center'>
                        <a>
                            <Button className='setup'>                            
                            <i class="bi bi-arrow-down-right-circle-fill"></i> View Courses
                            </Button> 
                        </a> 
                    </div>                      
                </Col>
            </Row><br/><br/>
        </Container>    
    </div>
  )
}
