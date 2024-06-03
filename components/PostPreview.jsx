"use client";
import Link from "next/link";
import React from "react";
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const PostPreview = (props) => {
  const { post } = props;

  return (
    <div
      className={cn("grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10")}
    >
      <Link
        href={`/post/${post.slug}`}
        className="relative group  block p-2 h-full w-full"
      >
        <div className="rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20">
          <div className="relative z-50">
            <div className="p-4">
              <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4")}>
                {post.title}
              </h4>
              <p
                className={cn(
                  "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm"
                )}
              >
                {post.subtitle}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PostPreview;
