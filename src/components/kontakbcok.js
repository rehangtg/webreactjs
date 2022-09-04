import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import PText from './PText';

const KontakBcokStyles = styled.div`
  padding: 5rem 0;
  .KontakBcok__wrapper {
    background-color: var(--deep-dark);
    border-radius: 12px;
    padding: 5rem 0rem;
    text-align: center;
  }
  .KontakBcok__heading {
    font-size: 4rem;
    margin-bottom: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .KontakBcok__heading {
      font-size: 2.8rem;
    }
  }
`;

export default function KontakBcok() {
  return (
    <KontakBcokStyles>
      <div className="container">
        <div className="KontakBcok__wrapper">
          <PText>Have a Project? Call me</PText>
          <h3 className="KontakBcok__heading">Let me help you?</h3>
          <Button btnText="Contact Now" btnLink="/contact" />
        </div>
      </div>
    </KontakBcokStyles>
  );
}
