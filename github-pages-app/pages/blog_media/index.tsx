import Link from "next/link";
import { listBlogFolders } from "../../api/utils";

export const getStaticProps = () => {
  const folders = listBlogFolders();
  return { props: { folders } };
};

export default function BlogFolders({ folders = [] }: { folders: string[] }) {
  return (
    <>
      <h2>Blog Media</h2>
      <div>
        <ul>
          {folders.map((folder) => (
            <li key={folder}>
              <Link href={`/blog_media/${folder}`}>{folder}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
