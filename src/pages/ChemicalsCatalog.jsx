import React, { useState } from 'react';
import { chemicals } from '../data/chemicals';
import { Search, Droplet, Shield, Sparkles, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ChemicalsCatalog = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', ...new Set(chemicals.map(c => c.category))];

    const filteredChemicals = chemicals.filter(chemical => {
        const matchesSearch = chemical.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            chemical.id.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || chemical.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="bg-gray-50 min-h-screen pb-20">
            {/* Header */}
            <div className="bg-secondary text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link to="/services" className="inline-flex items-center bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full mb-6 transition-colors backdrop-blur-sm">
                        <ArrowLeft size={20} className="mr-2" />
                        Back to Services
                    </Link>
                    <h1 className="text-4xl font-bold mb-4">Housekeeping Chemicals Catalog</h1>
                    <p className="text-xl text-sky-100 max-w-2xl">
                        Explore our premium range of professional cleaning solutions, designed for efficiency and safety.
                    </p>
                </div>
            </div>

            {/* Filters */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
                <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        <div className="relative w-full md:w-96">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder="Search by name or code (e.g., Z1)"
                                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbar">
                            {categories.map(category => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${selectedCategory === category
                                        ? 'bg-secondary text-white'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredChemicals.map((chemical) => (
                        <div key={chemical.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 flex flex-col h-full group">
                            <div className="p-6 flex-grow">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="bg-accent/10 text-accent font-bold px-3 py-1 rounded-lg text-sm">
                                        {chemical.id}
                                    </div>
                                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 bg-gray-50 px-2 py-1 rounded">
                                        {chemical.category}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-secondary transition-colors">
                                    {chemical.name}
                                </h3>
                                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                                    {chemical.description}
                                </p>

                                <div className="bg-sky-50 rounded-lg p-4 mt-auto">
                                    <h4 className="flex items-center text-sm font-semibold text-secondary mb-2">
                                        <Droplet size={16} className="mr-2" />
                                        Recommended Dilution:
                                    </h4>
                                    <p className="text-sm text-gray-700 whitespace-pre-line">
                                        {chemical.dilution}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredChemicals.length === 0 && (
                    <div className="text-center py-20">
                        <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                            <Search size={32} className="text-gray-400" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">No products found</h3>
                        <p className="text-gray-500 mt-2">Try adjusting your search or category filter.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ChemicalsCatalog;
