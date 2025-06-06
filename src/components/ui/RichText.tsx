"use client";

import { RichTextType, RootNodeType } from "@/types/richText";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

import Link from "next/link";

const RichText = ({ content }: RichTextType) => {
  return (
    <div className="  text-base xl:text-2xl font-normal leading-5 xl:leading-7.53">
      <BlocksRenderer
        content={content}
        blocks={{
          heading: ({ children }) => (
            <h1 className="text-2xl lg:text-3xl font-medium">{children}</h1>
          ),

          paragraph: ({ children }) => {
            return (
              <p className="text-lg lg:text-2.1xl text-secondary font-extralight leading-7.5 tracking-1.5">
                {children}
              </p>
            );
          },

          list: ({ children }) => (
            <ul className={`ml-6 text-left text-primary `}>{children}</ul>
          ),

          "list-item": ({ children }) => <li className="my-2">{children}</li>,

          link: ({ children }: RootNodeType) => (
            <div className="flex flex-col gap-10">
              <Link
                key={children.props.id}
                href={children.props.url}
                className="text-blue-600 underline hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                {children.props.text}
              </Link>
            </div>
          ),
        }}
      />
    </div>
  );
};

export default RichText;
