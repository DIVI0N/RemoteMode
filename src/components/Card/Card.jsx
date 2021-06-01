import React from 'react';
import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Card.scss';

function CardItem(props) {
  const { id, img, description, link, linkTxt } = props.data;
  const hadLink = () => {
    if (link) {
      return <Card.Text href={link} className="mycard__link">{linkTxt}</Card.Text>;
    }
  };


  return (
    <Card >
      <Card.Body className="mycard">
        <NavLink to={`/article/${id}`}>
          <Card.Img src={img} variant="top" />
          <Card.Text className="mycard__description">{description}</Card.Text>
          {hadLink()}
        </NavLink>
      </Card.Body>
    </Card>
  );
}

export default CardItem;