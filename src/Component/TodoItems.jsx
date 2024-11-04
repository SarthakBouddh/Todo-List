import React, { useState, useEffect } from 'react';
import trashIcon from '../trash.png';
import '../App.css';

export const TodoItems = ({ todo, onDelete }) => {
  const [isChecked, setIsChecked] = useState(false); // State to track checkbox

  // Unique key for each checkbox based on todo ID
  const checkboxKey = `checkboxState-${todo.id}`;

  useEffect(() => {
    // Load the saved state from localStorage for this specific todo item
    const savedState = localStorage.getItem(checkboxKey);
    console.log(`Loading state for ${checkboxKey}:`, savedState); // Debugging line
    if (savedState !== null) {
      setIsChecked(savedState === "true");
    }
  }, [checkboxKey]);

  // Save the checkbox state to localStorage whenever it changes
  useEffect(() => {
    console.log(`Saving state for ${checkboxKey}:`, isChecked); // Debugging line
    localStorage.setItem(checkboxKey, isChecked);
  }, [isChecked, checkboxKey]);

  // Toggle the checkbox state
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className='d-flex justify-content-between align-items-center px-3 rounded-5 Todo-List'>
      <div className='d-flex align-items-center'>
        {/* Checkbox with handler */}
        <input 
          type="checkbox" 
          className='me-2' 
          id='checkbox'
          checked={isChecked} 
          onChange={handleCheckboxChange} 
        />
        <h3 
          className='head m-2' 
          style={{
            textDecoration: isChecked ? 'line-through' : 'none', // Strike-through when checked
            opacity: isChecked ? 0.5 : 1 // Fades the color when checked
          }}
        >
          {todo.title}
        </h3>
      </div>
      <img 
        className='trash' 
        src={trashIcon} 
        alt="Delete" 
        onClick={() => onDelete(todo)} 
        style={{ cursor: 'pointer', width: '25px', height: '25px', position: 'relative' }} 
      />
    </div>
  );
};
