import React from 'react';
import { Container } from 'react-bootstrap';
import { Card } from '..';
import data from '../../data/data.json';
import './MainPage.scss';

function MainPage() {
  const createCard = () => {
    return data.map(el => <Card data={el} key={el.description} />);
  };

  return (
    <div className="main-bg">
      <Container fluid>
        <main className="main">
          {createCard()}
        </main>
      </Container>
    </div>

  );
}

export default MainPage;