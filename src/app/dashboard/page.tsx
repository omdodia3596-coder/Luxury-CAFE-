"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Calendar, Users, Clock, GlassWater, Trash2, Check, ArrowLeft, RefreshCw, BarChart2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Reservation {
  id: string;
  name: string;
  phone: string;
  guests: string;
  date: string;
  time: string;
  occasion: string;
  createdAt: string;
  status?: "pending" | "confirmed";
}

export default function DashboardPage() {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState(true);

  const loadReservations = () => {
    setLoading(true);
    setTimeout(() => {
      const stored = localStorage.getItem("luxe_cafe_reservations");
      if (stored) {
        setReservations(JSON.parse(stored));
      } else {
        // Pre-fill some mock data if none exists so the user has data to look at
        const mocks: Reservation[] = [
          {
            id: "res-mock-1",
            name: "Ananya Sharma",
            phone: "+91 98765 43210",
            guests: "4",
            date: new Date(Date.now() + 86400000).toISOString().split("T")[0],
            time: "19:00",
            occasion: "Birthday Celebration",
            createdAt: new Date().toLocaleString(),
            status: "confirmed"
          },
          {
            id: "res-mock-2",
            name: "Kabir Patel",
            phone: "+91 88877 66554",
            guests: "2",
            date: new Date(Date.now() + 172800000).toISOString().split("T")[0],
            time: "20:30",
            occasion: "Anniversary",
            createdAt: new Date().toLocaleString(),
            status: "pending"
          }
        ];
        localStorage.setItem("luxe_cafe_reservations", JSON.stringify(mocks));
        setReservations(mocks);
      }
      setLoading(false);
    }, 800);
  };

  useEffect(() => {
    loadReservations();
  }, []);

  const handleConfirm = (id: string) => {
    const updated = reservations.map(res => {
      if (res.id === id) {
        return { ...res, status: "confirmed" as const };
      }
      return res;
    });
    setReservations(updated);
    localStorage.setItem("luxe_cafe_reservations", JSON.stringify(updated));
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to cancel this reservation?")) {
      const filtered = reservations.filter(res => res.id !== id);
      setReservations(filtered);
      localStorage.setItem("luxe_cafe_reservations", JSON.stringify(filtered));
    }
  };

  // Stat Calculations
  const totalBookings = reservations.length;
  const pendingBookings = reservations.filter(r => r.status !== "confirmed").length;
  const totalGuests = reservations.reduce((acc, curr) => acc + parseInt(curr.guests || "0"), 0);

  return (
    <div className="max-w-7xl mx-auto px-6 py-32 text-warm-ivory">
      {/* Navigation Go back */}
      <Link
        href="/"
        className="inline-flex items-center space-x-2 text-[10px] tracking-widest text-gold hover:text-gold-hover uppercase mb-12 group transition-colors"
      >
        <ArrowLeft size={12} className="transform group-hover:-translate-x-1 transition-transform" />
        <span>Back to Website</span>
      </Link>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-gold/15">
        <div className="flex flex-col space-y-2">
          <span className="text-xs tracking-[0.3em] text-gold uppercase font-semibold">
            Administrative Console
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight text-warm-ivory uppercase leading-none">
            AMBASSADOR DASHBOARD
          </h1>
        </div>
        <button
          onClick={loadReservations}
          className="px-4 py-2 border border-gold/20 hover:border-gold text-[10px] tracking-widest uppercase transition-colors flex items-center space-x-1.5 self-start"
        >
          <RefreshCw size={12} className={loading ? "animate-spin" : ""} />
          <span>Refresh Bookings</span>
        </button>
      </div>

      {/* Stats Board */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
        <div className="border border-gold/15 bg-espresso/5 p-6 rounded-sm flex justify-between items-center glass-panel">
          <div className="flex flex-col space-y-1">
            <span className="text-[10px] tracking-widest text-warm-ivory/40 uppercase">Total Bookings</span>
            <span className="font-serif text-3xl font-bold text-warm-ivory">{totalBookings}</span>
          </div>
          <Calendar size={28} className="text-gold/60" />
        </div>
        
        <div className="border border-gold/15 bg-espresso/5 p-6 rounded-sm flex justify-between items-center glass-panel">
          <div className="flex flex-col space-y-1">
            <span className="text-[10px] tracking-widest text-warm-ivory/40 uppercase">Awaiting Action</span>
            <span className="font-serif text-3xl font-bold text-gold">{pendingBookings}</span>
          </div>
          <Clock size={28} className="text-gold/60" />
        </div>

        <div className="border border-gold/15 bg-espresso/5 p-6 rounded-sm flex justify-between items-center glass-panel">
          <div className="flex flex-col space-y-1">
            <span className="text-[10px] tracking-widest text-warm-ivory/40 uppercase">Total Guest Covers</span>
            <span className="font-serif text-3xl font-bold text-warm-ivory">{totalGuests}</span>
          </div>
          <Users size={28} className="text-gold/60" />
        </div>
      </div>

      {/* Reservations Table list */}
      <div className="border border-gold/15 bg-espresso/5 rounded-sm overflow-hidden glass-panel">
        <div className="p-6 border-b border-gold/15 flex items-center justify-between">
          <h3 className="font-serif text-xl font-bold text-gold uppercase tracking-wider">Active Bookings</h3>
          <BarChart2 size={18} className="text-gold/50" />
        </div>

        {loading ? (
          <div className="py-20 text-center">
            <span className="text-gold text-xs tracking-widest uppercase animate-pulse">Loading Database...</span>
          </div>
        ) : reservations.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-gold/10 text-warm-ivory/40 uppercase tracking-widest text-[9px]">
                  <th className="p-6">Guest Info</th>
                  <th className="p-6">Guests</th>
                  <th className="p-6">Schedule</th>
                  <th className="p-6">Occasion</th>
                  <th className="p-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gold/10">
                <AnimatePresence mode="popLayout">
                  {reservations.map((res) => (
                    <motion.tr
                      key={res.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="hover:bg-espresso/10 transition-colors"
                    >
                      <td className="p-6">
                        <div className="flex flex-col space-y-1">
                          <span className="font-semibold text-sm text-warm-ivory">{res.name}</span>
                          <span className="text-warm-ivory/50">{res.phone}</span>
                        </div>
                      </td>
                      <td className="p-6 font-serif font-bold text-sm text-warm-ivory">
                        {res.guests} Covers
                      </td>
                      <td className="p-6">
                        <div className="flex flex-col space-y-1">
                          <span className="font-medium">{res.date}</span>
                          <span className="text-gold font-medium">{res.time}</span>
                        </div>
                      </td>
                      <td className="p-6">
                        <span className="px-3 py-1 bg-matte-black border border-gold/20 rounded-full text-[9px] uppercase font-semibold tracking-wider text-warm-ivory/80">
                          {res.occasion}
                        </span>
                      </td>
                      <td className="p-6 text-right">
                        <div className="flex items-center justify-end space-x-2">
                          {res.status !== "confirmed" ? (
                            <button
                              onClick={() => handleConfirm(res.id)}
                              className="w-8 h-8 bg-gold hover:bg-gold-hover text-matte-black rounded-sm flex items-center justify-center transition-colors"
                              title="Confirm Booking"
                            >
                              <Check size={14} />
                            </button>
                          ) : (
                            <span className="px-3 py-1 bg-green-950/60 border border-green-800 text-green-400 text-[9px] uppercase font-bold tracking-widest rounded-sm">
                              Confirmed
                            </span>
                          )}
                          <button
                            onClick={() => handleDelete(res.id)}
                            className="w-8 h-8 border border-red-900/30 hover:border-red-600 text-red-500 rounded-sm flex items-center justify-center transition-colors"
                            title="Cancel Booking"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </tbody>
            </table>
          </div>
        ) : (
          <div className="py-20 text-center flex flex-col items-center justify-center space-y-3">
            <Users size={32} className="text-gold/40" />
            <h4 className="font-serif text-lg text-warm-ivory uppercase">No Bookings Found</h4>
            <p className="text-[10px] text-warm-ivory/50">
              There are no reservations booked yet. Submit a reservation on the website homepage to see it list here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
