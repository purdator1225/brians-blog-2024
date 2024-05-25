import Image from "next/image";
import fs from "fs";
import Link from "next/link";

import getPostMetadata from "./components/getPostMetadata";
import PostPreview from "./components/PostPreview";

export default function Home() {
  const postMetaData = getPostMetadata();

  return (
    <main>
      <div className="bg-teal-500">
        {postMetaData.map((post) => (
          <PostPreview key={post.slug} {...post}></PostPreview>
        ))}
      </div>
    </main>
  );
}
