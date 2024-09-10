import React from 'react';

function Card({ children }) {
  return (
    <article className="flex flex-col rounded-md border">
        {children}
    </article>
  );
}

export default Card;