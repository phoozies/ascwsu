'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui';

const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Alumni', href: '/alumni' },
  { name: 'Events', href: '/events' },
  { name: 'Club Score', href: '/club-score' },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-full px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12 transition-transform group-hover:scale-105">
              <Image
                src="/asc_logo_white_border.png"
                alt="ASC Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900">Asian Student Conference</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-[var(--old-gold)] font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLScsNFOcpU40vrp1cH3H8XyWGZBaWAafjIuLT_GDGdSM-FI6Zg/viewform" target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="shadow-2xl">Join Us</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-[var(--old-gold)] font-medium transition-colors px-2 py-2"
                >
                  {item.name}
                </Link>
              ))}
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLScsNFOcpU40vrp1cH3H8XyWGZBaWAafjIuLT_GDGdSM-FI6Zg/viewform" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="shadow-2xl">Join Us</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
