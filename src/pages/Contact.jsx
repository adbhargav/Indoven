import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        alert('Thank you for your message! We will get back to you shortly.');
        setFormData({ name: '', phone: '', email: '', service: '', message: '' });
    };

    return (
        <div className="bg-white">
            {/* Header */}
            <div className="bg-secondary text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold">Contact Us</h1>
                    <p className="mt-4 text-xl text-sky-100">Get in touch for a free quote or consultation.</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Contact Info */}
                    <div className="bg-gray-50 p-8 rounded-2xl shadow-sm h-full">
                        <span className="text-accent font-semibold tracking-wider uppercase">Get In Touch</span>
                        <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-8">We're Here To Help</h2>
                        <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                            Whether you have a question about our services, pricing, or need to schedule a cleaning,
                            our team is ready to assist you.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                                    <Phone className="text-secondary" size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg">Call Us</h3>
                                    <p className="text-gray-600 mt-1">9030047887, 9290207887</p>
                                    <p className="text-gray-500 text-sm">Mon-Fri: 8am - 6pm</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                                    <Mail className="text-secondary" size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg">Email Us</h3>
                                    <p className="text-gray-600 mt-1">indoven.4.links@gmail.com</p>
                                    <p className="text-gray-500 text-sm">We reply within 24 hours.</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                                    <MapPin className="text-secondary" size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg">Visit Us</h3>
                                    <p className="text-gray-600 mt-1">3-2-763 kachiguda</p>
                                    <p className="text-gray-600">Hyd</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-gray-50 p-8 rounded-2xl shadow-sm">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-sky-200 outline-none transition-all"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-sky-200 outline-none transition-all"
                                        placeholder="(123) 456-7890"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-sky-200 outline-none transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Service Required</label>
                                <select
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-sky-200 outline-none transition-all text-gray-600 bg-white"
                                >
                                    <option value="">Select a service</option>
                                    <option value="Housekeeping Chemicals">Housekeeping Chemicals</option>
                                    <option value="Pest Control">Pest Control</option>
                                    <option value="One-Time Cleaning">One-Time Cleaning</option>
                                    <option value="Glass Cleaning">Glass Cleaning</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Message</label>
                                <textarea
                                    name="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-sky-200 outline-none transition-all"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-secondary text-white font-bold py-4 rounded-lg hover:bg-sky-600 transition-colors flex items-center justify-center space-x-2"
                            >
                                <span>Send Message</span>
                                <Send size={20} />
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;
