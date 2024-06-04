"use client";
import Link from "next/link";
import React from "react";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const PostPreview = (props) => {
  const { post, idx } = props;
  let [hoveredIndex, setHoveredIndex] = useState();

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 px-8 py-10"
      )}
    >
      <Link
        href={`/post/${post.slug}`}
        onMouseEnter={() => setHoveredIndex(idx)}
        onMouseLeave={() => setHoveredIndex(null)}
        className="relative group  block p-2 h-[28rem] w-96"
      >
        <AnimatePresence>
          {hoveredIndex === idx && (
            <motion.span
              className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
              layoutId="hoverBackground"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.15 },
              }}
              exit={{
                opacity: 0,
                transition: { duration: 0.15, delay: 0.2 },
              }}
            />
          )}
        </AnimatePresence>
        <div
          className={cn(
            "rounded-2xl h-full w-full overflow-hidden bg-zinc-800 border border-transparent group-hover:border-slate-700 relative z-20"
          )}
        >
          <div className="relative z-50">
            <Image
              className="rounded-t-2xl w-full h-56"
              src={post.image}
              alt={post.title}
              width={500}
              height={200}
            />
            <small className="ml-4 mt-5 md:border-l md:border-zinc-700 md:pl-4  text-zinc-500 block">
              {post.date}
            </small>
            <h4 className={cn("text-zinc-100 font-bold tracking-wide p-4")}>
              {post.title}
            </h4>
            <p
              className={cn(
                " text-zinc-400 tracking-wide leading-relaxed text-sm px-4"
              )}
            >
              {post.subtitle}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PostPreview;
