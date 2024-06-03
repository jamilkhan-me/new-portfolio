import nextMDX from "@next/mdx";
import remarkGfm from "remark-gfm";

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
  },
});

const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  // experimental: {
  //   appdir: true,
  //   mdxRs: true,
  // },
  // image: {
  //   domains: ["github.com"],
  // },
};

export default withMDX(nextConfig);
