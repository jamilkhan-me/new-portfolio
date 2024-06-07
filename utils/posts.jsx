import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";

export function loadPost(slug) {
  const fileName = slug.endsWith(".mdx") ? slug : `${slug}.mdx`;

  return fs.readFileSync(path.join(process.cwd(), "posts", fileName));
}

export async function getPost(slug) {
  const source = loadPost(slug);

  return await compileMDX({
    source,
    options: {
      parseFrontmatter: true,
    },
  });
}

export async function getPosts({
  newest = true,
  page = 1,
  limit = 3,
  tags,
} = {}) {
  const files = fs.readdirSync(path.join(process.cwd(), "posts"));
  const posts = await Promise.all(
    files.map(async (fileName) => {
      const { frontmatter } = await getPost(fileName);

      return {
        frontmatter,
        slug: fileName.replace(".mdx", ""),
      };
    })
  );

  //filter post with tag
  let filteredPost = posts;

  if (tags) {
    filteredPost = filteredPost.filter((post) =>
      post.frontmatter.tags.some((tag) => tags.includes(tag))
    );
  }

  //sort post with data
  if (newest) {
    //sort with newest
    filteredPost.sort((a, b) => {
      const dateA = new Date(a.frontmatter.date);
      const dateB = new Date(b.frontmatter.date);

      return dateB - dateA;
    });
  }
  //sort with oldest
  else {
    filteredPost.sort((a, b) => {
      const dateA = new Date(a.frontmatter.date);
      const dateB = new Date(b.frontmatter.date);

      return dateA - dateB;
    });
  }

  //pagination
  const startIndex = (page - 1) * limit; //0
  const endIndex = page * limit; // 10
  return {
    posts: filteredPost.slice(startIndex, endIndex),
    pageCount: Math.ceil(filteredPost.length / limit),
  };
}
