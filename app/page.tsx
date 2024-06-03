import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import BlogCard from "@/components/BlogCard";
import BookNote from "@/components/BookNote";
import getPostMetadata from "@/components/getPostMetadata";
import PostPreview from "@/components/PostPreview";
import Image from "next/image";

export default async function Home() {
  const allPosts = await getPostMetadata();
  return (
    <main className="relative  bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
        <Grid />
        <RecentProjects />
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10">
          {allPosts.map((post, idx) => {
            return <PostPreview key={idx} post={post} />;
          })}
        </div>
        <BlogCard />
        <BookNote />
      </div>
    </main>
  );
}
