import fs from "fs";
import matter from "gray-matter";

export default function getPostMetadata(basePath) {
  const folder = basePath + "/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".mdx"));

  //get the file data
  const posts = markdownPosts.map((filename) => {
    const fileContents = fs.readFileSync(`${basePath}/${filename}`, "utf-8");
    const matterResult = matter(fileContents);

    return {
      title: matterResult.data.title,
      subtitle: matterResult.data.subtitle,
      date: matterResult.data.date,
      slug: filename.replace(".mdx", ""),
      image: matterResult.data.image,
    };
  });
  return posts;
}
