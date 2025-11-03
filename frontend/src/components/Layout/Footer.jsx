import React from "react"

export function Footer() {
  const footerStyle = {
    backgroundColor: '#A0522D',
    color: 'white',
    textAlign: 'center',
    padding: '15px',
    fontFamily: "'Playfair Display', serif",
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    marginTop: 'auto',
  };

  return (
    <footer style={footerStyle}>
      <p>Hermanos Jota - © 2025</p>
    </footer>
  );
}