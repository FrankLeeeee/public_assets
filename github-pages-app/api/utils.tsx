import fs from "fs";
import { join } from "path";

const publicDirectory = join(process.cwd(), "public");

export default function listFiles(name: string) {
  const files = fs.readdirSync(join(publicDirectory, name));
  return files;
}
