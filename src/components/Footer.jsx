import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-royal-blue text-white pt-20 pb-10 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand */}
                    <div>
                        <h2 className="text-3xl font-serif font-bold text-white mb-6">
                            LUX<span className="text-rich-gold">EGYPT</span>
                        </h2>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Curating exceptional Egyptian journeys for the modern luxury traveler. Experience the magic of the Pharaohs with world-class service.
                        </p>
                        <div className="flex gap-4">
                            {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-rich-gold transition-colors">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-rich-gold uppercase tracking-wider">Quick Links</h4>
                        <ul className="space-y-4">
                            {['About Us', 'Destinations', 'Tour Packages', 'Travel Blog', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Top Destinations */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-rich-gold uppercase tracking-wider">Destinations</h4>
                        <ul className="space-y-4">
                            {['Cairo', 'Luxor', 'Aswan', 'Hurghada', 'Alexandria', 'Sharm El Sheikh'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-rich-gold uppercase tracking-wider">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400">
                                <MapPin className="text-rich-gold shrink-0" size={20} />
                                <span>123 Nile Corniche, Downtown Cairo, Egypt</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Phone className="text-rich-gold shrink-0" size={20} />
                                <span>+20 123 456 7890</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Mail className="text-rich-gold shrink-0" size={20} />
                                <span>concierge@luxegypt.com</span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} LuxEgypt. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-gray-500">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
