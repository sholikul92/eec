'use client';
import Image from 'next/image';
import ContactDropdown from './ContactDropdown';
import { FiMenu } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const handleMenuOpen = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      setIsMenuOpen(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent text-white'
      } fixed left-0 right-0 z-50`}
    >
      <nav className='container mx-auto flex flex-col md:flex-row md:justify-between items-center px-2'>
        <div className='flex items-center justify-between w-full '>
          <Image
            src='/logo-eec.png'
            alt='logo'
            width={60}
            height={60}
            className='scale-80'
            priority
          />
          <div className='flex gap-2'>
            <ContactDropdown className='md:hidden' />
            <FiMenu className='text-4xl md:hidden' onClick={handleMenuOpen} />
          </div>
        </div>
        <div className='w-full md:flex md:gap-8 md:items-center'>
          <ul
            className={`${
              !isMenuOpen && 'hidden'
            } flex gap-2 md:flex flex-col items-start w-full md:flex-row md:justify-between md:text-lg p-4 md:p-0`}
          >
            <li>
              <Link href='#'>Beranda</Link>
            </li>
            <li>
              <Link href='#produk'>Produk</Link>
            </li>
            <li>
              <Link href='#kontak'>Kontak</Link>
            </li>
          </ul>
          <ContactDropdown className='hidden md:flex w-48' />
        </div>
      </nav>
    </header>
  );
}
