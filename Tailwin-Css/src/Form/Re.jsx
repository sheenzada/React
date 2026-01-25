import React, { useState } from 'react';

const Re = () => {
  // Single state object for all inputs
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'User'
  });

  // State for error messages
  const [errors, setErrors] = useState({});

  // Universal handler for text, select, and password inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    let newErrors = {};
    if (formData.username.length < 3) newErrors.username = "Username too short";
    if (!formData.email.includes("@")) newErrors.email = "Invalid email format";
    if (formData.password.length < 6) newErrors.password = "Password must be 6+ chars";
    if (formData.password !== formData.confirmPassword) newErrors.confirm = "Passwords do not match";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Registration Data:", formData);
      alert("Registration Successful!");
    }
  };

  return (
    <div style={styles.wrapper}>
      <form onSubmit={handleSubmit} style={styles.formCard}>
        <h2 style={styles.title}>Create Account</h2>

        <div style={styles.inputContainer}>
          <label style={styles.label}>Username</label>
          <input 
            type="text" 
            name="username" 
            value={formData.username} 
            onChange={handleChange} 
            style={styles.input} 
          />
          {errors.username && <span style={styles.error}>{errors.username}</span>}
        </div>

        <div style={styles.inputContainer}>
          <label style={styles.label}>Email</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            style={styles.input} 
          />
          {errors.email && <span style={styles.error}>{errors.email}</span>}
        </div>

        <div style={styles.inputContainer}>
          <label style={styles.label}>Password</label>
          <input 
            type="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
            style={styles.input} 
          />
          {errors.password && <span style={styles.error}>{errors.password}</span>}
        </div>

        <div style={styles.inputContainer}>
          <label style={styles.label}>Confirm Password</label>
          <input 
            type="password" 
            name="confirmPassword" 
            value={formData.confirmPassword} 
            onChange={handleChange} 
            style={styles.input} 
          />
          {errors.confirm && <span style={styles.error}>{errors.confirm}</span>}
        </div>

        <button type="submit" style={styles.submitBtn}>Sign Up</button>
      </form>
    </div>
  );
};

// --- Styles ---
const styles = {
  wrapper: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f5f7fa' },
  formCard: { width: '380px', padding: '40px', backgroundColor: '#fff', borderRadius: '15px', boxShadow: '0 8px 30px rgba(0,0,0,0.1)' },
  title: { textAlign: 'center', marginBottom: '30px', color: '#333', fontFamily: 'sans-serif' },
  inputContainer: { marginBottom: '20px', display: 'flex', flexDirection: 'column' },
  label: { marginBottom: '8px', fontSize: '14px', fontWeight: 'bold', color: '#555' },
  input: { padding: '12px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '16px', outlineColor: '#4A90E2' },
  submitBtn: { width: '100%', padding: '14px', backgroundColor: '#4A90E2', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '16px', cursor: 'pointer', fontWeight: 'bold', transition: '0.3s' },
  error: { color: '#e74c3c', fontSize: '12px', marginTop: '5px' }
};

export default Re;