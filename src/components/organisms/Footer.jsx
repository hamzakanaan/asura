import React from 'react';
import { Link } from 'react-router-dom';
import SocialLinks from '../molecules/SocialLinks';
import NewsletterForm from '../molecules/NewsletterForm';

/**
 * Footer - The main footer component of the website
 * Contains company information, navigation links, social media links, and newsletter subscription
 */
function Footer() {
  // Social media links configuration
  const socialLinks = {
    facebook: process.env.REACT_APP_FACEBOOK_URL || '#',
    instagram: process.env.REACT_APP_INSTAGRAM_URL || '#',
    linkedin: process.env.REACT_APP_LINKEDIN_URL || '#',
    telegram: process.env.REACT_APP_TELEGRAM_URL || '#'
  };

  // Navigation links configuration
  const navigationLinks = {
    left: [
      { to: "/", label: "Home" },
      { to: "/browse", label: "Browse Properties" },
      { to: "/sell", label: "Sell Your Property" },
      { to: "/how-it-works", label: "How It Works" },
      { to: "/contact", label: "Contact Us" },
      { to: "/faqs", label: "FAQs" }
    ],
    middle: [
      { to: "/apartments", label: "Apartments" },
      { to: "/villas", label: "Villas & Townhouses" },
      { to: "/commercial", label: "Offices & Commercial Spaces" },
      { to: "/land", label: "Land & Plots" },
      { to: "/luxury", label: "Luxury Properties" }
    ],
    right: [
      { to: "/privacy", label: "Privacy Policy" },
      { to: "/terms", label: "Terms & Conditions" },
      { to: "/guidelines", label: "User Guidelines" },
      { to: "/support", label: "Support Center" }
    ]
  };

  // Handle newsletter subscription
  const handleNewsletterSubmit = (email) => {
    // TODO: Implement newsletter subscription logic
    console.log('Newsletter subscription:', email);
  };

  return (
    <footer className="bg-[#00513B] text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Logo and Description */}
            <div className="w-full md:w-1/3">
              <div className="flex flex-col items-start">
                <Link to="/" className="flex items-center gap-2">
                  <div className="w-[52px] h-[52px] rounded-lg flex items-center justify-center">
                    <img 
                      src="/assets/logos/Vector (1).png" 
                      alt="Logo" 
                      className="w-12 h-12"
                    />
                  </div>
                  <span className="flex items-center h-6">
                    <img src="/assets/asura company logo/Vector (6).png" alt="a" className="h-full" style={{ marginRight: '-0.2rem' }} />
                    <img src="/assets/asura company logo/Vector (7).png" alt="s" className="h-full" style={{ marginRight: '-0.2rem' }} />
                    <img src="/assets/asura company logo/Vector (8).png" alt="ur" className="h-full" style={{ marginRight: '-0.2rem' }} />
                    <img src="/assets/asura company logo/Vector (9).png" alt="a" className="h-full" />
                  </span>
                </Link>
                <p className="text-gray-400 text-sm mt-4 max-w-xs">
                Asura is your trusted platform for buying, selling, and renting
                 properties with ease. Whether you're looking for a dream home, an 
                 investment opportunity, or a commercial space, we connect buyers
                  and sellers seamlessly.
                </p>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-1 justify-between gap-8">
              <div className="space-y-4">
                {navigationLinks.left.map(({ to, label }) => (
                  <Link key={to} to={to} className="block text-gray-200 hover:text-white">
                    {label}
                  </Link>
                ))}
              </div>

              <div className="space-y-4">
                {navigationLinks.middle.map(({ to, label }) => (
                  <Link key={to} to={to} className="block text-gray-200 hover:text-white">
                    {label}
                  </Link>
                ))}
              </div>

              <div className="space-y-4">
                {navigationLinks.right.map(({ to, label }) => (
                  <Link key={to} to={to} className="block text-gray-200 hover:text-white">
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section with Social Links and Newsletter */}
        <div className="border-t border-gray-100/20">
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col md:flex-row items-center justify-end gap-12 py-8">
              <div>
                <div className="text-sm text-gray-200 mb-3">Follow us @</div>
                <SocialLinks links={socialLinks} />
              </div>
              <div>
                <div className="text-sm text-gray-200 mb-3">Subscribe to Our Newsletter</div>
                <NewsletterForm onSubmit={handleNewsletterSubmit} />
              </div>
            </div>
            <div className="text-sm text-gray-200 pb-6">
              © {new Date().getFullYear()} Asura. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 