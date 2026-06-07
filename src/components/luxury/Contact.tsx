"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, MessageSquareCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: ""
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.message) return;
    
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setForm({ name: "", phone: "", message: "" });
    }, 1200);
  };

  return (
    <section id="contact" className="py-32 px-6 bg-matte-black border-t border-gold/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left panel: Info & Form */}
          <div className="lg:col-span-6 flex flex-col space-y-12">
            <div className="flex flex-col space-y-2">
              <span className="text-xs tracking-[0.25em] text-gold uppercase font-semibold">
                CONTACT DETAILS & ENQUIRIES
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-warm-ivory uppercase leading-none">
                GET IN TOUCH
              </h2>
            </div>

            {/* Quick Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-xs">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-gold shrink-0">
                  <Phone size={14} />
                </div>
                <div className="flex flex-col space-y-1 mt-1">
                  <span className="text-[9px] tracking-widest text-warm-ivory/40 uppercase">Call Us</span>
                  <a href="tel:+917738438817" className="font-serif text-sm font-bold text-warm-ivory hover:text-gold transition-colors">
                    +91 77384 38817
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-gold shrink-0">
                  <Mail size={14} />
                </div>
                <div className="flex flex-col space-y-1 mt-1">
                  <span className="text-[9px] tracking-widest text-warm-ivory/40 uppercase">Email Us</span>
                  <a href="mailto:Shivftv24@gmail.com" className="font-serif text-sm font-bold text-warm-ivory hover:text-gold transition-colors">
                    Shivftv24@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-gold shrink-0">
                  <MapPin size={14} />
                </div>
                <div className="flex flex-col space-y-1 mt-1">
                  <span className="text-[9px] tracking-widest text-warm-ivory/40 uppercase">Location</span>
                  <span className="leading-relaxed text-warm-ivory/70">
                    Ground Floor 1, Shaan Mall,<br />
                    Vallabh Vidyanagar, Anand
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-gold shrink-0">
                  <Clock size={14} />
                </div>
                <div className="flex flex-col space-y-1 mt-1">
                  <span className="text-[9px] tracking-widest text-warm-ivory/40 uppercase">Open Hours</span>
                  <span className="leading-relaxed text-warm-ivory/70">
                    11:00 AM – 11:00 PM<br />
                    Monday – Sunday
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Feedback Form (Liquid Glass Plaque) */}
            <div className="border border-gold/15 bg-espresso/75 backdrop-blur-2xl p-6 rounded-2xl shadow-2xl">
              <h4 className="font-serif text-lg text-gold uppercase tracking-wider mb-6">Send A Message</h4>
              
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Full Name"
                        className="bg-transparent border-b border-white/15 focus:border-gold text-xs px-0 py-3 focus:outline-none text-warm-ivory transition-all duration-[0.5s] rounded-none"
                      />
                      <input
                        type="text"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="Mobile Number"
                        className="bg-transparent border-b border-white/15 focus:border-gold text-xs px-0 py-3 focus:outline-none text-warm-ivory transition-all duration-[0.5s] rounded-none"
                      />
                    </div>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Your Message..."
                      className="bg-transparent border-b border-white/15 focus:border-gold text-xs px-0 py-3 focus:outline-none text-warm-ivory transition-all duration-[0.5s] rounded-none resize-none"
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="liquid-glass-button shimmer-button py-3.5 text-warm-ivory font-bold text-[9px] tracking-widest uppercase rounded-full border border-gold/45 w-full flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>SENDING...</span>
                      ) : (
                        <>
                          <span>SEND MESSAGE</span>
                          <Send size={10} />
                        </>
                      )}
                    </button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center py-6 text-center space-y-4"
                  >
                    <div className="w-10 h-10 rounded-full border border-gold flex items-center justify-center text-gold">
                      <MessageSquareCheck size={20} />
                    </div>
                    <div className="space-y-1">
                      <h5 className="font-serif text-base font-bold text-warm-ivory uppercase">Message Sent</h5>
                      <p className="text-[10px] text-warm-ivory/50">
                        Thank you for reaching out. Our lounge managers will contact you shortly.
                      </p>
                    </div>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="text-[9px] tracking-widest text-gold hover:underline uppercase"
                    >
                      SEND ANOTHER MESSAGE
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right panel: Embedded Map */}
          <div className="lg:col-span-6 h-[450px] lg:h-auto border border-gold/15 rounded-2xl overflow-hidden relative shadow-2xl">
            <iframe
              src="https://maps.google.com/maps?q=Ground%20Floor%201%2C%20Shaan%20AV%20Fortune%2C%20Shaan%20Mall%2C%20New%20Rajmarg%20Road%2C%20near%20Elecon%20Factory%2C%20Anand%2C%20Gujarat%20388120%2C%20India&t=m&z=16&output=embed&iwloc=near"
              title="Ground Floor 1, Shaan AV Fortune, Shaan Mall, New Rajmarg Road, near Elecon Factory, Anand, Gujarat 388120, India"
              className="w-full h-full border-0 absolute inset-0 filter grayscale invert contrast-125 opacity-75 focus:outline-none"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
