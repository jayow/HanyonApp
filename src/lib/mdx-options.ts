import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import type { SerializeOptions } from "next-mdx-remote-client/serialize";

export const mdxOptions: SerializeOptions["mdxOptions"] = {
  remarkPlugins: [remarkGfm],
  rehypePlugins: [
    rehypeSlug,
    [
      rehypePrettyCode,
      {
        theme: "github-light",
        keepBackground: false,
      },
    ],
    [
      rehypeAutolinkHeadings,
      {
        behavior: "wrap",
        properties: {
          className: ["anchor"],
        },
      },
    ],
  ],
};
