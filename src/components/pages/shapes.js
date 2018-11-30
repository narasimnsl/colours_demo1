import React, { Component } from 'react';
import Aux from '../../hoc/aux';
import Modal from '../bootstrapModal/modal'
import image_1 from '../../images/plate.png'
import image_2 from '../../images/mobile.png'
import image_3 from '../../images/carrots.png'
import { Grid } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

import { VelocityComponent } from 'velocity-react';



class shapes extends Component{
    
    
    
    componentDidMount() {
        window.scrollTo(0, 0);
      }

     
    render(){
        
        const dummySentences = [
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
            'Donec hendrerit tempor tellus.',
            'Donec pretium posuere tellus.',
            'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.',
            'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
            'Nulla posuere.',
            'Donec vitae dolor.',
            'Nullam tristique diam non turpis.',
            'Cras placerat accumsan nulla.',
            'Nullam rutrum.',
            'Nam vestibulum accumsan nisl.'
            ];


        return(
        <Aux>
            <div className="shapesPage">
            <div className="textHolder">
                <div className="titleText">
                
                <VelocityComponent runOnMount animation={"slideDown" } duration={500}>
                 <h1 style={{marginRight: 'auto', marginLeft: 'auto', textAlign: 'center', position: 'relative'}}>Modal test</h1>
                </VelocityComponent>
                   
                </div>
                <p>{dummySentences.slice(0, 6).join(' ')}</p>
                <div className="subText">
                    <h4>TASTE: A FIVE-SENSE EXPERIENCE</h4>
                </div>
                <p><strong>{dummySentences.slice(0, 4).join(' ')}</strong></p>
            </div>
            <div className="imageHolder">
            <Grid>
                <Row className="show-grid">
                    <Col sm={12} md={6}>
                        <Modal imgaeSrc={image_1} imgaeAlt="Plate"/>
                    </Col>
                    <div className="row-padding" style={{ height: 7 }}/>
                    <Col sm={12} md={6}>
                        <Row>
                            <Col sm={12} md={12}>
                            <Modal imgaeSrc={image_2} imgaeAlt="Mobile"/>
                            </Col>
                        </Row>
                        <div  style={{ height: 7 }}/>
                        <Row>
                            <Col sm={12} md={12}>
                                <Modal imgaeSrc={image_3} imgaeAlt="Carrots"/>
                            </Col>
                        </Row>
                    </Col>

                
                </Row>
                    </Grid>
                
            </div>
               
                
               
              
            </div>
        </Aux>
        )

    }
    
}




export default shapes; 