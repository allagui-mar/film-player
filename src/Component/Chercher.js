
import React from 'react';
import '../App.css'
import { getByPlaceholderText } from '@testing-library/react';

const Chercher = ({ onFilterChange }) => {
  return (
    <div>
      <input type="text" className="chercher-input" onChange={(e) => onFilterChange(e.target.value)} placeholder="Filter by title or rating" />
    </div>
  );
};
export default Chercher;
