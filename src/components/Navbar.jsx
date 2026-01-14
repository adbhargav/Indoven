import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Contact', path: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 backdrop-blur-sm py-4'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-secondary">Indoven</span>
                        <span className="text-2xl font-bold text-accent">Tradelinks</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`font-medium transition-all duration-200 px-4 py-2 rounded-lg ${isActive(link.path)
                                    ? 'bg-sky-100 text-secondary shadow-sm'
                                    : 'text-gray-600 hover:text-secondary hover:bg-gray-50'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            className="bg-accent text-white px-5 py-2 rounded-full font-medium hover:bg-green-600 transition-colors"
                        >
                            Get a Quote
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-secondary focus:outline-none"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`block px-3 py-3 rounded-md text-base font-medium ${isActive(link.path)
                                    ? 'text-secondary bg-sky-50'
                                    : 'text-gray-600 hover:text-secondary hover:bg-gray-50'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="pt-4">
                            <Link
                                to="/contact"
                                onClick={() => setIsOpen(false)}
                                className="block w-full text-center bg-accent text-white px-5 py-3 rounded-lg font-bold hover:bg-green-600 transition-colors"
                            >
                                Get a Quote
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
