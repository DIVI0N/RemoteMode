import React from 'react';
import { Container, Image } from 'react-bootstrap';
import './Article.scss';
import Comment from './Comment';

function Article(props) {
  const { img, description, articleDescr, commentName, сomment } = props.data;

  return (
    <section className="article-bg">
      <Container fluid>
        <article className="article">
          <h1 className="article__head">{description}</h1>
          <Image src={img} alt="sda" className="article__img" />
          <p className="article__descr">{articleDescr}</p>
          <Comment data={{ commentName, сomment }} />
        </article>
      </Container>
    </section>
  );
}

export default Article;