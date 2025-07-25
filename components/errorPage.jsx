import React from 'react';

export default function ErrorPage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Oops!</h1>
      <p style={styles.message}>
        This page either does not exist or has some issues.
      </p>
    </div>
  );
};

const styles = {
  container: {
    height: '100vh',
    backgroundColor: '#121212',
    color: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '0 20px',
  },
  title: {
    fontSize: '4rem',
    marginBottom: '1rem',
    color: '#ff4c4c', // subtle red accent
  },
  message: {
    fontSize: '1.25rem',
    maxWidth: '500px',
    lineHeight: 1.6,
    opacity: 0.8,
  },
};
