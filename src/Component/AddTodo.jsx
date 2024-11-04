import React, { useState } from 'react';
import '../App.css';
import addIcon from '../add.png';

export const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [showForm, setShowForm] = useState(false); // State to toggle form visibility

    // Submit handler
    const submit = (e) => {
        e.preventDefault();
        if (!title) {
            alert("Enter the title");
            return;
        }

        // Call addTodo with title
        addTodo(title);

        // Clear inputs and hide the form after submission
        setTitle("");
        setShowForm(false);  // Hide form after submission
    };

    // Toggle form visibility
    const toggleForm = () => {
        setShowForm(!showForm); // Show or hide form on click
    };

    return (
        <div className='container' style={{ position: 'relative' }}>
            {/* Image that triggers the form */}
            <div
                onClick={toggleForm}
                className='d-flex align-items-center rounded-4 add-todo'
                style={{ cursor: 'pointer' }}
            >
                <img
                    className='mx-2 add'
                    src={addIcon}
                    alt='Add'
                />
            </div>

            {/* Conditionally render the form */}
            {showForm && (
                <div className='container mt-3'>
                    <form onSubmit={submit}>
                        <div className='d-flex add-Todo-input'>
                            <div className="d-flex mb-3">
                                <input
                                    type="text"
                                    value={title}
                                    onChange={(e) => {
                                        // Only allow alphabetic characters
                                        const newValue = e.target.value.replace(/[^a-zA-Z\s]/g, "");
                                        setTitle(newValue);
                                    }}
                                    placeholder="Enter the task"
                                    className="form-control custom-textbox"
                                    id="title"
                                    maxLength={55}
                                />
                            </div>
                            <button
                                type="submit"
                                className="Btn"
                            >
                                ADD
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};
