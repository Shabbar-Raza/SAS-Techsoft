import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';

export const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/#about' },
    { label: 'Services', href: '/#services' },
    { label: 'Portfolio', href: '/#portfolio' },
    { label: 'Testimonials', href: '/#testimonials' },
    { label: 'Contact', href: '/#contact' },
  ];

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.includes('#') && location.pathname === '/') {
      e.preventDefault();
      const element = document.querySelector(href.substring(href.indexOf('#')));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-navy-900/90 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/">
          <Logo />
        </Link>
        <nav>
          <ul className="flex gap-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-white hover:text-gold-400 transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};