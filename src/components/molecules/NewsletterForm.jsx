import React, { useState } from 'react';
import { FiSend } from 'react-icons/fi';

/**
 * NewsletterForm - A component that displays the newsletter subscription form
 * @param {Object} props
 * @param {Function} props.onSubmit - Callback function when form is submitted
 */
function NewsletterForm({ onSubmit }) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSuccess(false);

    if (!email.trim()) {
      setError('Email is required');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    try {
      await onSubmit(email);
      setIsSuccess(true);
      setEmail('');
    } catch (err) {
      setError('Failed to subscribe. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2" aria-label="Newsletter subscription form">
      <div className="flex-1">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className={`w-full px-4 py-2 rounded-full bg-white/10 border ${
            error ? 'border-red-500' : 'border-white/20'
          } text-white placeholder-white/60 focus:outline-none focus:border-white/40 transition-colors`}
          aria-label="Email address"
          aria-describedby={error ? "email-error" : undefined}
          aria-invalid={!!error}
        />
        {error && (
          <div id="email-error" className="text-red-500 text-sm mt-1" role="alert">
            {error}
          </div>
        )}
        {isSuccess && (
          <div className="text-green-400 text-sm mt-1" role="alert">
            Successfully subscribed to newsletter!
          </div>
        )}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className={`px-4 py-2 rounded-full bg-white text-[#00513B] hover:bg-white/90 transition-colors flex items-center gap-2 ${
          isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        aria-label="Subscribe to newsletter"
        aria-busy={isSubmitting}
      >
        <span>Subscribe</span>
        <FiSend className="w-4 h-4" aria-hidden="true" />
      </button>
    </form>
  );
}

export default NewsletterForm; 