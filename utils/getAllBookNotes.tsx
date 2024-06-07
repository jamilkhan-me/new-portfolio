import fs from "fs";
import matter from "gray-matter";
import { PostMetadata } from "../components/PostMetadata";

const getAllBookNotes = (): PostMetadata[] => {
  const folder = "bookNotes/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".mdx"));

  // Get gray-matter data from each file.
  const bookNotes = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`bookNotes/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace(".mdx", ""),
      image: matterResult.data.image,
    };
  });

  return bookNotes;
};

export default getAllBookNotes;
