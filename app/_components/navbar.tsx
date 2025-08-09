'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, cubicBezier  } from 'framer-motion';

const customEase = cubicBezier(0.22, 1, 0.36, 1);


const navItems = [
  { name: 'about', href: '#about' },
  { name: 'mission', href: '#mission' },
  { name: 'service', href: '#service' },
  { name: 'process', href: '#process' },
  { name: 'clients', href: '#clients' },
  { name: 'team', href: '#team' },
  { name: 'contact', href: '#contact' },
];

// Animation for navbar appearance
const navbarVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: customEase,
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
};

// Animation for nav links
const linkVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// 3D logo animation
const logoWrapperVariants = {
  hidden: { rotateY: -90, opacity: 0 },
  visible: {
    rotateY: 0,
    opacity: 1,
    transition: { duration: 0.9, ease: customEase },
  },
  hover: {
    rotateY: 180,
    transition: { duration: 0.7, ease: customEase },
  },
};

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
  <motion.nav
    variants={navbarVariants}
    initial="hidden"
    animate="visible"
    className="fixed top-0 left-0 right-0 z-50 text-white"
  >
    <div
      className={`max-w-[1300px] lg:mx-auto mx-4 my-2 flex items-center justify-between transition-all duration-300 px-6 sm:px-10 ${
        isScrolled
          ? 'bg-white/20 md:mt-5 rounded-xl py-2 shadow-lg backdrop-blur-lg'
          : 'bg-transparent py-4'
      }`}
    >


        {/* Logo */}
        <motion.div
          style={{ perspective: 900 }}
          variants={logoWrapperVariants}
          whileHover="hover"
          className="cursor-pointer"
          aria-label="Company logo"
        >
          <motion.div
            style={{
              transformStyle: 'preserve-3d',
              width: 71,
              height: 78,
              display: 'inline-block',
              willChange: 'transform',
            }}
          >
            {/* Front face */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
              }}
            >
              <Image src="/logo.svg" alt="Logo front" width={71} height={78} className='' priority />
            </div>

            {/* Back face */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transform: 'rotateY(180deg)',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
              }}
            >
              <Image src="/logo.svg" alt="Logo back" width={71} height={78} priority />
            </div>
          </motion.div>
        </motion.div>

        {/* Desktop Nav */}
        <div className={`hidden md:flex items-center gap-8 px-6 py-2 rounded-md  ${
          isScrolled ? 'bg-white/5 backdrop-blur border border-white/20' : 'bg-white/20'
        }`}>
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              variants={linkVariants}
              className="text-[20px] hover:text-gray-300 transition"
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        <div className="hidden md:block w-4"></div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setOpen(true)} aria-label="Open menu" className='cursor-pointer'>
            <img src={'/icons/dropdown-icon.svg'} alt="Menu Icon" className="w-10 h-10" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-90 backdrop-blur-sm z-40 flex flex-col items-center justify-center gap-8">
          <button onClick={() => setOpen(false)} className="absolute cursor-pointer top-6 right-6" aria-label="Close menu">
            <img src={'/icons/dropdown-icon.svg'} alt="Menu Icon" className="w-10 h-10 mt-[11px]" />
          </button>

          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-2xl font-medium text-white hover:text-gray-300"
              onClick={() => setOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </motion.nav>
  );
};
