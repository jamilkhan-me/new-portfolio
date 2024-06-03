import React from "react";

const MdxArticle = ({ children }) => {
  return (
    <div>
      <article className="prose lg:prose-xl">{children}</article>
    </div>
  );
};

export default MdxArticle;
