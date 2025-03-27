import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2025 My Website. All rights reserved.</p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#282c34',
    padding: '10px',
    textAlign: 'center',
    color: 'white',
    position: 'absolute',
    width: '100%',
    bottom: '0'
  }
};

export default Footer;



