import Markdown from "markdown-to-jsx";
import getPostMetadata from "@/utils/getPostMetadata";
import React from "react";
import fs from "fs";
import matter from "gray-matter";
import Code from "@/components/Code";
import Image from "next/image";

function getPostContent(slug: any) {
  const folder = "posts/";
  const file = folder + `${slug}.mdx`;
  const content = fs.readFileSync(file, "utf-8");

  const matterResult = matter(content);
  return matterResult;
}

// export const generateStaticParams = async () => {
//   const posts = getPostMetadata("posts");

//   return posts.map((post) => ({ slug: post.slug }));
// };

// export async function generateMetadata({ params, searchParams }) {
//   const id = params?.slug ? " ⋅ " + params?.slug : "";
//   return {
//     title: `Jamil Khan ${id.replaceAll("_", "")}`,
//   };
// }

export default async function BlogPage(props) {
  const slug = props.params.slug;
  const post = getPostContent(slug);

  return (
    <main className="max-w-5xl mx-auto mt-48 mb-20 px-8 ">
      <div>
        <h1 className="text-3xl font-semibold">{post.data.title}</h1>
        <p className="text-sm font-thin py-3">
          Published in
          <span> {post.data.date} </span>
        </p>
        <Image
          className="h-80 my-8"
          src={post.data.image}
          alt={post.data.title}
          width={500}
          height={500}
        />
      </div>
      <div className="prose dark:prose-invert">
        <Markdown
          options={{
            overrides: {
              code: {
                component: Code,
              },
            },
          }}
        >
          {post.content}
        </Markdown>
      </div>
    </main>
  );
}
