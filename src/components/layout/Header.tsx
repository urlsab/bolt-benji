import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import classNames from 'classnames';
import logo from '../../benjilogo.png';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const scrollToSection = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const toggleMenu = () => setIsOpen(!isOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const headerClasses = classNames(
    'fixed w-full z-50 transition-all duration-300',
    {
      'bg-white shadow-md py-3': isScrolled,
      'bg-transparent py-5': !isScrolled,
    }
  );

  // const linkClasses = (path: string) => classNames(
  //   'font-medium transition-colors duration-300',
  //   {
  //     'text-primary-800': location.pathname === path,
  //     'text-gray-700 hover:text-primary-600': location.pathname !== path,
  //     'text-white hover:text-primary-100': !isScrolled && location.pathname === '/',
  //   }
  // );

  const navLinks = [
    { name: 'אודות', target: 'about' },
    { name: 'שירותים', target: 'services' },
    { name: 'צור קשר', target: 'contact' },
  ];

  return (
    <header className={headerClasses}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img 
              src={logo} 
              className={classNames('mr-2 ml-2 rounded-full', {
                'text-primary-600': isScrolled,
                'text-white': !isScrolled,
              })}
              style={{
                height: 'clamp(48px, 8vw, 64px)',
                width: 'clamp(48px, 8vw, 64px)',
                borderRadius: '50%'
              }}
            />
            <span className={classNames('text-xl font-bold', {
              'text-primary-800': isScrolled,
              'text-white': !isScrolled,
            })}>
              אור בנג'י פסיכותרפיה
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-between min-w-[300px]">
            {navLinks.map((link) => (
              <a
                key={link.target}
                href={`#${link.target}`}
                className={classNames(
                  'font-medium transition-colors duration-300 px-4',
                  {
                    'text-white hover:text-primary-100': !isScrolled,
                    'text-sky-700 hover:text-primary-600': isScrolled,
                  }
                )}
                onClick={e => {
                  e.preventDefault();
                  scrollToSection(link.target);
                }}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button !! */}
          <button 
            className="md:hidden text-gray-800"
            onClick={toggleMenu}
            aria-label={isOpen ? 'סגור תפריט' : 'פתח תפריט'}
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={classNames("md:hidden shadow-lg", { 'bg-white': isScrolled, 'bg-transparent': !isScrolled })}>
          <div className="py-4 px-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.target}
                href={`#${link.target}`}
                className={classNames(
                  'block font-medium py-2 text-center',
                  {
                    'text-white hover:text-primary-100': !isScrolled,
                    'text-sky-700 hover:text-primary-600': isScrolled,
                  }
                )}
                onClick={e => {
                  e.preventDefault();
                  setIsOpen(false);
                  scrollToSection(link.target);
                }}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;