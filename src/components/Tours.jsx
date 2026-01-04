import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Star, ArrowRight } from 'lucide-react';
import { tours } from '../data/tours';

const Tours = () => {
    return (
        <section id="tours" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-rich-gold font-bold tracking-widest uppercase mb-3">Exclusive Journeys</h2>
                    <h3 className="text-4xl md:text-5xl font-serif font-bold text-royal-blue mb-6">Signature Tour Packages</h3>
                    <div className="w-24 h-1 bg-rich-gold mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {tours.map((tour, index) => (
                        <motion.div
                            key={tour.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ y: -12 }}
                            className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 relative border border-gray-100 flex flex-col h-full"
                        >
                            <div className="relative h-64 shrink-0 overflow-hidden">
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500 z-10" />
                                <img
                                    src={tour.image}
                                    alt={tour.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 right-4 z-20 bg-white/95 backdrop-blur-md px-5 py-2 rounded-full text-royal-blue font-bold shadow-lg border border-white/20">
                                    {tour.price}
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                    <div className="flex items-center gap-1">
                                        <Clock size={16} className="text-rich-gold" />
                                        <span>{tour.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Star size={16} className="text-rich-gold fill-rich-gold" />
                                        <span>5.0 (24 Reviews)</span>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-serif font-bold text-royal-blue mb-3 group-hover:text-rich-gold transition-colors">
                                    {tour.title}
                                </h3>

                                <p className="text-gray-600 mb-6 line-clamp-2 flex-grow">
                                    {tour.description}
                                </p>

                                <button className="flex items-center gap-2 text-royal-blue font-bold uppercase tracking-wide group-hover:gap-4 transition-all mt-auto">
                                    View Itinerary
                                    <ArrowRight size={20} className="text-rich-gold" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button className="border-2 border-royal-blue text-royal-blue hover:bg-royal-blue hover:text-white px-10 py-3 rounded-full font-semibold transition-all duration-300">
                        View All Destinations
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Tours;
