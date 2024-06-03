"use client";
import React from "react";
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ReactNode, useState } from "react";

const BlogCard = (props: any) => {
  const { post, idx } = props;
  console.log(post);
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <div className="max-w-7xl mx-auto mt-32 mb-20 px-8">
      <h1 className="heading">
        A glimpse of
        <span className="text-purple"> recent writing</span>
      </h1>
      <div
        className={cn(
          "grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 px-10 md:px-0 py-10"
        )}
      >
        {projects.map((item, idx) => (
          <Link
            href={item?.link}
            key={item?.link}
            className="relative group  block p-2 h-[28rem] w-80"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
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
            <Card>
              <img className="rounded-t-2xl w-full h-52" src={item.image}></img>
              <CardDate>{item.date}</CardDate>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </Card>
          </Link>
        ))}
        {/* <Link
          href={post.title}
          key={post.title}
          className="relative group  block p-2 h-[28rem] w-80"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
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
          <Card>
            <img className="rounded-t-2xl w-full h-52" src={post.image}></img>
            <CardDate>{post.date}</CardDate>
            <CardTitle>{post.title}</CardTitle>
            <CardDescription>{post.description}</CardDescription>
          </Card>
        </Link> */}
      </div>
    </div>
  );
};

export default BlogCard;

export const CardDate = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <small className="ml-4 mt-5 md:border-l md:border-zinc-700 md:pl-4  text-zinc-500 block">
      {children}
    </small>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent group-hover:border-zinc-700 relative z-20",
        "rounded-2xl h-full w-full overflow-hidden bg-zinc-800 border border-transparent group-hover:border-zinc-700 relative z-50",
        className
      )}
    >
      <div className="relative z-50">
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide p-4", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p className={cn(" text-zinc-400 p-4 text-md", className)}>{children}</p>
  );
};

export const projects = [
  {
    title: "Writing Clean Code With React",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
    image: "/logo/bootstrap.png",
    date: "November 28, 2022",
  },
  {
    title: "How to win clients",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
    image: "/logo/css.png",
    date: "November 28, 2022",
  },
  {
    title: "Tailwindcss tips and tricks to conquer the world",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
    image: "/logo/firebase.png",
    date: "November 28, 2022",
  },
  {
    title: "Tailwindcss tips and tricks to conquer the world",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
    image: "/logo/gatsby.png",
    date: "November 28, 2022",
  },
  {
    title: "Tailwindcss tips and tricks to conquer the world",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
    image: "/logo/html.png",
    date: "November 28, 2022",
  },
  {
    title: "Tailwindcss tips and tricks to conquer the world",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software",
    link: "https://microsoft.com",
    image: "/logo/mongodb.png",
    date: "November 28, 2022",
  },
];
