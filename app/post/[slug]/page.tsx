import Markdown from "markdown-to-jsx";
import getPostMetadata from "@/utils/getPostMetadata";
import React from "react";
import fs from "fs";
import matter from "gray-matter";

function getPostContent(slug: any) {
  const folder = "posts/";
  const file = folder + `${slug}.mdx`;
  const content = fs.readFileSync(file, "utf-8");

  const matterResult = matter(content);
  return matterResult;
}

export const generateStaticParams = async () => {
  const posts = getPostMetadata("posts");

  return posts.map((post) => ({ slug: post.slug }));
};

export async function generateMetadata({ params, searchParams }) {
  const id = params?.slug ? " ⋅ " + params?.slug : "";
  return {
    title: `Jamil Khan ${id.replaceAll("_", "")}`,
  };
}

export default function BlogPage(props) {
  const slug = props.params.slug;
  const post = getPostContent(slug);

  return (
    <main className="max-w-7xl mx-auto mt-48 mb-20 px-8">
      <article className="prose text-white-100">
        <Markdown>{post.content}</Markdown>
      </article>
    </main>
  );
}
