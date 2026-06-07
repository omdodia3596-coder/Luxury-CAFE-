"use client";

import React, { useState, useEffect } from "react";
import { Calendar, Users, Clock, GlassWater, Send, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ReservationForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    guests: "2",
    date: "",
    time: "19:00",
    occasion: "Casual Dining"
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Set default date to today's date in YYYY-MM-DD format
  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setForm(prev => ({ ...prev, date: today }));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Full name is required";
    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[0-9\s-]{10,14}$/.test(form.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!form.date) newErrors.date = "Reservation date is required";
    if (!form.time) newErrors.time = "Reservation time is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Mock API processing
    setTimeout(() => {
      const existing = localStorage.getItem("luxe_cafe_reservations");
      const reservations = existing ? JSON.parse(existing) : [];
      
      const newReservation = {
        id: "res-" + Date.now(),
        ...form,
        createdAt: new Date().toLocaleString()
      };

      reservations.push(newReservation);
      localStorage.setItem("luxe_cafe_reservations", JSON.stringify(reservations));

      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset form
      setForm({
        name: "",
        phone: "",
        guests: "2",
        date: new Date().toISOString().split("T")[0],
        time: "19:00",
        occasion: "Casual Dining"
      });
    }, 1500);
  };

  return (
    <section id="reservations" className="py-48 px-12 bg-espresso border-t border-gold/10 relative overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute right-[-3%] bottom-[12%] font-serif text-[18rem] md:text-[24rem] font-bold text-stroke-ivory leading-none pointer-events-none select-none opacity-[0.02] z-0">
        05
      </div>

      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-[30%] left-[-20%] w-[40vw] h-[40vw] rounded-full bg-gold/5 blur-[180px] pointer-events-none" />

      {/* Main Reservation Card (Liquid Glass Frosted) */}
      <div className="max-w-4xl mx-auto border border-gold/15 bg-espresso/75 backdrop-blur-2xl p-8 md:p-12 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.03)] relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <span className="text-[9px] tracking-[0.35em] text-gold/85 uppercase font-bold">
            TABLE RESERVATION
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-warm-ivory uppercase">
            SECURE YOUR EXPERIENCE
          </h2>
          <div className="w-12 h-[1px] bg-gold/40" />
          <p className="text-xs text-warm-ivory/50 font-light max-w-md leading-relaxed">
            Reserve a table at Anand's premier luxury lounge. Walk-ins are subject to availability, reservations are highly recommended.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {!isSuccess ? (
            <motion.form
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8"
            >
              {/* Name Field */}
              <div className="flex flex-col space-y-2">
                <label className="text-[8px] tracking-widest text-gold uppercase font-bold">Your Name</label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter full name"
                    className={`w-full bg-transparent border-b ${
                      errors.name ? "border-red-500" : "border-white/15 focus:border-gold"
                    } text-warm-ivory text-xs px-0 py-3.5 focus:outline-none transition-all duration-[0.5s] rounded-none`}
                  />
                </div>
                {errors.name && <p className="text-[10px] text-red-500 tracking-wider">{errors.name}</p>}
              </div>

              {/* Phone Field */}
              <div className="flex flex-col space-y-2">
                <label className="text-[8px] tracking-widest text-gold uppercase font-bold">Phone Number</label>
                <div className="relative">
                  <input
                    type="text"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Enter mobile number"
                    className={`w-full bg-transparent border-b ${
                      errors.phone ? "border-red-500" : "border-white/15 focus:border-gold"
                    } text-warm-ivory text-xs px-0 py-3.5 focus:outline-none transition-all duration-[0.5s] rounded-none`}
                  />
                </div>
                {errors.phone && <p className="text-[10px] text-red-500 tracking-wider">{errors.phone}</p>}
              </div>

              {/* Guests Count Selector */}
              <div className="flex flex-col space-y-2">
                <label className="text-[8px] tracking-widest text-gold uppercase font-bold">Number of Guests</label>
                <div className="relative flex items-center">
                  <Users size={13} className="absolute left-0 text-gold/60 pointer-events-none" />
                  <select
                    name="guests"
                    value={form.guests}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/15 focus:border-gold text-warm-ivory text-xs pl-8 pr-4 py-3.5 focus:outline-none transition-all duration-[0.5s] rounded-none appearance-none cursor-pointer"
                  >
                    {[...Array(20)].map((_, i) => (
                      <option key={i + 1} value={i + 1} className="bg-espresso text-warm-ivory">
                        {i + 1} {i + 1 === 1 ? "Guest" : "Guests"}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Datepicker */}
              <div className="flex flex-col space-y-2">
                <label className="text-[8px] tracking-widest text-gold uppercase font-bold">Reservation Date</label>
                <div className="relative flex items-center">
                  <Calendar size={13} className="absolute left-0 text-gold/60 pointer-events-none" />
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/15 focus:border-gold text-warm-ivory text-xs pl-8 pr-4 py-3.5 focus:outline-none transition-all duration-[0.5s] rounded-none cursor-pointer"
                  />
                </div>
              </div>

              {/* Time Selection */}
              <div className="flex flex-col space-y-2">
                <label className="text-[8px] tracking-widest text-gold uppercase font-bold">Preferred Time</label>
                <div className="relative flex items-center">
                  <Clock size={13} className="absolute left-0 text-gold/60 pointer-events-none" />
                  <select
                    name="time"
                    value={form.time}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/15 focus:border-gold text-warm-ivory text-xs pl-8 pr-4 py-3.5 focus:outline-none transition-all duration-[0.5s] rounded-none appearance-none cursor-pointer"
                  >
                    <option value="11:00" className="bg-espresso text-warm-ivory">11:00 AM (Opening)</option>
                    <option value="12:00" className="bg-espresso text-warm-ivory">12:00 PM</option>
                    <option value="13:00" className="bg-espresso text-warm-ivory">01:00 PM</option>
                    <option value="14:00" className="bg-espresso text-warm-ivory">02:00 PM</option>
                    <option value="15:00" className="bg-espresso text-warm-ivory">03:00 PM</option>
                    <option value="16:00" className="bg-espresso text-warm-ivory">04:00 PM</option>
                    <option value="17:00" className="bg-espresso text-warm-ivory">05:00 PM</option>
                    <option value="18:00" className="bg-espresso text-warm-ivory">06:00 PM</option>
                    <option value="19:00" className="bg-espresso text-warm-ivory">07:00 PM</option>
                    <option value="20:00" className="bg-espresso text-warm-ivory">08:00 PM</option>
                    <option value="21:00" className="bg-espresso text-warm-ivory">09:00 PM</option>
                    <option value="22:00" className="bg-espresso text-warm-ivory">10:00 PM (Last Seating)</option>
                  </select>
                </div>
              </div>

              {/* Occasion Selection */}
              <div className="flex flex-col space-y-2">
                <label className="text-[8px] tracking-widest text-gold uppercase font-bold">Special Occasion</label>
                <div className="relative flex items-center">
                  <GlassWater size={13} className="absolute left-0 text-gold/60 pointer-events-none" />
                  <select
                    id="occasion"
                    name="occasion"
                    value={form.occasion}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/15 focus:border-gold text-warm-ivory text-xs pl-8 pr-4 py-3.5 focus:outline-none transition-all duration-[0.5s] rounded-none appearance-none cursor-pointer"
                  >
                    <option value="Casual Dining" className="bg-espresso text-warm-ivory">Casual Dining</option>
                    <option value="Business Meeting" className="bg-espresso text-warm-ivory">Business Lunch / Meeting</option>
                    <option value="Birthday Celebration" className="bg-espresso text-warm-ivory">Birthday Celebration</option>
                    <option value="Anniversary" className="bg-espresso text-warm-ivory">Anniversary</option>
                    <option value="Coffee Rave Night" className="bg-espresso text-warm-ivory">Coffee Rave Night</option>
                    <option value="FTV New Year Party 25'" className="bg-espresso text-warm-ivory">Wednesday Special</option>
                    <option value="Executive Lunch" className="bg-espresso text-warm-ivory">Executive Lunch Special</option>
                  </select>
                </div>
              </div>

              {/* Submit Button (Liquid Glass Pill) */}
              <div className="md:col-span-2 flex justify-center pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="liquid-glass-button shimmer-button w-full sm:w-60 py-3.5 text-warm-ivory font-bold text-[9px] tracking-[0.25em] uppercase rounded-full shadow-lg border border-gold/45 cursor-pointer disabled:opacity-50 flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">CONFIRMING...</span>
                  ) : (
                    <>
                      <span>CONFIRM BOOKING</span>
                      <Send size={10} />
                    </>
                  )}
                </button>
              </div>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-10 text-center space-y-6"
            >
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 0.5 }}
                className="w-14 h-14 rounded-full border border-gold flex items-center justify-center text-gold bg-gold/5"
              >
                <CheckCircle2 size={28} />
              </motion.div>
              <div className="space-y-2">
                <h3 className="font-serif text-2xl font-bold text-warm-ivory uppercase tracking-wide">
                  RESERVATION CONFIRMED
                </h3>
                <p className="text-xs text-warm-ivory/50 max-w-sm leading-relaxed">
                  We look forward to welcoming you. Your details are saved. You can manage your booking inside the **Ambassador Dashboard**.
                </p>
              </div>
              <button
                onClick={() => setIsSuccess(false)}
                className="liquid-glass-button px-7 py-3 text-warm-ivory text-[9px] font-bold tracking-widest uppercase rounded-full border border-gold/40 cursor-pointer"
              >
                BOOK ANOTHER TABLE
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
