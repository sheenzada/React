import React, { useState } from 'react';

const AuthSystem = () => {
  // State to track which "window" is active: 'login' or 'register'
  const [activeTab, setActiveTab] = useState('login');

  return (
    <div class="bg-[url(/img/mountains.jpg)] ...">
    <div style={styles.container}>
      <div style={styles.card}>
        {/* Toggle Headers */}
        <div style={styles.tabGroup}>
          <button 
            style={{...styles.tab, borderBottom: activeTab === 'login' ? '3px solid #007bff' : 'none'}}
            onClick={() => setActiveTab('login')}
          >
            Login
          </button>
          <button 
            style={{...styles.tab, borderBottom: activeTab === 'register' ? '3px solid #007bff' : 'none'}}
            onClick={() => setActiveTab('register')}
          >
            Register
          </button>
        </div>

        {/* Dynamic Window Content */}
        <div style={styles.content}>
          {activeTab === 'login' ? <LoginForm /> : <RegisterForm />}
        </div>
      </div>
    </div>
    </div>
  );
};

// --- Sub-Component: Login Window ---
const LoginForm = () => (
  <form onSubmit={(e) => e.preventDefault()} style={styles.form}>
    <h3>Welcome Back</h3>
    <input type="email" placeholder="Email Address" style={styles.input} required />
    <input type="password" placeholder="Password" style={styles.input} required />
    <button type="submit" style={styles.submitBtn}>Login to Account</button>
    <p style={styles.footerText}>Forgot password?</p>
  </form>
);

// --- Sub-Component: Register Window ---
const RegisterForm = () => (
  <form onSubmit={(e) => e.preventDefault()} style={styles.form}>
    <h3>Create Account</h3>
    <input type="text" placeholder="Full Name" style={styles.input} required />
    <input type="email" placeholder="Email Address" style={styles.input} required />
    <input type="password" placeholder="Create Password" style={styles.input} required />
    <input type="password" placeholder="Confirm Password" style={styles.input} required />
    <button type="submit" style={{...styles.submitBtn, backgroundColor: '#28a745'}}>Join Now</button>
  </form>
);

// --- Styles ---
const styles = {
  container: {
    display: 'flex', justifyContent: 'center', alignItems: 'center',
    height: '100vh', backgroundColor: '#f4f7f6', fontFamily: 'Arial, sans-serif'
  },
  card: {
    width: '380px', backgroundColor: '#fff', borderRadius: '12px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.1)', overflow: 'hidden'
  },
  tabGroup: {
    display: 'flex', backgroundColor: '#f8f9fa', borderBottom: '1px solid #eee'
  },
  tab: {
    flex: 1, padding: '15px', border: 'none', background: 'none',
    cursor: 'pointer', fontWeight: 'bold', fontSize: '16px', transition: '0.3s'
  },
  content: { padding: '30px' },
  form: { display: 'flex', flexDirection: 'column' },
  input: {
    padding: '12px', marginBottom: '15px', borderRadius: '6px',
    border: '1px solid #ddd', fontSize: '14px'
  },
  submitBtn: {
    padding: '12px', border: 'none', borderRadius: '6px',
    backgroundColor: '#007bff', color: '#fff', fontWeight: 'bold', cursor: 'pointer'
  },
  footerText: { textAlign: 'center', color: '#666', fontSize: '12px', marginTop: '10px' }
};

export default AuthSystem;