// src/components/Card/Card.jsx
import React from 'react';

function Card({ title, content }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-2xl">{content}</p>
    </div>
  );
}

export default Card;
