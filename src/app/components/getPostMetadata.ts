//function to get posts

import { PostMetadata } from "./PostMetadata";
import fs from "fs";
import Link from "next/link";
import matter from "gray-matter";

const getPostMetadata = (): PostMetadata[] => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markDownPosts = files.filter((file) => file.endsWith(".md"));

  const posts = markDownPosts.map((file) => {
    const fileContents = fs.readFileSync(`${folder}/${file}`, "utf8");

    const matterResult = matter(fileContents);

    return {
      title: matterResult.data.title,
      subtitle: matterResult.data.subtitle,
      date: matterResult.data.date,
      slug: file.replace(".md", ""),
    };
  });

  return posts;
};

export default getPostMetadata;
