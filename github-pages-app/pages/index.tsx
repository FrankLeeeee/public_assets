import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h2>Hello, this is a collection of public assets for Shenggui Li.</h2>

      <div>
        <ul>
          <li>
            <Link href="/blog_media">Blog Media</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
