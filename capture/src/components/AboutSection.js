import React from "react";
import home1 from '../img/home1.png';
//styled
import styled from 'styled-components';

const AboutSection = () => {
    return (
      <div className="about">
        <div className="description">
          <div className="title">
            <div className="hide">
              <h2>we work to make</h2>
            </div>
            <div className="hide">
              <h2>
                your <span>dream</span> come
              </h2>
            </div>
            <div className="hide">
              <h2>true.</h2>
            </div>
                </div>
                <p>Contact us for any photography or videography ideas that you have</p>
                <button>Contact us</button>
            </div>
            <div className="image">
         <img src={home1} alt="guy with a camera" />
            </div>
      </div> 
    );
}

// styled components
const About = styled.div`
   min-height: 90vh;
   display: flex;
   align-items: center;
`

export default AboutSection;