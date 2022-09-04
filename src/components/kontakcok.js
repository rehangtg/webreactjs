import React from 'react';
import styled from 'styled-components';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import KontakForm from './kontakform';
import Kontakitemsu from './kontakitemsu';
import SectionTitle from './SectionTitle';

const KontaksStyle = styled.div`
  padding: 10rem 0;
  .Kontaks__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: space-between;
    position: relative;
  }
  .Kontaks__wrapper::after {
    position: absolute;
    content: '';
    width: 2px;
    height: 50%;
    background-color: var(--gray-1);
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  }
  .left {
    width: 100%;
    max-width: 500px;
  }
  .right {
    max-width: 500px;
    width: 100%;
    border-radius: 12px;
    /* padding-left: 3rem; */
  }
  @media only screen and (max-width: 768px) {
    .Kontaks__wrapper {
      flex-direction: column;
    }
    .Kontaks__wrapper::after {
      display: none;
    }
    .left,
    .right {
      max-width: 100%;
    }
    .right {
      padding: 4rem 2rem 2rem 2rem;
    }
  }
`;

export default function Kontaks() {
  return (
    <KontaksStyle>
      <div className="container">
        <SectionTitle heading="contact" subheading="get in touch" />
        <div className="Kontaks__wrapper">
          <div className="left">
            <Kontakitemsu icon={<MdLocalPhone />} text="wame/6288102713561" />
            <Kontakitemsu icon={<MdEmail />} text="raihankarep@gmail.com" />
            <Kontakitemsu text="Sidoarjo, Jawatimur" />
          </div>
          <div className="right">
            <KontakForm />
          </div>
        </div>
      </div>
    </KontaksStyle>
  );
}
