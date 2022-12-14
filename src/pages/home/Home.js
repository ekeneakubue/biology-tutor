import React from 'react'
import './Home.css'
import {Container, Row, Col, Button} from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons';
import Services from '../services/Services'
import About from '../about/About'
import Login from '../login/Login'


export default function Home() {
  return (
    <Container>
      <Row>      
        <Col md={6} className="text-center intro">                

          <h1 className="main-name">
            <strong> VIRTUAL BIOLOGY INTRUCTION</strong><br/><br/><hr/>
          </h1>

          <h5 className="heading-description blockquote">
            QUALITY BIOLOGY CONTENT JUST FOR YOU. 
          </h5>
          <p className="heading-description blockquote">  
            We make learning Biology seamless for everyone            
          </p><hr/><br/> 

          <Button><i class="bi bi-search"></i> Browse Topics</Button>             
        </Col> 

        <Col md={6} className="text-center">
          <br/>
          <div className='img-setup'>
            <img src='images/Dig4.png' className='myImage' alt="avatar" /> 
          </div>                       
        </Col>       
          
      </Row> 
      <br/><br/>
      <div className='container-fluid text-center'>
        <div className='row'>
          <div className="col-md-6">
            <h3 className='text-primary'>OUR TEAM</h3>
            <hr/>
            <div className='row'>
              <div className='col-md-6'>
                <div className="team__card d-block">                            
                  <img src="images/tessy.JPG" className="card-img-top imgg" alt="Tessy"/>
                  <div class="card-body text-light">
                      <p class="cad-tex">Prof Tessy Ofoegbu</p>
                      <p class="small text-secondary">Supervisor</p>                                        
                  </div>
                </div>
              </div>

              <div className='col-md-6'>
                <div className="team__card d-block">                            
                  <img src="images/tony.JPG" className="card-img-top imgg" alt="tony"/>
                  <div class="card-body text-light">
                      <p className="cad-tex">Anthony Uzoigwe</p>
                      <p className="small text-secondary">Instructor</p>                                        
                  </div>
                </div>
              </div>              
            </div>       
            
          </div>
          <br/>
            
          <div className="col-md-6">
            <h3 className='text-primary'>OUR Objectives</h3>
            <hr/>
            <div className="team__card d-block">                            
              
              <div class="card-body text-dark">
                <p className="card-title"><br/>
                  Learning is a continous process, it is then the aim of man to make 
                  learning as easy as possible through the use of technology, this is 
                  what motivated the design of Virtual biology Instruction   
                </p>
                                                        
              </div>
            </div>
          </div>                            
        </div>          
      </div>  
      <Services/>                 
      <About/>
      <Login/>
    </Container>
  )
}
