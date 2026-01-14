import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Leaf, Clock, Coins, SprayCan, Bug, Sparkles, Droplets, Star, Quote, Phone, CheckCircle, Smile } from 'lucide-react';
import heroImage from '../assets/hero.png';
import pestControlImage from '../assets/pest-control-service.png';
import housekeepingImage from '../assets/housekeeping.png';
import oneTimeCleaningImage from '../assets/one-time-cleaning.png';
import glassCleaningImage from '../assets/glass-cleaning.png';

const Home = () => {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative h-screen min-h-[600px] flex items-center">
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroImage}
                        alt="Clean bright living room"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                        Professional Cleaning & <br /> Pest Control Services
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 font-light text-gray-100 max-w-3xl mx-auto">
                        Reliable, safe, and affordable solutions for your home and office. Experience the difference of a truly professional touch.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <Link
                            to="/contact"
                            className="px-8 py-3 bg-accent text-white rounded-full font-semibold text-lg hover:bg-green-600 transition-all transform hover:scale-105 shadow-lg"
                        >
                            Get a Free Quote
                        </Link>
                        <Link
                            to="/services"
                            className="px-8 py-3 bg-white text-secondary rounded-full font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
                        >
                            Our Services
                        </Link>
                    </div>
                </div>
            </section>

            {/* Services Preview */}
            <section className="py-20 bg-sky-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-secondary font-semibold tracking-wider uppercase">Our Services</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">What We Offer</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: SprayCan, title: "Housekeeping Chemicals", link: "/services", image: housekeepingImage },
                            { icon: Bug, title: "Pest Control", link: "/services", image: pestControlImage },
                            { icon: Sparkles, title: "One-Time Cleaning", link: "/services", image: oneTimeCleaningImage },
                            { icon: Droplets, title: "Glass Cleaning", link: "/services", image: glassCleaningImage }
                        ].map((service, index) => (
                            <Link
                                key={index}
                                to={service.link}
                                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all transform hover:-translate-y-1 block overflow-hidden group"
                            >
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div className="p-6 text-center">
                                    <div className="flex justify-center mb-3">
                                        <div className="w-12 h-12 bg-sky-50 rounded-full flex items-center justify-center text-secondary">
                                            <service.icon size={24} />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                                    <p className="text-secondary font-medium mt-2 flex items-center justify-center">
                                        View Details <span className="ml-1 transition-transform group-hover:translate-x-1">&rarr;</span>
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link
                            to="/services"
                            className="inline-block px-8 py-3 border-2 border-secondary text-secondary rounded-full font-semibold text-lg hover:bg-secondary hover:text-white transition-colors"
                        >
                            View All Services
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-accent font-semibold tracking-wider uppercase">Why Choose Us</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">We Are The Best In The Business</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: ShieldCheck, title: "Experienced Team", desc: "Our professionals are trained and background checked." },
                            { icon: Leaf, title: "Eco-Friendly", desc: "We use safe, non-toxic chemicals that are tough on dirt." },
                            { icon: Coins, title: "Affordable Pricing", desc: "High-quality service at competitive market rates." },
                            { icon: Clock, title: "On-Time Service", desc: "We value your time and guarantee punctual service." }
                        ].map((item, index) => (
                            <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center group">
                                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary transition-colors">
                                    <item.icon className="text-secondary w-8 h-8 group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-secondary font-semibold tracking-wider uppercase">Simple Steps</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">How It Works</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Phone, title: "Contact Us", desc: "Reach out via phone or email." },
                            { icon: CheckCircle, title: "Choose Service", desc: "Select the cleaning plan you need." },
                            { icon: ShieldCheck, title: "We Clean & Protect", desc: "Our team arrives and gets to work." },
                            { icon: Smile, title: "You Relax", desc: "Enjoy your sparkling clean space." }
                        ].map((step, index) => (
                            <div key={index} className="flex flex-col items-center text-center group">
                                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
                                    <step.icon size={36} className="text-secondary group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                                <p className="text-gray-600">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-24 bg-gray-50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16 animate-fade-in-up">
                        <span className="text-accent font-semibold tracking-wider uppercase text-sm">Trusted by homes and businesses</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">What Our Customers Say</h2>
                    </div>

                    <TestimonialCarousel />
                </div>
            </section>
        </div >
    );
};

const TestimonialCarousel = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [isAnimating, setIsAnimating] = React.useState(false);
    const [isHovered, setIsHovered] = React.useState(false);

    const testimonials = [
        {
            name: "Ravi S.",
            location: "Hyderabad",
            text: "Excellent service! The team was professional, punctual, and did an amazing job with our home cleaning. Highly recommend their housekeeping chemicals and one-time deep clean!"
        },
        {
            name: "Sneha M.",
            location: "Vijayawada",
            text: "Their pest control service transformed our home! No more ants, cockroaches, or spiders. Safe, effective, and handled with care. Very satisfied with the result."
        },
        {
            name: "Arun K.",
            location: "Guntur",
            text: "Very happy with the glass cleaning service. Our office windows now look crystal clear! The staff was courteous and detail-oriented."
        },
        {
            name: "Priya R.",
            location: "Visakhapatnam",
            text: "Affordable, fast, and reliable services. From chemicals to cleaning, everything was top quality. Will definitely hire them again!"
        },
        {
            name: "Sanjay T.",
            location: "Vijayawada",
            text: "Great experience! The team explained everything clearly and finished the cleaning ahead of schedule. Highly professional!"
        }
    ];

    React.useEffect(() => {
        if (isHovered) return;

        const interval = setInterval(() => {
            handleNext();
        }, 3000);

        return () => clearInterval(interval);
    }, [currentIndex, isHovered]);

    const handleNext = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
            setIsAnimating(false);
        }, 600); // Wait for exit animation
    };

    const handleDotClick = (index) => {
        if (isAnimating || index === currentIndex) return;
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex(index);
            setIsAnimating(false);
        }, 600);
    };

    const current = testimonials[currentIndex];

    return (
        <div
            className="flex flex-col items-center justify-center min-h-[400px]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={`relative max-w-3xl w-full bg-white rounded-[2rem] shadow-xl p-8 md:p-12 transition-all duration-500 ease-out transform ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                }`}>
                <div className="absolute top-8 left-1/2 -translate-x-1/2 opacity-20">
                    <Quote size={60} className="text-secondary" />
                </div>

                <div className="relative z-10 text-center mt-8">
                    <p className="text-xl md:text-2xl font-medium text-gray-700 leading-relaxed mb-8">
                        "{current.text}"
                    </p>

                    <div className="flex justify-center space-x-1 mb-4 text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={24} fill="currentColor" className={`transition-all duration-300 delay-${i * 100}`} />
                        ))}
                    </div>

                    <div className="mt-6">
                        <h4 className="text-lg font-bold text-gray-900">{current.name}</h4>
                        <p className="text-gray-500 text-sm mt-1">{current.location}</p>
                    </div>
                </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex space-x-3 mt-10">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                            ? 'bg-secondary w-8'
                            : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};


export default Home;
