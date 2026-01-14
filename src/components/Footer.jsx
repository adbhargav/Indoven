import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Company Info */}
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <span className="text-2xl font-bold text-secondary">Indoven</span>
                            <span className="text-2xl font-bold text-accent">Tradelinks</span>
                        </div>
                        <p className="text-gray-400 mb-6">
                            Professional cleaning and pest control services for your home and office.
                            Reliable, safe, and affordable solutions.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-gray-400 hover:text-secondary transition-colors">Home</Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-400 hover:text-secondary transition-colors">About Us</Link>
                            </li>
                            <li>
                                <Link to="/services" className="text-gray-400 hover:text-secondary transition-colors">Services</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-400 hover:text-secondary transition-colors">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">Our Services</h3>
                        <ul className="space-y-2">
                            <li className="text-gray-400">Housekeeping Chemicals</li>
                            <li className="text-gray-400">Pest Control</li>
                            <li className="text-gray-400">One-Time Cleaning</li>
                            <li className="text-gray-400">Glass Cleaning</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3 text-gray-400">
                                <MapPin size={20} className="text-accent mt-1 flex-shrink-0" />
                                <span>3-2-763 kachiguda Hyd</span>
                            </li>
                            <li className="flex items-center space-x-3 text-gray-400">
                                <Phone size={20} className="text-accent flex-shrink-0" />
                                <span>9030047887, 9290207887</span>
                            </li>
                            <li className="flex items-center space-x-3 text-gray-400">
                                <Mail size={20} className="text-accent flex-shrink-0" />
                                <span>indoven.4.links@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Indoven Tradelinks. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
