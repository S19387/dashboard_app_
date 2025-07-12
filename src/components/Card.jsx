import React from 'react';

function Card({ title, content }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
      <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-2xl text-blue-600 font-bold">{content}</p>
    </div>
  );
}

export default Card;