import React from "react";
import { motion } from "motion/react";

interface PageSkeletonProps {
  view: "home" | "growth" | "heritage" | "shops" | "downloadables" | "barangay" | "saulog" | "travel" | "about" | "contact";
}

export default function PageSkeleton({ view }: PageSkeletonProps) {
  // Custom shimmer gradient effect
  const ShimmerEffect = () => (
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-600/[0.04] to-transparent"
      initial={{ x: "-100%" }}
      animate={{ x: "100%" }}
      transition={{
        repeat: Infinity,
        duration: 1.5,
        ease: "easeInOut",
      }}
    />
  );

  // Individual Skeleton Partials
  const SkeletonBlock = ({ className = "h-4 bg-stone-200/70 rounded-lg relative overflow-hidden" }: { className?: string; key?: React.Key }) => (
    <div className={className}>
      <ShimmerEffect />
    </div>
  );

  switch (view) {
    case "travel":
      return (
        <div className="w-full bg-white pt-32 pb-24 px-6 sm:px-12 min-h-screen max-w-6xl mx-auto space-y-16 animate-pulse select-none font-jakarta">
          {/* Header Hero Area */}
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-4">
            <SkeletonBlock className="h-10 sm:h-14 w-80 bg-stone-200 rounded-2xl relative overflow-hidden" />
            <SkeletonBlock className="h-4 w-full bg-stone-100 rounded-lg relative overflow-hidden" />
            <SkeletonBlock className="h-4 w-5/6 bg-stone-100 rounded-lg relative overflow-hidden" />
          </div>

          {/* Transport/Port Cards List */}
          <div className="space-y-20">
            {[1, 2, 3].map((id) => (
              <div
                key={id}
                className={`flex flex-col md:flex-row ${
                  id % 2 === 0 ? "md:flex-row-reverse" : ""
                } gap-8 md:gap-16 items-center`}
              >
                {/* Image Aspect ratio container */}
                <div className="w-full md:w-1/2 aspect-[16/10] rounded-3xl bg-stone-100 border border-stone-200/50 relative overflow-hidden">
                  <ShimmerEffect />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-12 h-12 text-stone-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>

                {/* Text Description Box */}
                <div className="w-full md:w-1/2 space-y-4 text-left">
                  <SkeletonBlock className="h-8 w-48 bg-stone-200 rounded-xl relative overflow-hidden" />
                  <div className="space-y-2.5">
                    <SkeletonBlock className="h-4 w-full bg-stone-100 rounded-lg relative overflow-hidden" />
                    <SkeletonBlock className="h-4 w-full bg-stone-100 rounded-lg relative overflow-hidden" />
                    <SkeletonBlock className="h-4 w-5/6 bg-stone-100 rounded-lg relative overflow-hidden" />
                  </div>
                  {/* Fake advisory block skeleton */}
                  <div className="p-5 bg-stone-50 border border-stone-200/50 rounded-2xl space-y-3 relative overflow-hidden">
                    <SkeletonBlock className="h-4 w-40 bg-stone-200 rounded-md relative overflow-hidden" />
                    <SkeletonBlock className="h-3 w-11/12 bg-stone-100 rounded-md relative overflow-hidden" />
                    <SkeletonBlock className="h-3 w-2/3 bg-stone-100 rounded-md relative overflow-hidden" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    case "growth":
      return (
        <div className="w-full bg-white pt-28 pb-20 px-6 sm:px-12 min-h-screen max-w-7xl mx-auto space-y-16 animate-pulse select-none font-jakarta">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <SkeletonBlock className="h-12 w-96 bg-stone-200 rounded-2xl mx-auto relative overflow-hidden" />
            <SkeletonBlock className="h-4 w-full bg-stone-100 rounded-lg relative overflow-hidden" />
            <SkeletonBlock className="h-4 w-4/5 bg-stone-100 rounded-lg mx-auto relative overflow-hidden" />
          </div>

          {/* 2-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {[1, 2, 4, 5].map((id) => (
              <div key={id} className="bg-stone-50/50 rounded-3xl border border-stone-200/60 overflow-hidden p-0 space-y-6 flex flex-col">
                <div className="relative aspect-[16/10] w-full bg-stone-100 relative overflow-hidden">
                  <ShimmerEffect />
                </div>
                <div className="p-6 sm:p-8 space-y-4 text-left">
                  <div className="flex items-center gap-2">
                    <div className="w-3.5 h-3.5 rounded-full bg-stone-200 relative overflow-hidden"><ShimmerEffect /></div>
                    <SkeletonBlock className="h-3 w-32 bg-stone-200/80 rounded-md relative overflow-hidden" />
                  </div>
                  <SkeletonBlock className="h-6 w-3/4 bg-stone-200 rounded-xl relative overflow-hidden" />
                  <div className="space-y-2">
                    <SkeletonBlock className="h-3.5 w-full bg-stone-100 rounded-lg relative overflow-hidden" />
                    <SkeletonBlock className="h-3.5 w-11/12 bg-stone-100 rounded-lg relative overflow-hidden" />
                  </div>
                  <div className="border-t border-stone-200/50 pt-4 space-y-2">
                    <SkeletonBlock className="h-3 w-40 bg-stone-150 rounded-md relative overflow-hidden" />
                    <SkeletonBlock className="h-3 w-56 bg-stone-150 rounded-md relative overflow-hidden" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    case "saulog":
      return (
        <div className="w-full bg-white pb-24 min-h-screen animate-pulse select-none font-jakarta">
          {/* Hero Header Aspect Ratio block */}
          <div className="relative min-h-[30vh] sm:min-h-[45vh] md:min-h-[60vh] bg-stone-150 relative overflow-hidden flex items-center justify-center">
            <ShimmerEffect />
            <div className="z-10 flex flex-col items-center gap-3">
              <SkeletonBlock className="h-10 w-64 bg-stone-200 rounded-xl relative overflow-hidden" />
              <SkeletonBlock className="h-4 w-40 bg-stone-200 rounded-lg relative overflow-hidden" />
            </div>
          </div>

          {/* Description Block */}
          <div className="max-w-4xl mx-auto px-6 pt-16 sm:pt-24 space-y-8 flex flex-col items-center text-center">
            <SkeletonBlock className="h-8 w-80 bg-stone-200 rounded-xl relative overflow-hidden" />
            <SkeletonBlock className="h-4 w-48 bg-stone-150 rounded-md relative overflow-hidden" />
            
            <div className="space-y-3.5 w-full max-w-3xl">
              <SkeletonBlock className="h-4 w-full bg-stone-100 rounded-lg relative overflow-hidden" />
              <SkeletonBlock className="h-4 w-full bg-stone-100 rounded-lg relative overflow-hidden" />
              <SkeletonBlock className="h-4 w-11/12 bg-stone-100 rounded-lg mx-auto relative overflow-hidden" />
            </div>

            <div className="pt-6 w-full max-w-sm">
              <SkeletonBlock className="h-14 w-full bg-stone-200 rounded-full relative overflow-hidden" />
            </div>
          </div>
        </div>
      );

    case "downloadables":
      return (
        <div className="w-full bg-[#FAF9F5] pt-28 pb-20 px-6 sm:px-12 min-h-screen max-w-7xl mx-auto space-y-12 animate-pulse select-none font-jakarta">
          {/* Header titles */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <SkeletonBlock className="h-12 w-80 bg-stone-200 rounded-2xl mx-auto relative overflow-hidden" />
            <SkeletonBlock className="h-4 w-11/12 bg-stone-100 rounded-md mx-auto relative overflow-hidden" />
          </div>

          {/* Search bar & Categories row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-stone-200/60 pb-6">
            <SkeletonBlock className="h-11 w-full sm:w-80 bg-stone-150 rounded-2xl relative overflow-hidden" />
            <div className="flex gap-2 w-full sm:w-auto">
              {[1, 2, 3].map((i) => (
                <SkeletonBlock key={i} className="h-9 w-24 bg-stone-150 rounded-xl relative overflow-hidden" />
              ))}
            </div>
          </div>

          {/* Document list grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white border border-stone-200 rounded-3xl p-6 space-y-4 flex flex-col justify-between h-48 relative overflow-hidden">
                <ShimmerEffect />
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <div className="w-9 h-9 rounded-xl bg-stone-150 relative overflow-hidden" />
                    <SkeletonBlock className="h-5 w-16 bg-stone-200 rounded-md relative overflow-hidden" />
                  </div>
                  <SkeletonBlock className="h-5 w-4/5 bg-stone-200 rounded-lg relative overflow-hidden" />
                  <SkeletonBlock className="h-3 w-full bg-stone-100 rounded-md relative overflow-hidden" />
                </div>
                <div className="flex justify-between items-center border-t border-stone-100 pt-3">
                  <SkeletonBlock className="h-3 w-20 bg-stone-100 rounded-md relative overflow-hidden" />
                  <SkeletonBlock className="h-7 w-20 bg-stone-200 rounded-lg relative overflow-hidden" />
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    case "shops":
      return (
        <div className="w-full bg-white pt-28 pb-20 px-6 sm:px-12 min-h-screen max-w-6xl mx-auto space-y-12 animate-pulse select-none font-jakarta">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <SkeletonBlock className="h-10 w-64 bg-stone-200 rounded-2xl mx-auto relative overflow-hidden" />
            <SkeletonBlock className="h-4 w-96 bg-stone-100 rounded-md mx-auto relative overflow-hidden" />
          </div>

          {/* Music Splitter Panel */}
          <div className="flex flex-col lg:flex-row gap-8 bg-stone-50 border border-stone-200 rounded-3xl p-6 sm:p-8 relative overflow-hidden min-h-[500px]">
            <ShimmerEffect />
            {/* Playlists sidebar */}
            <div className="w-full lg:w-2/5 space-y-4">
              <SkeletonBlock className="h-6 w-36 bg-stone-200 rounded-lg relative overflow-hidden" />
              <div className="space-y-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex items-center gap-3 p-2.5 rounded-xl border border-stone-150/40">
                    <div className="w-10 h-10 rounded-lg bg-stone-200 relative overflow-hidden" />
                    <div className="flex-1 space-y-2">
                      <SkeletonBlock className="h-4 w-32 bg-stone-200 rounded-md relative overflow-hidden" />
                      <SkeletonBlock className="h-3 w-20 bg-stone-100 rounded-md relative overflow-hidden" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* active music controller */}
            <div className="w-full lg:w-3/5 border-t lg:border-t-0 lg:border-l border-stone-200/80 pt-6 lg:pt-0 lg:pl-8 flex flex-col justify-center items-center space-y-6">
              <div className="w-48 h-48 rounded-full bg-stone-200 relative overflow-hidden flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/60" />
              </div>
              <div className="text-center space-y-2 w-full max-w-xs">
                <SkeletonBlock className="h-5 w-40 bg-stone-200 rounded-lg mx-auto relative overflow-hidden" />
                <SkeletonBlock className="h-3 w-24 bg-stone-100 rounded-md mx-auto relative overflow-hidden" />
              </div>
              {/* Fake playback timeline slider */}
              <div className="w-full max-w-md space-y-1.5">
                <SkeletonBlock className="h-2 w-full bg-stone-200 rounded-full relative overflow-hidden" />
                <div className="flex justify-between">
                  <SkeletonBlock className="h-3 w-6 bg-stone-100 rounded-md relative overflow-hidden" />
                  <SkeletonBlock className="h-3 w-6 bg-stone-100 rounded-md relative overflow-hidden" />
                </div>
              </div>
              {/* Controls triggers */}
              <div className="flex items-center gap-6">
                <div className="w-8 h-8 rounded-full bg-stone-200 relative overflow-hidden" />
                <div className="w-14 h-14 rounded-full bg-stone-200 relative overflow-hidden" />
                <div className="w-8 h-8 rounded-full bg-stone-200 relative overflow-hidden" />
              </div>
            </div>
          </div>
        </div>
      );

    case "barangay":
      return (
        <div className="w-full bg-white pt-28 pb-20 px-6 sm:px-12 min-h-screen max-w-7xl mx-auto space-y-12 animate-pulse select-none font-jakarta">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <SkeletonBlock className="h-12 w-96 bg-stone-200 rounded-2xl mx-auto relative overflow-hidden" />
            <SkeletonBlock className="h-4 w-11/12 bg-stone-100 rounded-md mx-auto relative overflow-hidden" />
          </div>

          {/* Grid of 15 rounded cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
            {Array.from({ length: 15 }).map((_, idx) => (
              <div key={idx} className="bg-stone-50 border border-stone-200 rounded-3xl p-6 flex flex-col items-center justify-between min-h-[300px] relative overflow-hidden">
                <ShimmerEffect />
                <div className="w-16 h-16 rounded-full bg-stone-250 mb-4 relative overflow-hidden flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-stone-100 opacity-50" />
                </div>
                <div className="space-y-2.5 w-full text-center">
                  <SkeletonBlock className="h-5 w-3/4 bg-stone-200 rounded-lg mx-auto relative overflow-hidden" />
                  <SkeletonBlock className="h-3 w-1/2 bg-stone-100 rounded-md mx-auto relative overflow-hidden" />
                </div>
                <SkeletonBlock className="h-9 w-full bg-stone-200 rounded-xl mt-6 relative overflow-hidden" />
              </div>
            ))}
          </div>
        </div>
      );

    case "heritage":
      return (
        <div className="w-full bg-[#FAF9F5] pt-28 pb-20 px-6 sm:px-12 min-h-screen max-w-7xl mx-auto space-y-16 animate-pulse select-none font-jakarta">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <SkeletonBlock className="h-10 w-80 bg-stone-200 rounded-2xl mx-auto relative overflow-hidden" />
            <SkeletonBlock className="h-4 w-11/12 bg-stone-100 rounded-md mx-auto relative overflow-hidden" />
          </div>

          {/* Horizonal Carousel slider container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white border border-stone-200 rounded-3xl p-4 space-y-4 relative overflow-hidden">
                <ShimmerEffect />
                <div className="aspect-[4/3] rounded-2xl bg-stone-100 relative overflow-hidden" />
                <SkeletonBlock className="h-5 w-2/3 bg-stone-200 rounded-lg relative overflow-hidden" />
                <SkeletonBlock className="h-3.5 w-full bg-stone-100 rounded-md relative overflow-hidden" />
              </div>
            ))}
          </div>

          {/* Timeline separator header */}
          <div className="flex flex-col items-center space-y-3 pt-6">
            <SkeletonBlock className="h-6 w-40 bg-stone-200 rounded-lg relative overflow-hidden" />
            <div className="w-1.5 h-16 bg-stone-200" />
          </div>

          {/* Timeline Milestones vertical skeleton */}
          <div className="max-w-4xl mx-auto space-y-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col md:flex-row gap-6 md:gap-12 items-center">
                <div className="w-20 font-jakarta font-black text-2xl text-stone-300">Year</div>
                <div className="flex-1 bg-white border border-stone-200 rounded-2xl p-6 space-y-3 w-full relative overflow-hidden">
                  <ShimmerEffect />
                  <SkeletonBlock className="h-5 w-48 bg-stone-200 rounded-lg relative overflow-hidden" />
                  <SkeletonBlock className="h-3.5 w-11/12 bg-stone-100 rounded-md relative overflow-hidden" />
                  <SkeletonBlock className="h-3.5 w-5/6 bg-stone-100 rounded-md relative overflow-hidden" />
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    case "contact":
      return (
        <div className="w-full bg-[#FAF9F5] pt-28 pb-20 px-6 sm:px-12 min-h-screen max-w-6xl mx-auto space-y-12 animate-pulse select-none font-jakarta">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <SkeletonBlock className="h-10 w-60 bg-stone-200 rounded-2xl mx-auto relative overflow-hidden" />
            <SkeletonBlock className="h-4 w-96 bg-stone-100 rounded-md mx-auto relative overflow-hidden" />
          </div>

          {/* Two-Column split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left side details */}
            <div className="space-y-8">
              <SkeletonBlock className="h-6 w-48 bg-stone-200 rounded-lg relative overflow-hidden" />
              <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-2xl bg-stone-200 relative overflow-hidden" />
                    <div className="space-y-2">
                      <SkeletonBlock className="h-4 w-24 bg-stone-200 rounded-md relative overflow-hidden" />
                      <SkeletonBlock className="h-3.5 w-40 bg-stone-100 rounded-md relative overflow-hidden" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side contact form container card */}
            <div className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-8 space-y-6 relative overflow-hidden">
              <ShimmerEffect />
              <SkeletonBlock className="h-6 w-36 bg-stone-200 rounded-lg relative overflow-hidden" />
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="h-3 w-12 bg-stone-200/60 rounded" />
                    <SkeletonBlock className="h-10 w-full bg-stone-100 rounded-xl relative overflow-hidden" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 w-12 bg-stone-200/60 rounded" />
                    <SkeletonBlock className="h-10 w-full bg-stone-100 rounded-xl relative overflow-hidden" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-3 w-16 bg-stone-200/60 rounded" />
                  <SkeletonBlock className="h-10 w-full bg-stone-100 rounded-xl relative overflow-hidden" />
                </div>
                <div className="space-y-2">
                  <div className="h-3 w-16 bg-stone-200/60 rounded" />
                  <SkeletonBlock className="h-24 w-full bg-stone-100 rounded-xl relative overflow-hidden" />
                </div>
              </div>

              <SkeletonBlock className="h-12 w-full bg-stone-200 rounded-xl relative overflow-hidden" />
            </div>
          </div>
        </div>
      );

    case "about":
      return (
        <div className="w-full bg-[#FAF9F5] pt-28 pb-20 px-6 sm:px-12 min-h-screen max-w-5xl mx-auto space-y-12 animate-pulse select-none font-jakarta">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <SkeletonBlock className="h-10 w-72 bg-stone-200 rounded-2xl mx-auto relative overflow-hidden" />
            <SkeletonBlock className="h-4 w-96 bg-stone-100 rounded-md mx-auto relative overflow-hidden" />
          </div>

          {/* Large layout Banner image skeleton */}
          <div className="aspect-[21/9] rounded-3xl bg-stone-100 relative overflow-hidden">
            <ShimmerEffect />
          </div>

          {/* Two block paragraphs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="space-y-4">
              <SkeletonBlock className="h-5 w-40 bg-stone-200 rounded-lg relative overflow-hidden" />
              <div className="space-y-2.5">
                <SkeletonBlock className="h-4 w-full bg-stone-100 rounded-md relative overflow-hidden" />
                <SkeletonBlock className="h-4 w-full bg-stone-100 rounded-md relative overflow-hidden" />
                <SkeletonBlock className="h-4 w-11/12 bg-stone-100 rounded-md relative overflow-hidden" />
              </div>
            </div>
            <div className="space-y-4">
              <SkeletonBlock className="h-5 w-40 bg-stone-200 rounded-lg relative overflow-hidden" />
              <div className="space-y-2.5">
                <SkeletonBlock className="h-4 w-full bg-stone-100 rounded-md relative overflow-hidden" />
                <SkeletonBlock className="h-4 w-full bg-stone-100 rounded-md relative overflow-hidden" />
                <SkeletonBlock className="h-4 w-5/6 bg-stone-100 rounded-md relative overflow-hidden" />
              </div>
            </div>
          </div>
        </div>
      );

    default: // home view or generic fallback
      return (
        <div className="w-full bg-white pt-24 pb-20 px-6 sm:px-12 min-h-screen max-w-6xl mx-auto space-y-12 animate-pulse select-none font-jakarta">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <SkeletonBlock className="h-12 w-64 bg-stone-200 rounded-2xl mx-auto relative overflow-hidden" />
            <SkeletonBlock className="h-4 w-full bg-stone-100 rounded-md relative overflow-hidden" />
          </div>
          <div className="aspect-[16/9] rounded-3xl bg-stone-100 relative overflow-hidden">
            <ShimmerEffect />
          </div>
        </div>
      );
  }
}
