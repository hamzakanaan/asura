import React from 'react';

function Input({ type = "text", placeholder, value, readOnly, className = "" }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      readOnly={readOnly}
      className={`w-full bg-transparent border-none focus:outline-none text-white placeholder-white/70 ${className}`}
    />
  );
}

export default Input; 