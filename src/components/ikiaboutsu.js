import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import PText from './PText';
import SectionTitle from './SectionTitle';
import AboutkuCOK from '../assets/images/rhngtg.jpeg';

const ikiaboutsuStyles = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .ikiaboutsu__left,
  .ikiaboutsu__right {
    flex: 1;
  }
  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .ikiaboutsu__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 950px) {
    .ikiaboutsu__left {
      flex: 4;
    }
    .ikiaboutsu__right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .ikiaboutsu__left,
    .ikiaboutsu__right {
      width: 100%;
    }
    .ikiaboutsu__right {
      margin-top: 3rem;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .ikiaboutsu__buttons {
      flex-direction: column;
      gap: 0rem;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

export default function ikiaboutsu() {
  return (
    <ikiaboutsuStyles>
      <div className="container">
        <div className="ikiaboutsu__left">
          <SectionTitle
            subheading="Let Me Introduce My self"
            heading="About Me"
          />
          <PText>
            I am a fresh graduate highschool, i just vibin for coding not
            programmer 💖
          </PText>
          <div className="ikiaboutsu__buttons">
            <Button btnText="Works" btnLink="/projects" />
            <Button btnText="Read More" btnLink="/about" outline />
          </div>
        </div>
        <div className="ikiaboutsu__right">
          <img className="aboutImg" src={AboutkuCOK} alt="Img" />
        </div>
      </div>
    </ikiaboutsuStyles>
  );
}
