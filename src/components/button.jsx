import React from 'react';

const ViewProductButton = ({ onClick }) => {
  return (
    <button
      className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      onClick={onClick}
    >
      View Product
    </button>
  );
};

export default ViewProductButton;
// write button card here
