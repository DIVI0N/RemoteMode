import React from 'react';

function Comment(props) {
  const { commentName, сomment } = props.data;

  return (
    <div className="article__comments">
      <h3 className="article__comments-name">{commentName}</h3>
      <p className="article__comments-comment">{сomment}</p>
    </div>
  );
}

export default Comment;