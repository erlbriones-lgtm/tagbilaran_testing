import React from "react";
import { motion } from "motion/react";
import { Clock, MapPin, Phone, ExternalLink, Facebook } from "lucide-react";

export default function Contact() {
  return (
    <div className="w-full bg-[#FCFBF8] select-none relative pt-28 pb-20 px-6 sm:px-12 border-t border-stone-200" id="contact-view-root">
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-sans font-black text-[#05461a] text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-none mb-6 uppercase"
          >
            Contact Information
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-stone-500 text-sm sm:text-base leading-relaxed font-sans font-medium"
          >
            Access the official contact lines for Tagbilaran City's administrative offices, emergency services, and department coordinators. Please direct inquiries to the specific office responsible for your request.
          </motion.p>
        </div>

        {/* Content Layout Grid - 2x2 Symmetrical Grid with Equal Heights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch" id="contact-content-grid">
          
          {/* CARD 1: Mayor's Office */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-none border border-stone-200 p-6 sm:p-8 shadow-sm flex flex-col justify-between hover:border-stone-300 transition-all duration-300"
            id="card-mayors-office"
          >
            <div>
              <div className="flex justify-between items-center gap-2 mb-4">
                <h3 className="font-sans font-black text-[#05461a] text-lg tracking-tight uppercase">
                  City Mayor's Office
                </h3>
                <span className="text-[10px] text-amber-800 font-sans font-black tracking-wider uppercase">
                  BABA Hotline
                </span>
              </div>
              <p className="text-xs text-stone-500 font-sans font-semibold mb-6 leading-relaxed">
                Primary executive support desk coordinating general city inquiries, public services, and governmental communication.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center bg-stone-50 p-4 rounded-none border border-stone-100">
                <span className="text-xs font-bold text-stone-600 font-sans uppercase tracking-wider">Direct Hotline</span>
                <span className="font-black text-stone-800 text-base tracking-wide font-mono">411 2222</span>
              </div>
              <div className="space-y-2 text-xs text-stone-600 font-sans font-semibold">
                <div className="flex justify-between items-center py-2 border-b border-stone-100">
                  <span className="text-stone-500">Office Line 1</span>
                  <span className="text-stone-900 font-bold font-mono">(038) 412-3715</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-stone-100">
                  <span className="text-stone-500">Office Line 2</span>
                  <span className="text-stone-900 font-bold font-mono">(038) 422-8011</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-stone-500">Official Email</span>
                  <a href="mailto:mayor@tagbilaran.gov.ph" className="text-[#018A2B] font-bold hover:underline select-text">
                    mayor@tagbilaran.gov.ph
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CARD 2: Tourism Office */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="bg-white rounded-none border border-stone-200 p-6 sm:p-8 shadow-sm flex flex-col justify-between hover:border-stone-300 transition-all duration-300"
            id="card-tourism-office"
          >
            <div>
              <div className="flex justify-between items-center gap-2 mb-4">
                <h3 className="font-sans font-black text-[#05461a] text-lg tracking-tight uppercase">
                  City Tourism Office
                </h3>
                <span className="text-[10px] text-emerald-800 font-sans font-black tracking-wider uppercase">
                  Local 167
                </span>
              </div>
              <p className="text-xs text-stone-500 font-sans font-semibold mb-6 leading-relaxed">
                Dedicated directory for heritage preservation, visitor assistance, tour schedules, and creative cultural events.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center bg-stone-50 p-4 rounded-none border border-stone-100">
                <span className="text-xs font-bold text-stone-600 font-sans uppercase tracking-wider">Inquiries Desk</span>
                <span className="font-black text-stone-800 text-base tracking-wide font-mono">(038) 411-2222</span>
              </div>
              <div className="space-y-2 text-xs text-stone-600 font-sans font-semibold">
                <div className="flex justify-between items-center py-2 border-b border-stone-100">
                  <span className="text-stone-500">Tourism Line 1</span>
                  <span className="text-stone-900 font-bold font-mono">(038) 411-2222</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-stone-100">
                  <span className="text-stone-500">Tourism Support</span>
                  <span className="text-stone-900 font-bold font-mono">Local 167</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-stone-500">Official Email</span>
                  <a href="mailto:tourism@tagbilaran.gov.ph" className="text-[#018A2B] font-bold hover:underline select-text">
                    tourism@tagbilaran.gov.ph
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CARD 3: Emergency Response */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-none border border-stone-200 p-6 sm:p-8 shadow-sm flex flex-col justify-between hover:border-stone-300 transition-all duration-300"
            id="card-emergency-response"
          >
            <div>
              <div className="flex justify-between items-center gap-2 mb-4">
                <h3 className="font-sans font-black text-[#05461a] text-lg tracking-tight uppercase">
                  Emergency Response
                </h3>
                <span className="text-[10px] text-red-800 font-sans font-black tracking-wider uppercase">
                  24/7 Hotline
                </span>
              </div>
              <p className="text-xs text-stone-500 font-sans font-semibold mb-6 leading-relaxed">
                Immediate assistance, public safety coordination, and crisis response services across Tagbilaran City.
              </p>
            </div>

            <div className="space-y-5">
              {/* Police */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1.5 h-3.5 bg-red-600 rounded-none" />
                  <span className="text-xs font-bold text-stone-800 uppercase tracking-wider font-sans">Tagbilaran Police (PNP)</span>
                </div>
                <div className="space-y-2 text-xs font-sans pl-3.5 font-semibold">
                  <div className="flex justify-between items-center py-1 border-b border-stone-50">
                    <span className="text-stone-500">Emergency Line 1</span>
                    <span className="text-stone-900 font-bold font-mono">0912 624 4203</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-stone-50">
                    <span className="text-stone-500">Emergency Line 2</span>
                    <span className="text-stone-900 font-bold font-mono">0906 746 4252</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-stone-500">PNP FB Page</span>
                    <a 
                      href="https://www.facebook.com/pulissa.tagbilaran" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-blue-600 hover:text-blue-800 hover:underline font-bold flex items-center gap-1"
                    >
                      <span>Tagbilaran Police PNP</span>
                      <ExternalLink className="w-3 h-3 text-blue-600" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Fire */}
              <div className="border-t border-stone-100 pt-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1.5 h-3.5 bg-amber-600 rounded-none" />
                  <span className="text-xs font-bold text-stone-800 uppercase tracking-wider font-sans">Fire Protection (BFP)</span>
                </div>
                <div className="space-y-2 text-xs font-sans pl-3.5 font-semibold">
                  <div className="flex justify-between items-center py-1 border-b border-stone-50">
                    <span className="text-stone-500">Globe Mobile</span>
                    <span className="text-stone-900 font-bold font-mono">0965 320 3000</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-stone-50">
                    <span className="text-stone-500">Smart Mobile</span>
                    <span className="text-stone-900 font-bold font-mono">0948 984 7487</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-stone-50">
                    <span className="text-stone-500">Landline Direct</span>
                    <span className="text-stone-900 font-bold font-mono">(038) 235-3911</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-stone-500">BFP FB Page</span>
                    <a 
                      href="https://www.facebook.com/bfptagbilaran" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-blue-600 hover:text-blue-800 hover:underline font-bold flex items-center gap-1"
                    >
                      <span>BFP Tagbilaran</span>
                      <ExternalLink className="w-3 h-3 text-blue-600" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CARD 4: Physical Address & Schedules */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="bg-white rounded-none border border-stone-200 p-6 sm:p-8 shadow-sm flex flex-col justify-between hover:border-stone-300 transition-all duration-300"
            id="card-address-schedule"
          >
            <div>
              <div className="flex justify-between items-center gap-2 mb-4">
                <h3 className="font-sans font-black text-[#05461a] text-lg tracking-tight uppercase">
                  Office &amp; Headquarters
                </h3>
                <span className="text-[10px] text-blue-800 font-sans font-black tracking-wider uppercase">
                  City Hall
                </span>
              </div>
              <p className="text-xs text-stone-500 font-sans font-semibold mb-6 leading-relaxed">
                Official government headquarters and administrative operating schedule of the City of Tagbilaran.
              </p>
            </div>

            <div className="space-y-5">
              {/* Physical Address */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-[#05461a]" />
                  <span className="text-xs font-bold text-stone-800 uppercase tracking-wider font-sans">Physical Address</span>
                </div>
                <p className="text-xs text-stone-600 font-sans leading-relaxed pl-6 font-semibold">
                  Tagbilaran City Hall<br />
                  J.A Clarin Street cor. E. Calceta Street,<br />
                   Barangay Cogon, Tagbilaran City 6300 Bohol
                </p>
              </div>

              {/* Office Hours */}
              <div className="border-t border-stone-100 pt-4">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-[#05461a]" />
                  <span className="text-xs font-bold text-stone-800 uppercase tracking-wider font-sans">Office Hours</span>
                </div>
                <p className="text-xs text-stone-600 font-sans leading-relaxed pl-6 font-semibold">
                  Monday to Friday<br />
                  8:00 AM – 5:00 PM PHT<br />
                  <span className="text-[#018A2B] font-bold block mt-1">(Closed on Weekends &amp; Public Holidays)</span>
                </p>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
}

