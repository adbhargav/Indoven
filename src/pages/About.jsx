import React from 'react';
import { CheckCircle } from 'lucide-react';
import aboutImage from '../assets/about.png';

const About = () => {
    return (
        <div className="bg-white">
            {/* Header */}
            <div className="bg-sky-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold text-gray-900">About Us</h1>
                    <p className="mt-4 text-xl text-gray-600">Creating cleaner, healthier, and more comfortable environments.</p>
                </div>
            </div>

            {/* Company Overview */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-1/2">
                            <img
                                src={aboutImage}
                                alt="Professional Cleaning Team"
                                className="rounded-2xl shadow-xl w-full object-cover h-[500px]"
                            />
                        </div>
                        <div className="lg:w-1/2">
                            <span className="text-accent font-semibold tracking-wider uppercase">Who We Are</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">Trusted Service Provider</h2>
                            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                We are a trusted service provider dedicated to delivering reliable, safe, and high-quality cleaning and pest control solutions for homes, offices, and commercial spaces. With a strong focus on hygiene, safety, and customer satisfaction, we help create cleaner, healthier, and more comfortable environments.
                            </p>
                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                Our services include premium housekeeping chemicals, professional pest control, one-time deep cleaning, and expert glass cleaning. Each service is designed to meet modern cleaning standards while ensuring safety for people, pets, and property.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Commitment */}
            <section className="py-20 bg-sky-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">Our Commitment</h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                            We believe that cleanliness is not just about appearance—it is about health, comfort, and peace of mind. That is why we use carefully selected, effective, and eco-friendly products combined with well-trained professionals who follow best practices in every task.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            "Delivering consistent and high-quality service",
                            "Using safe and approved cleaning solutions",
                            "Maintaining transparency and trust",
                            "Completing every job on time with attention to detail"
                        ].map((item, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                                    <CheckCircle className="text-accent" size={24} />
                                </div>
                                <p className="font-medium text-gray-800">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-gray-50 p-8 rounded-xl shadow-md border-t-4 border-secondary h-full">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Our mission is to provide dependable cleaning and pest control services that improve everyday living and working spaces, while maintaining the highest standards of safety, quality, and professionalism.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-xl shadow-md border-t-4 border-accent h-full">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Our vision is to become a trusted and preferred service partner known for excellence, reliability, and customer satisfaction, serving homes and businesses with integrity and care.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold">Why Choose Us</h2>
                        <p className="mt-4 text-gray-400">Experience the difference of working with professionals.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                        {[
                            "Experienced and trained professionals",
                            "Safe and effective housekeeping chemicals",
                            "Affordable and transparent pricing",
                            "Reliable and timely service",
                            "Customer-first approach"
                        ].map((item, index) => (
                            <div key={index} className="flex items-center space-x-4 bg-gray-800 p-6 rounded-lg">
                                <CheckCircle className="text-accent flex-shrink-0" size={24} />
                                <span className="text-lg font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
