import React from 'react';

export default function UnderlinedText(props) {
  return (
    <span
      style={{
        fontWeight: 'bold',
        textDecoration: 'underline',
        textDecorationColor: '#80ff44',
        textDecorationStyle: 'wavy',
        textDecorationThickness: '2px',
        textUnderlineOffset: '6px',
        transition: 'color 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = '#80ff44'; // Set your desired hover color here
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = '';
      }}
    >
      {props.children}
    </span>
  );
}
