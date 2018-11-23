import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';



class modal extends Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
  
      this.state = {
        show: false
      };
    }
  
    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }
  
    render() {
      
      return (
        <div>
          <button   onClick={this.handleShow}>
            <img src={this.props.imgaeSrc} alt={this.props.imgaeAlt} />
          </button>
  
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <img src={this.props.imgaeSrc} alt={this.props.imgaeAlt} />
            </Modal.Header>
          </Modal>
        </div>
      );
    }
  }
  
 export default modal;