import React from 'react';

/**
 * NewsletterInput - A reusable component for newsletter subscription input
 * @param {Object} props
 * @param {string} props.placeholder - Placeholder text for the input
 * @param {Function} props.onSubmit - Callback function when form is submitted
 * @param {string} [props.className] - Additional CSS classes
 */
const NewsletterInput = ({ placeholder, onSubmit, className = '' }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e.target.email.value);
  };

  return (
    <form onSubmit={handleSubmit} className={`flex ${className}`}>
      <input
        type="email"
        name="email"
        placeholder={placeholder}
        className="w-[400px] px-4 py-2 bg-white rounded-l-lg focus:outline-none text-gray-900 placeholder-gray-500"
        required
      />
      <button 
        type="submit"
        className="bg-white p-2 rounded-r-lg hover:bg-white/90 transition-colors"
        aria-label="Subscribe to newsletter"
      >
        <img 
          src="/assets/icons/email_2099199 1.png" 
          alt="Subscribe" 
          className="h-6 w-6" 
        />
      </button>
    </form>
  );
};

export default NewsletterInput; 