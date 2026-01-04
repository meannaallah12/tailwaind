import React from 'react';
import { motion } from 'framer-motion';
import { Play, Search, Calendar, MapPin, DollarSign } from 'lucide-react';

const Hero = () => {
    return (
        <div className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background with Overlay */}
            <div
                className="absolute inset-0 z-0 bg-hero-pattern bg-cover bg-center bg-no-repeat bg-fixed"
            >
                <div className="absolute inset-0 bg-gradient-to-b from-royal-blue/60 via-black/30 to-black/60" />
            </div>

            {/* Main Content */}
            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-[-80px]">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-rich-gold tracking-[0.3em] uppercase text-sm md:text-base font-semibold mb-4"
                >
                    Discover The Ancient World
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight"
                >
                    Unveil the Mysteries <br /> of the Nile
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light"
                >
                    Curated luxury tours designed by local experts. Experience Egypt like never before.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <button className="bg-rich-gold hover:bg-yellow-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-transform hover:scale-105 shadow-lg shadow-yellow-900/20">
                        Explore Tours
                    </button>
                    <button className="flex items-center gap-2 text-white border border-white/30 hover:bg-white/10 px-8 py-4 rounded-full font-semibold text-lg transition-all backdrop-blur-sm">
                        <Play size={20} fill="currentColor" className="text-rich-gold" />
                        Watch Video
                    </button>
                </motion.div>
            </div>

            {/* Quick Filter Bar */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute bottom-10 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:bottom-20 z-20 max-w-4xl w-full"
            >
                <div className="bg-white/95 backdrop-blur-md p-4 md:p-6 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-4 items-center justify-between">
                    <div className="flex items-center gap-3 w-full md:w-auto border-b md:border-b-0 md:border-r border-gray-200 pb-2 md:pb-0 pr-4">
                        <MapPin className="text-rich-gold" />
                        <div className="text-left">
                            <p className="text-xs text-gray-500 font-semibold uppercase">Destination</p>
                            <select className="bg-transparent font-serif text-royal-blue font-bold outline-none w-full md:w-40 cursor-pointer">
                                <option>All Destinations</option>
                                <option>Cairo</option>
                                <option>Luxor</option>
                                <option>Aswan</option>      
                                <option>Sharm El Sheikh</option>
                                <option>Alexandria</option>
                                <option>Hurghada</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 w-full md:w-auto border-b md:border-b-0 md:border-r border-gray-200 pb-2 md:pb-0 pr-4">
                        <Calendar className="text-rich-gold" />
                        <div className="text-left">
                            <p className="text-xs text-gray-500 font-semibold uppercase">Duration</p>
                            <select className="bg-transparent font-serif text-royal-blue font-bold outline-none w-full md:w-32 cursor-pointer">
                                <option>Any Duration</option>
                                <option>3-5 Days</option>
                                <option>7-10 Days</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 w-full md:w-auto pb-2 md:pb-0">
                        <DollarSign className="text-rich-gold" />
                        <div className="text-left">
                            <p className="text-xs text-gray-500 font-semibold uppercase">Budget</p>
                            <select className="bg-transparent font-serif text-royal-blue font-bold outline-none w-full md:w-32 cursor-pointer">
                                <option>Any Budget</option>
                                <option>$1000 - $2000</option>
                                <option>$2000+</option>
                            </select>
                        </div>
                    </div>

                    <button className="w-full md:w-auto bg-royal-blue hover:bg-blue-900 text-white p-4 rounded-xl transition-colors shadow-lg">
                        <Search size={24} />
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default Hero;
