import Link from "next/link";
import listFiles from "../../api/utils";

export const getStaticProps = () => {
  const files = listFiles("blog_media");
  return { props: { files } };
};

export default function BlogMedia({ files = [] }: { files: string[] }) {
  return (
    <>
      <h2>Blog Media</h2>
      <div>
        <ul>
          {files.map((file) => (
            <li key={file}>
              <Link href={`/blog_media/${file}`}>{file}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
