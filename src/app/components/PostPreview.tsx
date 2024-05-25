import React from "react";
import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

function PostPreview(props: PostMetadata) {
  return (
    <div>
      <Link href={`/posts/${props.slug}`}>
        <h2 className="text-xl py-5">{props.title}</h2>
        <p>{props.subtitle}</p>
        <p>{props.date}</p>
      </Link>
    </div>
  );
}

export default PostPreview;
