import PostPreview from "@/components/PostPreview";
import getPostMetadata from "@/utils/getPostMetadata";
import React from "react";

const PostPage = () => {
  const postMetaData = getPostMetadata("posts");

  return (
    <main className="max-w-7xl mx-auto mt-48 mb-20 px-8">
      <h1 className="heading">I&apos;ve been building a lot of things</h1>
      <h1 className="text-lg font-light py-10 lg:px-32 flex items-center justify-center">
        Come explore the fruits of my labor, from small experiments to
        full-blown web applications, each project showcases my love for coding
        and design.
      </h1>
      <hr />
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10">
        {postMetaData.map((post, idx) => {
          return <PostPreview key={idx} post={post} />;
        })}
      </div>
    </main>
  );
};

export default PostPage;
