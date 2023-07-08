import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Instructor from '../../../assets/images/instructor.jpg'
function InstructorCard() {
  return (
    <div className='bg-warning w-100 m-0 p-0'>
       <div className="intructor__title d-flex flex-column gap-2">
                    
                    <h2 className='m-3'>Instructor</h2>
                    
                    <div className="instructor__position-profile ">
                    <Row>
                        <Col lg="4">
                            <div className="oa__img px-1">
                                    <img src={Instructor} alt="" />
                                </div>
                        </Col>
                        <Col lg="8">
                            <div className="oa__credentials d-flex flex-column pt-2 px-1">
                                    <h3 className='fs-4'>John Angelo David</h3>
                                    <p>Instructor</p>
                                </div>
                        </Col>
                    </Row>
                  
                       

                    </div>
                    <div className="oa__about">

                            <p className='lh-sm px-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Repellat modi illum quae ullam porro, repudiandae pariatur nulla suscipit debitis quas,
                             unde, ducimus dicta iusto tenetur nihil hic earum. Ea, dolores.</p>
                        
                        </div>
                </div>
    </div>
  )
}

export default InstructorCard
