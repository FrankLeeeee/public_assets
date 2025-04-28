import fs from "fs";
import { join } from "path";

const publicDirectory = join(process.cwd(), "public");

export const listBlogFolders = () => {
  const files = fs.readdirSync(join(publicDirectory, "blog_media"));
  return files.filter((file) =>
    fs.statSync(join(publicDirectory, "blog_media", file)).isDirectory()
  );
};

export function listBlogMedia(name: string) {
  const files = fs.readdirSync(join(publicDirectory, "blog_media", name));
  return files;
}
