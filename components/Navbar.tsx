'use client';

import { navLinks } from '@/constants';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className='container relative mx-auto '>
            {/* Desktop Navigation */}
            <nav className='hidden w-full px-20 py-6 md:flex md:items-center md:justify-around'>
                {navLinks.slice(0, 3).map((link) => (
                    <Link
                        key={link.name}
                        className='font-semibold text-primary uppercase tracking-wide transition-all ease-in-out hover:underline hover:underline-offset-2'
                        href={link.href}>
                        {link.name}
                    </Link>
                ))}

                <Link href='/'>
                    <img src='/images/logo.png' alt='logo' className='h-12 w-auto md:ml-10 md:h-32' />
                </Link>

                {navLinks.slice(3, 7).map((link) => (
                    <Link
                        key={link.name}
                        className='font-semibold text-primary uppercase tracking-wide transition-all ease-in-out hover:underline hover:underline-offset-2'
                        href={link.href}>
                        {link.name}
                    </Link>
                ))}
            </nav>

            {/* Mobile Navigation */}
            <nav className='flex w-full items-center justify-between p-4 md:hidden'>
                <Link href='/'>
                    <img src='/images/logo.png' alt='logo' className='h-20 w-auto' />
                </Link>

                <button type='button' onClick={() => setIsOpen(!isOpen)} className='z-50 flex flex-col gap-1.5 p-2'>
                    <span className={`block h-0.5 w-6 bg-primary transition-all duration-300 ${isOpen ? 'translate-y-2 rotate-45' : ''}`} />
                    <span className={`block h-0.5 w-6 bg-primary transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                    <span className={`block h-0.5 w-6 bg-primary transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </button>

                {/* Mobile Menu Overlay */}
                <div
                    className={`fixed inset-0 transform bg-primary/50 backdrop-blur-md transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className='flex h-full flex-col items-center justify-center gap-8'>
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className='font-semibold text-2xl text-white uppercase tracking-wide'>
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>
        </header>
    );
}
