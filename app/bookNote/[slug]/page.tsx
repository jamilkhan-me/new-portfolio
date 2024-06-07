import React from "react";
import fs from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";

function getBookNoteContent(slug: any) {
  const folder = "bookNotes/";
  const file = folder + `${slug}.mdx`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);

  return matterResult;
}

const BookNoteDetails = (props) => {
  const slug = props.params.slug;
  const book = getBookNoteContent(slug);
  console.log(book);
  return (
    <main className="max-w-5xl mx-auto mt-48 mb-20 px-8 ">
      <div className="prose dark:prose-invert">
        <Markdown>{book.content}</Markdown>
      </div>
    </main>
  );
};

export default BookNoteDetails;
