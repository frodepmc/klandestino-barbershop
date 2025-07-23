"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

const InstagramIcon = () => (
  <a href="https://www.instagram.com/klandestino_bbs" target="_blank" rel="noopener noreferrer" className={styles.instagramIcon}>
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
    </svg>
  </a>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled state if user scrolls down more than 10px
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.brand}>
          <Image src="/logo.jpg" alt="Klandestino Logo" width={80} height={80} priority />
        </Link>

        {/* Mobile-only Instagram Icon */}
        <div className={styles.mobileInstagramIcon}>
          <InstagramIcon />
        </div>

        {/* Hamburger Menu Button */}
        <button className={styles.hamburger} onClick={toggleMenu}>
          <div className={isOpen ? `${styles.line} ${styles.line1_open}` : styles.line}></div>
          <div className={isOpen ? `${styles.line} ${styles.line2_open}` : styles.line}></div>
          <div className={isOpen ? `${styles.line} ${styles.line3_open}` : styles.line}></div>
        </button>

        {/* Desktop Navigation */}
        <div className={styles.desktopNavLinks}>
          <Link href="/gallery" className={styles.navLink}>Galería</Link>
          <Link href="/services" className={styles.navLink}>Servicios</Link>
          <Link href="/education" className={styles.navLink}>Educación</Link>
          <Link href="/events" className={styles.navLink}>Eventos</Link>
          <InstagramIcon />
          <Link href="/about/alejandro" className={styles.navLink}>Sobre Alejandro</Link>
          <Link href="/contact" className={styles.navLink}>Contacto</Link>
        </div>

        {/* Mobile Navigation Panel */}
        {isOpen && (
          <div className={styles.mobileNavPanel}>
            <Link href="/gallery" className={styles.mobileNavLink} onClick={toggleMenu}>Galería</Link>
            <Link href="/services" className={styles.mobileNavLink} onClick={toggleMenu}>Servicios</Link>
            <Link href="/education" className={styles.mobileNavLink} onClick={toggleMenu}>Educación</Link>
            <Link href="/events" className={styles.mobileNavLink} onClick={toggleMenu}>Eventos</Link>
            <Link href="/about/alejandro" className={styles.mobileNavLink} onClick={toggleMenu}>Sobre Alejandro</Link>
            <Link href="/contact" className={styles.mobileNavLink} onClick={toggleMenu}>Contacto</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;