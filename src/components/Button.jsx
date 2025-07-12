import React from 'react';

function Button({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
    >
      {label}
    </button>
  );
}

export default Button;