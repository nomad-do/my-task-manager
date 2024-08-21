import React, { useState } from 'react';
import { sanitizeUserInput } from '../utils/sanitize';

function SanitizeInput() {
  const [input, setInput] = useState('');
  const [sanitizedOutput, setSanitizedOutput] = useState('');

  const handleInputChange = (e) => {
    const userInput = e.target.value;
    setInput(userInput);

    const sanitized = sanitizeUserInput(userInput);
    setSanitizedOutput(sanitized);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h2>User Input Sanitization</h2>
      <textarea
        value={input}
        onChange={handleInputChange} 
        placeholder="Enter some text"
        style={{ width: '100%', height: '150px', marginBottom: '10px' }}
      />
      <div>
        <h3>Sanitized Output</h3>
        <div
          style={{
            border: '1px solid #ccc',
            padding: '15px',
            backgroundColor: '#f9f9f9',
            whiteSpace: 'pre-wrap'
          }}
          dangerouslySetInnerHTML={{ __html: sanitizedOutput }}
        />
      </div>
    </div>
  );
}

export default SanitizeInput;

