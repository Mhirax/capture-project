import React from "react";
import home1 from '../img/home1.png';
//styled
import styled from 'styled-components';
import { About, Description, Image } from "../pages/style";

const AboutSection = () => {
    return (
      <About>
        <Description>
          <div className="title">
            <Hide>
              <h2>we work to make</h2>
            </Hide>
            <Hide>
              <h2>
                your <span>dream</span> come
              </h2>
            </Hide>
            <Hide>
              <h2>true.</h2>
            </Hide>
          </div>
          <p>
            Contact us for any photography or videography ideas that you have
          </p>
          <button>Contact us</button>
        </Description>
        <Image>
          <img src={home1} alt="guy with a camera" />
        </Image>
      </About>
    );
}

// styled components


export default AboutSection;