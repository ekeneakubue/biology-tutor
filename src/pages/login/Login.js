import React, { useRef }  from 'react'
import './Login.css'
import {Container, Row, Col, Button} from 'react-bootstrap'

export default function Contact() {    
    
  return (
    // <div className="container-fluid">
        <Container className='justify-content-center'>       
           
            <Row className='row setup33'>  
                <div className='col-2'></div> 
                <div className='col-8'>
                    <form className='form-group'>
                        <br/><br/>   
                        <div className='info'>
                            <h6 className='text-primary'>LOGIN & LEARN</h6>
                            <h3>VIRTUAL BIOLOGY INSTRUCTION</h3>
                        </div>                                             

                        <div className="row mt-4">                        
                            <div className="col-lg-12 form-item">
                                <div className="form-group">
                                    <input name="user_name" id="name" type="text" className="form-int form_setup" placeholder="Username*" required/>
                                </div>
                            </div>
                            <div className="col-lg-12 form-item">
                                <div className="form-group">
                                    <input name="user_email" id="email" type="email" className="form-int form_setup" placeholder="Password*" required/>
                                </div>
                                <div className='stud'>
                                    <h6>Students can login with:</h6>
                                    <p>Username : admin</p>
                                    <p>Password : admin</p>
                                </div>  
                            </div>
                                            
                            <div className="col-12 form-item">
                                <Button className='form-int-button form_setup' type="submit" id="send" onClick="Alert()">            
                                    <h6><i className="bi bi-send-fill text-primary"></i> Proceed to Lesson</h6>
                                </Button>                                                                               
                            </div>  
                                    
                        </div>
                    </form>
                </div> 
                <div className='col-2'></div>                
            </Row>          
        </Container>
        
    // </div>
  )
}