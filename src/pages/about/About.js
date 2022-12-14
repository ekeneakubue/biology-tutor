import React from 'react'
import './About.css'
import {Container, Row, Col, Button} from 'react-bootstrap'

export default function About() {
  return (
    <div>
        <Container className='justify-content-center'>
            <Row>
                <Col>
                    <div className='info'>
                        <h6 className='text-primary'>OUR INFO</h6>
                        <h3>ABOUT VIRTUAL BIOLOGY INSTRUCTION</h3>
                    </div>
                </Col>                
            </Row>
            
            <Row className='row justify-content-center'>
                <Col md={6} className="text-center">
                    <div className='cover'>
                        <img src='image-pic.png' alt='image-pic' className='aboutimg setup'/>
                    </div>
                </Col>

                <Col md={6} className="text-justify tec">
                    <br/>
                    <div className='text-center'>
                        <p>
                            This Virtual Biology Instruction (VBI) was developed by Uzoigwe Anthony Uchechukwu with
                            registration number PG/MED/18/88063 to study the Comparative Efficacy of the Two Modes Of 
                            Virtual Biology Instruction on the Interest and Achievement of Secondary School Students 
                            of Different Ability Levels.
                        </p>
                        <p>    
                            Instructional Designer: Uzoigwe Anthony Uchechukwu
                        </p>
                        <p>
                            Supervisor: Prof. Tessy Ofoegbu
                            All Rights Reserved 
                        </p>
                    </div>                    
                </Col>
            </Row>

        </Container>    
    </div>
  )
}
