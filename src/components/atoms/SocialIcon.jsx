import React from 'react';

/**
 * SocialIcon - A reusable component for social media icons
 * @param {Object} props
 * @param {string} props.href - The URL to link to
 * @param {string} props.icon - The SVG path data for the icon
 * @param {string} props.alt - Alt text for accessibility
 * @param {string} [props.className] - Additional CSS classes
 */
const SocialIcon = ({ href, icon, alt, className = '' }) => {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-10 h-10 bg-white rounded-sm flex items-center justify-center ${className}`}
      aria-label={alt}
    >
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#00513B">
        <path d={icon} />
      </svg>
    </a>
  );
};

export default SocialIcon; 