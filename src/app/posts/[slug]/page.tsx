import React from "react";
import fs from "fs";
import Markdown from "markdown-to-jsx";
import getPostMetadata from "@/app/components/getPostMetadata";

import matter from "gray-matter";

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);

  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = await getPostMetadata();

  return posts.map((post) => ({
    slug: post.slug,
  }));
};

function PostPage(props: any) {
  const slug = props.params.slug;
  const post = getPostContent(slug);

  return (
    <div className="mx-auto max-w-lg my-8">
      <h1 className="text-2xl text-center text- slate-600">
        {post.data.title}
      </h1>
      <article className="prose lg:prose-xl">
        <Markdown>{post.content}</Markdown>
      </article>
      ;
    </div>
  );
}

export default PostPage;
