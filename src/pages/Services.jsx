import React from 'react';
import { Link } from 'react-router-dom';
import { SprayCan, Bug, Sparkles, Droplets, ArrowRight } from 'lucide-react';
import pestControlImage from '../assets/pest-control-service.png';
import housekeepingImage from '../assets/housekeeping.png';
import oneTimeCleaningImage from '../assets/one-time-cleaning.png';
import glassCleaningImage from '../assets/glass-cleaning.png';

const Services = () => {
    const services = [
        {
            id: 1,
            title: "Housekeeping Chemicals",
            icon: SprayCan,
            description: "We supply high-quality, safe, and effective cleaning chemicals suitable for homes, offices, and commercial spaces. Our products are eco-friendly and tough on stains.",
            features: ["Eco-friendly formulas", "Bulk supply available", "Safety certified"],
            image: housekeepingImage,
            link: "/services/chemicals",
            buttonText: "View Products"
        },
        {
            id: 2,
            title: "Pest Control Services",
            icon: Bug,
            description: "Comprehensive control for insects, rodents, and other pests. We ensure your environment is safe for families and pets while effectively eliminating pests.",
            features: ["Odorless treatments", "Long-term protection", "Licensed technicians"],
            image: pestControlImage
        },
        {
            id: 3,
            title: "One-Time Cleaning",
            icon: Sparkles,
            description: "Deep cleaning services for move-ins, move-outs, or special occasions. We leave no corner untouched, ensuring a sparkling clean space.",
            features: ["Deep dusting & sanitizing", "Floor scrubbing", "Kitchen & washroom detailing"],
            image: oneTimeCleaningImage
        },
        {
            id: 4,
            title: "Glass Cleaning Services",
            icon: Droplets,
            description: "Professional window and glass surface cleaning for a streak-free finish. Ideal for high-rise buildings, showrooms, and residential homes.",
            features: ["Streak-free finish", "High-reach equipment", "Scratch-free techniques"],
            image: glassCleaningImage
        }
    ];

    return (
        <div className="bg-gray-50 pb-20">
            {/* Header */}
            <div className="bg-secondary text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold">Our Services</h1>
                    <p className="mt-4 text-xl text-sky-100">Comprehensive solutions for a cleaner, safer environment.</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
                <div className="grid grid-cols-1 gap-12">
                    {services.map((service, index) => (
                        <div key={service.id} className={`bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>

                            {/* Image Section */}
                            <div className="lg:w-2/5 relative min-h-[300px] bg-gray-100 flex items-center justify-center group/image cursor-pointer">
                                {service.link ? (
                                    <Link to={service.link} className="absolute inset-0 w-full h-full block">
                                        {service.image ? (
                                            <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover/image:scale-105" />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-secondary/20">
                                                <service.icon size={120} strokeWidth={1} />
                                            </div>
                                        )}
                                    </Link>
                                ) : (
                                    <>
                                        {service.image ? (
                                            <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover" />
                                        ) : (
                                            <div className="text-secondary/20 p-8">
                                                <service.icon size={120} strokeWidth={1} />
                                            </div>
                                        )}
                                    </>
                                )}
                            </div>

                            {/* Content Section */}
                            <div className="lg:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center text-secondary">
                                        <service.icon size={24} />
                                    </div>
                                    <h2 className="text-3xl font-bold text-gray-900">
                                        {service.link ? (
                                            <Link to={service.link} className="hover:text-accent transition-colors">
                                                {service.title}
                                            </Link>
                                        ) : (
                                            service.title
                                        )}
                                    </h2>
                                </div>

                                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                    {service.description}
                                </p>

                                <div className="mb-8">
                                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center text-gray-600">
                                                <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <Link
                                    to={service.link || "/contact"}
                                    className="inline-flex items-center space-x-2 bg-accent text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-all shadow-md self-start group"
                                >
                                    <span>{service.buttonText || "Book This Service"}</span>
                                    <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Bottom */}
            <div className="max-w-4xl mx-auto mt-20 px-4 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Need a Custom Solution?</h2>
                <p className="text-gray-600 mb-8">We can tailor our services to meet your specific needs. Contact us today for a free consultation.</p>
                <Link
                    to="/contact"
                    className="px-8 py-3 bg-accent text-white rounded-full font-semibold text-lg hover:bg-green-600 transition-colors shadow-lg"
                >
                    Contact Us Now
                </Link>
            </div>
        </div>
    );
};

export default Services;
