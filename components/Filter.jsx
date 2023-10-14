import React from 'react';

const Filter = ({ options = ['Option 1', 'Option 2'], onChange }) => {
    return (
        <select onChange={onChange} style={{ padding: '10px', fontSize: '16px' }}>
            {options.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
};

export default Filter;
