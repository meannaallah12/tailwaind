import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data/testimonials';

const SocialProof = () => {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Trusted By */}
                <div className="mb-20 text-center">
                    <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">Trusted by travelers from</p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Simple Text Logos for Placeholder */}
                        {['National Geographic', 'Conde Nast', 'Travel + Leisure', 'Lonely Planet'].map((brand) => (
                            <span key={brand} className="text-xl md:text-2xl font-serif font-bold text-royal-blue">{brand}</span>
                        ))}
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="md:pr-8">
                        <h2 className="text-rich-gold font-bold tracking-widest uppercase mb-3">Testimonials</h2>
                        <h3 className="text-4xl font-serif font-bold text-royal-blue mb-6">What Our Travelers Say</h3>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            We take pride in crafting unforgettable experiences. Read genuine reviews from our guests who have explored the wonders of Egypt with us.
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="flex text-rich-gold">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={24} fill="currentColor" />)}
                            </div>
                            <span className="font-bold text-royal-blue text-xl">5.0/5.0</span>
                            <span className="text-gray-400"> (Based on 500+ Reviews)</span>
                        </div>
                    </div>

                    {/* Testimonial Cards (Vertical Scroll or Grid for MVP) */}
                    <div className="space-y-6">
                        {testimonials.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm relative"
                            >
                                <Quote className="absolute top-4 right-4 text-rich-gold/20" size={40} />
                                <p className="text-gray-700 italic mb-4 relative z-10">"{item.text}"</p>
                                <div className="flex items-center gap-4">
                                    <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full object-cover border-2 border-rich-gold" />
                                    <div>
                                        <h4 className="font-bold text-royal-blue">{item.name}</h4>
                                        <p className="text-xs text-rich-gold font-semibold uppercase">{item.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default SocialProof;
