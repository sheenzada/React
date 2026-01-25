import React, { useState } from 'react';


const ContactForm = () => {
  // 1. Setup state for all form fields
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    message: ''
  });

  // 2. Handle input changes dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value // Updates only the field being typed in
    });
  };

  // 3. Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Stop page refresh
    console.log('Form Data Submitted:', formData);
    alert(`Thank you, ${formData.username}! Your message was sent.`);
  };

  return (
<>

    <div style={{ padding: '20px', maxWidth: '400px', fontFamily: 'Arial' }}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Name:</label><br />
          <input 
            type="text" 
            name="username" 
            value={formData.username} 
            onChange={handleChange} 
            required 
            style={{ width: '100%' }}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Email:</label><br />
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
            style={{ width: '100%' }}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Message:</label><br />
          <textarea 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            style={{ width: '100%', height: '80px' }}
          />
        </div>

        <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>
          Submit
        </button>
      </form>
      
    </div>
    </>
  );
};

export default ContactForm;