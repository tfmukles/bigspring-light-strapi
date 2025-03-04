import shortcodes from "@/shortcodes/all";
import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

const renderers = {
  button: shortcodes.Button,
  notice: shortcodes.Notice,
  youtube: shortcodes.Youtube,
  tabs: shortcodes.Tabs,
  tab: shortcodes.Tab,
  video: shortcodes.Video,
  accordion: shortcodes.Accordion,
};

const MarkdownRenderer = ({
  content,
  className,
}: {
  content: string;
  className?: string;
}) => {
  return (
    <div className={`content ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        // @ts-ignore
        components={renderers}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
