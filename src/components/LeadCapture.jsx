import React from 'react';
import { ArrowRight } from 'lucide-react';

const LeadCapture = () => {
    return (
        <section className="py-24 bg-cover bg-center bg-no-repeat relative bg-fixed" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1548685913-fe6678babe8d?q=80&w=2500&auto=format&fit=crop")' }}>
            <div className="absolute inset-0 bg-black/60" />

            <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
                    Unlock Secret Travel Deals
                </h2>
                <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
                    Join our exclusive newsletter to receive hand-picked itineraries, luxury hotel upgrades, and early access to seasonal offers.
                </p>

                <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        className="flex-1 px-6 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:border-rich-gold"
                    />
                    <button className="bg-rich-gold hover:bg-yellow-600 text-white px-8 py-4 rounded-full font-bold transition-transform hover:scale-105 shadow-xl flex items-center justify-center gap-2">
                        Subscribe
                        <ArrowRight size={20} />
                    </button>
                </form>

                <p className="text-gray-400 text-xs mt-6">
                    Your privacy is our priority. Unsubscribe at any time.
                </p>
            </div>
        </section>
    );
};

export default LeadCapture;
