"use client";
import Link from "next/link";
import React from "react";
import { cn } from "@/utils/cn";
import Image from "next/image";

const PostPreview = (props) => {
  const { post } = props;

  return (
    <div className="w-full h-[70vh] overflow-hidden">
      <Link
        href={`/post/${post.slug}`}
        className="relative group p-2  block h-full w-full"
      >
        <div className="rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20">
          <div className="relative z-50">
            <div className="p-2">
              <Image
                className="rounded-2xl w-full h-60"
                src={post.image}
                alt={post.title}
                width={500}
                height={300}
              />
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
