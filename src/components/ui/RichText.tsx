/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { BlocksRenderer } from "@strapi/blocks-react-renderer";

import Link from "next/link";

type RichTextProps = {
  content: any;
};
const RichText = ({ content }: RichTextProps) => {
  return (
    <div className="  text-base xl:text-2xl font-normal leading-5 xl:leading-7.53">
      <BlocksRenderer
        content={content}
        blocks={{
          heading: ({ children }: any) => (
            <h1 className={`font-bold text-center text-black`}>{children}</h1>
          ),

          paragraph: ({ children }: any) => {
            return (
              <p
                className={`${
                  content[0].variant === "header"
                    ? `font-normal text-sm xl:text-lg pb-3`
                    : "pb-4"
                }`}
              >
                {children}
              </p>
            );
          },

          list: ({ children }: any) => (
            <ul className={`ml-6 text-left text-primary `}>{children}</ul>
          ),

          "list-item": ({ children }: any) => (
            <li className="my-2">{children}</li>
          ),

          link: ({ children }: any) => (
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
