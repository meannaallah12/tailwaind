import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Tours', href: '#tours' },
        { name: 'Destinations', href: '#destinations' },
        { name: 'About Us', href: '#about' },
    ];

    return (
        <nav className="fixed w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/10 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0 flex items-center">
                        <h1 className="text-3xl font-serif font-bold text-white drop-shadow-md">
                            LUX<span className="text-rich-gold">EGYPT</span>
                        </h1>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-white hover:text-rich-gold transition-colors duration-300 font-medium tracking-wide text-sm uppercase"
                            >
                                {link.name}
                            </a>
                        ))}
                        <button className="bg-rich-gold hover:bg-yellow-600 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-md">
                            Book Now
                        </button>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white hover:text-rich-gold transition-colors"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-royal-blue/95 backdrop-blur-xl overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-8 space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="block text-white hover:text-rich-gold text-lg py-2 border-b border-white/10"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="pt-4">
                                <button className="w-full bg-rich-gold text-white py-3 rounded-lg font-bold">
                                    Book A Trip
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
