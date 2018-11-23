import React from "react";

import { Parallax } from "react-parallax";
import image_1 from '../../images/office-581131_1920.jpg'
import image_2 from '../../images/abstract-abstract-photo-architecture-1029622.jpg'
import down_arrow from '../../images/scroll-arrow-to-down.svg'
import {Link} from 'react-router-dom';

const image1 = image_1
const image2 = image_2

 
const menupage = () => (
  <div className="menuPage">
    <h2>Demo</h2>
    <Parallax bgImage={image1} strength={500}>
      <div  style={{ height: 500 }}>
        <div className="insideScrollHolder">
          <div className="insideScrollText"><h2>Colour and Shapes Pages</h2></div>
        </div>
        <img src={down_arrow} alt="Scroll indicator" className="downArrow" />
      </div>
    </Parallax>
    <Parallax
      bgImage= {image2}
      strength={200}
      renderLayer={percentage => (
        <div>
          <div
            style={{
              position: "absolute",
              background: `rgba(250, 125, 0, ${percentage * 1})`,
              left: "50%",
              top: "50%",
              borderRadius: "50%",
              transform: "translate(-50%,-50%)",
              width: percentage * 700,
              height: percentage * 700
            }}
          />
        </div>
      )}
    >
      <div  style={{ height: 500 }}>
        <div className="insideScrollHolder">
          <Link to='/shapes'><div className="insideScrollText"><u>Shapes</u></div></Link>
          <Link to='/colours'><div className="insideScrollText"><u>Colours</u></div></Link>
          </div>
      </div>
     
    </Parallax>
    <div style={{ height: 400 }} />
   
  </div>
);
export default menupage;
