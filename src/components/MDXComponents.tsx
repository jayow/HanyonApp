import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h1: (props) => (
    <h1
      className="text-3xl font-bold mt-12 mb-4 tracking-tight"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="text-2xl font-semibold mt-10 mb-3 tracking-tight"
      {...props}
    />
  ),
  h3: (props) => (
    <h3 className="text-xl font-semibold mt-8 mb-2" {...props} />
  ),
  p: (props) => (
    <p className="text-lg leading-relaxed mb-6 text-neutral-800" {...props} />
  ),
  a: (props) => (
    <a
      className="text-neutral-900 underline underline-offset-4 decoration-neutral-400 hover:decoration-neutral-900 transition-colors"
      target={props.href?.startsWith("http") ? "_blank" : undefined}
      rel={
        props.href?.startsWith("http") ? "noopener noreferrer" : undefined
      }
      {...props}
    />
  ),
  ul: (props) => (
    <ul className="list-disc pl-6 mb-6 space-y-2 text-lg" {...props} />
  ),
  ol: (props) => (
    <ol className="list-decimal pl-6 mb-6 space-y-2 text-lg" {...props} />
  ),
  li: (props) => (
    <li className="leading-relaxed text-neutral-800" {...props} />
  ),
  blockquote: (props) => (
    <blockquote
      className="border-l-2 border-neutral-300 pl-6 italic text-neutral-600 my-6"
      {...props}
    />
  ),
  table: (props) => (
    <div className="overflow-x-auto my-8">
      <table className="min-w-full border-collapse text-sm" {...props} />
    </div>
  ),
  th: (props) => (
    <th
      className="border-b-2 border-neutral-200 px-4 py-3 text-left font-semibold text-neutral-900"
      {...props}
    />
  ),
  td: (props) => (
    <td
      className="border-b border-neutral-100 px-4 py-3 text-neutral-700"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="rounded-lg border border-neutral-200 p-4 overflow-x-auto my-6 text-sm bg-neutral-50"
      {...props}
    />
  ),
  code: (props) => {
    const isInline = typeof props.children === "string";
    if (isInline) {
      return (
        <code
          className="bg-neutral-100 px-1.5 py-0.5 rounded text-sm font-mono"
          {...props}
        />
      );
    }
    return <code {...props} />;
  },
  hr: () => <hr className="my-12 border-neutral-200" />,
  img: (props) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className="rounded-lg my-8 max-w-full" alt="" {...props} />
  ),
};
