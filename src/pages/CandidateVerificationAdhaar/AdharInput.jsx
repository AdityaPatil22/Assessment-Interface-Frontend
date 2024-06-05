import React, { useState, useRef } from 'react';

const AadharInput = () => {
  const [aadhaar, setAadhaar] = useState({ part1: '', part2: '', part3: '' });
  const [error, setError] = useState('');
  const otp1Ref = useRef(null);
  const otp2Ref = useRef(null);
  const otp3Ref = useRef(null);

  const handleInputChange = (e, part) => {
    const { value } = e.target;
    if (value.length <= 4 && /^\d*$/.test(value)) {
      setAadhaar(prevState => ({ ...prevState, [part]: value }));
      setError('');  // Clear the error when input is valid
      if (value.length === 4 && part === 'part1') {
        otp2Ref.current.focus();
      } else if (value.length === 4 && part === 'part2') {
        otp3Ref.current.focus();
      } else if (value.length === 0 && part === 'part2') {
        otp1Ref.current.focus();
      } else if (value.length === 0 && part === 'part3') {
        otp2Ref.current.focus();
      }
    } else {
      setError('Please enter a valid 4-digit number.');
    }
  };

  return (
    <div className="paragraph-and-input-container">
      <p>Please enter your Aadhar number</p>
      <div className="adhaar-input-container">
        <input
          type="text"
          id="otp1"
          maxLength="4"
          className="otp-input"
          placeholder="0000"
          value={aadhaar.part1}
          onChange={(e) => handleInputChange(e, "part1")}
          ref={otp1Ref}
        />
        <input
          type="text"
          id="otp2"
          maxLength="4"
          className="otp-input"
          placeholder="0000"
          value={aadhaar.part2}
          onChange={(e) => handleInputChange(e, "part2")}
          ref={otp2Ref}
        />
        <input
          type="text"
          id="otp3"
          maxLength="4"
          className="otp-input"
          placeholder="0000"
          value={aadhaar.part3}
          onChange={(e) => handleInputChange(e, "part3")}
          ref={otp3Ref}
        />
      </div>
      {error && <p style={{color:"red"}} className="error">{error}</p>}
    </div>
  );
};

export default AadharInput;
