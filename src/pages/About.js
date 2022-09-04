import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutkuCOK from '../assets/images/rhngtg.jpeg';
import AboutgaeitemCOK from '../components/aboutgaeitemcok';
import KontakBcok from '../components/kontakbcok';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--blue-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
    .about__info__img {
      width: 10px;
      height: 10px;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Raihan</span>
              </p>
              <h2 className="about__heading">
                as Beginner Fullstack Developer
              </h2>
              <div className="about__info">
                <PText>
                  I'm from Sidoarjo, East Java. Place of beauty and natural.
                  Since childhood I have loved art and design. I always trying
                  to design things with my unique point of view. I also like
                  create something useful for others.
                  <br /> <br />
                  I started coding since I was in high school. Coding is also an
                  art for me. I love it and now I have the opportunity to design
                  along with the coding. I find it really interesting and I
                  enjoyed the process a lot.
                  <br />
                  <br />
                  My vision is to make the world a better place. Now almost
                  everything is becoming better than ever. It is time for us to
                  create more good stuff that helps the world to become a better
                  place.
                </PText>
              </div>
              <Button btnText="Download CV" btnLink="#" />
            </div>
            <div className="right">
              <img src={AboutkuCOK} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutgaeitemCOK title="School" items={['SMK Telkom Sidoarjo']} />
              <AboutgaeitemCOK title="Collage" items={['None']} />
              <AboutgaeitemCOK title="Varsity" items={['None']} />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutgaeitemCOK
                title="FrontEnd"
                items={['HTML', 'CSS', 'JavaScript', 'REACT', 'Flutter']}
              />
              <AboutgaeitemCOK
                title="BackEnd"
                items={['Node', 'Express', 'PHP', 'Python', 'SQL']}
              />
              <AboutgaeitemCOK
                title="Design"
                items={['Photoshop', 'After Effects', 'Premiere Pro']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutgaeitemCOK
                title="2018-2018"
                items={['Editor for Youtube']}
              />
              <AboutgaeitemCOK
                title="2019-2022"
                items={['Junior Engineer at PT. ICON+ and FIC']}
              />
              <AboutgaeitemCOK
                title="2022"
                items={['Freelance FullStack Developer']}
              />
            </div>
          </div>
        </div>
        <KontakBcok />
      </AboutPageStyles>
    </>
  );
}
