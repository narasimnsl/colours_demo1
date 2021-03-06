import React, { Component } from 'react';
import Aux from '../../hoc/aux';
import { Grid } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import image_1 from '../../images/red.png'
import image_2 from '../../images/green.png'
import image_3 from '../../images/white.png'
import Spinner from 'react-spinkit';
import ImageLoader from 'react-loading-image'
import { VelocityComponent } from 'velocity-react';

class colours extends Component{
    
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    onRedClickHandler = () => {
       console.log("Red Spoon Clicked") 
    }
    onGreenClickHandler = () => {
         
        console.log("Green Spoon Clicked") 
     }
     onWhiteClickHandler = () => {
         
        console.log("White Spoon Clicked") 
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
            <div className="coloursPage">
                <div className="titleText">
                    <VelocityComponent runOnMount animation={{opacity:1 }} duration={1000}>
                            <h2 style={{opacity:0}}>TASTE THE COLOURS</h2>
                    </VelocityComponent>
                   
                </div>
                    
                    <Grid>
                        <Row className="show-grid">
                        <Col sm={12} md={4}>
                        <button onClick={this.onRedClickHandler} >
                            <ImageLoader
                                src={image_1}
                                loading={() => <Spinner name="ball-clip-rotate-multiple" color="purple"/>}
                            />
                        </button>
                            <h2>Red</h2>
                            <p>{dummySentences.slice(0, 6).join(' ')}</p>
                        </Col>
                        <Col sm={12} md={4}>
                        <button onClick={this.onGreenClickHandler}><img src={image_2} alt="Grenn Spoon"  /></button>
                            <h2>Green</h2>
                            <p>{dummySentences.slice(0, 4).join(' ')}</p>
                        </Col>
                        <Col sm={12} md={4}>
                            <button onClick={this.onWhiteClickHandler}><img src={image_3} alt="Grenn Spoon" /></button>
                            <h2>White</h2>
                            <p>{dummySentences.slice(0, 6).join(' ')}</p>
                        </Col>
                        
                        </Row>
                    </Grid>
                    
               
                
            </div>
        </Aux>
        )

    }
    
}




export default colours; 