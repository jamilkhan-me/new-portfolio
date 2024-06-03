import BookNote from "@/components/BookNote";
import React from "react";
import getPostMetadata from "@/utils/getPostMetadata";
import PostPreview from "@/components/PostPreview";

const page = () => {
  const postMetaData = getPostMetadata("posts");
  return (
    <div>
      <BookNote />
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10">
        {postMetaData.map((post, idx) => {
          return <PostPreview key={idx} post={post} />;
        })}
      </div>
    </div>
  );
};

export default page;
