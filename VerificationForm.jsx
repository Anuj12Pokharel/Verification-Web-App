
import React, { useState } from 'react';
import axios from 'axios';
import './VerificationForm.css';  

const VerificationForm = () => {
  const [inputs, setInputs] = useState(Array(6).fill(''));
  const [error, setError] = useState(Array(6).fill(false)); 
  const [formError, setFormError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e, index) => {
    const { value } = e.target;
    if (!/^\d?$/.test(value)) return; 

    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);

    const newErrors = [...error];
    newErrors[index] = false; 
    setError(newErrors);

    if (value && index < 5) {
      document.getElementById(`input-${index + 1}`).focus();
    }
  };

  const handlePaste = (e) => {
    const paste = e.clipboardData.getData('text').slice(0, 6);
    const newInputs = paste.split('').concat(Array(6 - paste.length).fill(''));
    setInputs(newInputs);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const code = inputs.join('');

    const newErrors = inputs.map(input => input === '' || isNaN(input));
    setError(newErrors);

    if (newErrors.includes(true)) {
      setFormError('Please enter a valid 6-digit code.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/verify', { code });
      if (response.status === 200) {
        setSuccess(true);
        window.location.href = '/success';
      }
    } catch (err) {
      setFormError('Verification Error');
    }
  };

  return (
    <div className="form-container">
      <h1>Verification Code</h1>
      {formError && <div className="error-message">{formError}</div>}
      {success && <div className="success-message">Redirecting...</div>}
      <form onSubmit={handleSubmit}>
        <div className="inputs-container">
          {inputs.map((input, index) => (
            <input
              key={index}
              id={`input-${index}`}
              type="text"
              value={input}
              onChange={(e) => handleChange(e, index)}
              onPaste={handlePaste}
              maxLength="1"
              className={`input-field ${error[index] ? 'error' : ''}`}
            />
          ))}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default VerificationForm;




