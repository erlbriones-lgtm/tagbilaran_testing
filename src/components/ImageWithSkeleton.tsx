import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface ImageWithSkeletonProps {
  key?: string | number;
  src?: string;
  alt?: string;
  className?: string;
  containerClassName?: string;
  loading?: "lazy" | "eager";
  referrerPolicy?: React.HTMLAttributeReferrerPolicy;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export default function ImageWithSkeleton({
  src,
  alt,
  className = "w-full h-full object-cover",
  containerClassName = "w-full h-full overflow-hidden relative",
  loading,
  referrerPolicy,
  onClick,
}: ImageWithSkeletonProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={containerClassName} onClick={onClick}>
      {/* Antique thematic skeleton loader */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div 
            key="skeleton"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#ede3c9] overflow-hidden"
            style={{
              boxShadow: "inset 0 0 15px rgba(44, 26, 14, 0.05)"
            }}
          >
            {/* Shimmer pulse glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-[#bc923a]/15 to-transparent"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                repeat: Infinity,
                duration: 1.6,
                ease: "easeInOut",
              }}
            />
            {/* Classic ornamental framing icon */}
            <motion.div
              animate={{ opacity: [0.4, 0.7, 0.4] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2"
            >
              <svg className="w-8 h-8 text-[#845f20]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-[9px] font-mono tracking-[0.2em] text-[#845f20]/40 uppercase select-none font-bold">
                Archival Loading
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.img
        src={src}
        alt={alt}
        className={`${className} ${isLoaded ? "opacity-100" : "opacity-0"}`}
        initial={{ opacity: 0, scale: 1.03 }}
        animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.03 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        onLoad={() => setIsLoaded(true)}
        loading={loading}
        referrerPolicy={referrerPolicy}
      />
    </div>
  );
}
