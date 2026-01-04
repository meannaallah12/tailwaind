import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Sparkles, Send } from 'lucide-react';

const AIConcierge = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-royal-blue">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-rich-gold/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                    <div className="md:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-rich-gold mb-6 border border-white/10"
                        >
                            <Sparkles size={16} />
                            <span className="text-sm font-semibold tracking-wider">FUTURE OF TRAVEL</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl md:text-5xl font-serif font-bold text-white mb-6"
                        >
                            Your Personal <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-rich-gold to-yellow-200">AI Concierge</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-gray-300 text-lg mb-8 leading-relaxed"
                        >
                            Imagine an itinerary built just for you in seconds. Our advanced AI understands your travel style, budget, and dreams to craft the perfect Egyptian adventure.
                        </motion.p>

                        <div className="flex items-center gap-4 text-white/60 text-sm">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                            Coming Soon
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="md:w-1/2 w-full"
                    >
                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl">
                            <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-4">
                                <div className="w-12 h-12 bg-gradient-to-tr from-rich-gold to-yellow-500 rounded-full flex items-center justify-center">
                                    <Bot className="text-white" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-lg">Horus AI</h3>
                                    <p className="text-gray-400 text-xs">Your 24/7 Digital Guide</p>
                                </div>
                            </div>

                            <div className="space-y-4 mb-6">
                                <div className="bg-white/5 rounded-lg p-4 rounded-tl-none mr-12">
                                    <p className="text-gray-300 text-sm">Hello! I can help you plan your trip. Start by typing something like "I want to see the Pyramids and go diving".</p>
                                </div>
                                <div className="bg-rich-gold/20 rounded-lg p-4 rounded-tr-none ml-12 border border-rich-gold/20">
                                    <p className="text-rich-gold text-sm">That sounds amazing! I'll outline a 7-day itinerary covering Cairo and Hurghada.</p>
                                </div>
                            </div>

                            <div className="relative">
                                <input
                                    type="text"
                                    disabled
                                    placeholder="Coming Soon..."
                                    className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-rich-gold transition-colors cursor-not-allowed"
                                />
                                <button disabled className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-rich-gold/50 rounded-lg text-white/50 cursor-not-allowed">
                                    <Send size={18} />
                                </button>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default AIConcierge;
