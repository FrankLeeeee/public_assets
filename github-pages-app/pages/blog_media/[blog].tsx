import Link from "next/link";
import { listBlogFolders, listBlogMedia } from "../../api/utils";

export const getStaticPaths = async () => {
  const folders = listBlogFolders();
  return {
    paths: folders.map((folder) => ({ params: { blog: folder } })),
    fallback: false,
  };
};

export const getStaticProps = ({ params }: { params: { blog: string } }) => {
  const files = listBlogMedia(params.blog);
  return { props: { files: files, blog: params.blog } };
};

export default function BlogMedia({
  files = [],
  blog,
}: {
  files: string[];
  blog: string;
}) {
  return (
    <>
      <h2>Blog Media</h2>
      <div>
        <ul>
          {files.map((file) => (
            <li key={file}>
              <Link href={`/blog_media/${blog}/${file}`}>{file}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
