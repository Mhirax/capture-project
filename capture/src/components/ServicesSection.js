import React from "react";
//import icons 
import clock from '../img/clock.svg';
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png"
//styles
import { About,Description, Image } from "../pages/style";
import styled from "styled-components";

const ServicesSection = () => {
  return (
    <Services>
      <Description>
        <h2>
          High <span>quality</span> services
        </h2>
        <cards>
          <card>
            <div className="icon">
              <img alt="icon" src={clock} />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </card>
          <card>
            <div className="icon">
              <img alt="icon" src={teamwork} />
              <h3>TeamWork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </card>
          <card>
            <div className="icon">
              <img alt="icon" src={diaphragm} />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </card>
          <card>
            <div className="icon">
              <img alt="icon" src={money} />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </card>
        </cards>
      </Description>
      <Image>
        <img src={home2} alt="camera" />
      </Image>
    </Services>
  );
};

const Services = styled(About)`
h2 {
 padding-bottom: 5rem;
}

p {
width: 70%;
padding: 2rem 0rem 4rem 0rem;
}
  
`;

const cards = styled.div`
display: flex;
flex-wrap: wrap;
`;

const card = styled.div`
 flex-basis: 20rem;
 .icon {
  display: flex;
  align-items: center;
 }

`;

export default ServicesSection;