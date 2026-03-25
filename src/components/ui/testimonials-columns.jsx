"use client";
import React from "react";
import { motion } from "framer-motion";

export const TestimonialsColumn = ({ className, testimonials, duration = 10 }) => {
  return (
    <div className={className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-5 pb-5"
      >
        {[...new Array(2).fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map(({ text, image, name, role }, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl border border-[#d7c2be]/60 bg-white shadow-[0_4px_24px_rgba(137,78,70,0.08)] max-w-xs w-full"
              >
                {/* Stars */}
                <div className="flex gap-[3px] mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} style={{ color: "#745a27", fontSize: "0.75rem" }}>★</span>
                  ))}
                </div>

                {/* Quote */}
                <p className="font-serif-editorial italic text-[#1c1b1a] leading-[1.65] text-[0.97rem]">
                  "{text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 mt-5 pt-5 border-t border-[#d7c2be]/40">
                  <img
                    width={40}
                    height={40}
                    src={image}
                    alt={name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <span className="font-sans-ui font-medium text-[0.85rem] text-[#1c1b1a] leading-5">{name}</span>
                    <span className="font-sans-ui font-light text-[0.72rem] text-[#705953] leading-5 tracking-wide">{role}</span>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))]}
      </motion.div>
    </div>
  );
};