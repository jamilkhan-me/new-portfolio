import React from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Code = ({ children, language }) => {
  return (
    <div>
      <SyntaxHighlighter language="javascript" style={materialDark}>
        {children})
      </SyntaxHighlighter>
    </div>
  );
};

export default Code;
