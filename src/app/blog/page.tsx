import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/client";
import { postsQuery } from "@/sanity/queries";
import { urlFor } from "@/sanity/image";

export const revalidate = 60;
import Navbar from "@/components/navbar";
import { IconArrowRight } from "@/components/icons";

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  author?: string;
  publishedAt?: string;
  excerpt?: string;
  mainImage?: { asset: { _ref: string }; alt?: string };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPage() {
  const posts: Post[] = await client.fetch(postsQuery);

  return (
    <div style={{ background: "var(--bone)" }}>
      <Navbar />
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10 py-20">
        {/* Header */}
        <div className="mb-14">
          <div className="eyebrow flex items-center gap-2 mb-3">
            <span style={{ width: 14, height: 1, background: "#6B695F" }} />
            Gigvane Blog
          </div>
          <h1
            className="text-[48px] sm:text-[64px] font-semibold tk-tightest leading-[1.0]"
          >
            Thinking out loud<br />
            <span
              className="italic font-normal"
              style={{ fontFamily: "var(--font-instrument-serif), serif" }}
            >
              on the future of work.
            </span>
          </h1>
        </div>

        {posts.length === 0 ? (
          <div
            className="rounded-2xl p-12 text-center"
            style={{ background: "var(--paper)", border: "1px solid var(--hair)" }}
          >
            <div className="eyebrow mb-3">No posts yet</div>
            <p className="text-[17px] tk-tight" style={{ color: "#3a3a3c" }}>
              Head to{" "}
              <Link href="/studio" className="underline hover:opacity-70">
                /studio
              </Link>{" "}
              to publish your first post.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug.current}`}
                className="group block card-bone overflow-hidden hover:shadow-lg transition-shadow duration-200"
                style={{ borderRadius: 16 }}
              >
                {post.mainImage?.asset && (
                  <div className="relative w-full" style={{ aspectRatio: "16/9", background: "var(--bonesoft)" }}>
                    <Image
                      src={urlFor(post.mainImage).width(640).height(360).url()}
                      alt={post.mainImage.alt ?? post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col gap-3">
                  {post.publishedAt && (
                    <div className="eyebrow">{formatDate(post.publishedAt)}</div>
                  )}
                  <h2 className="text-[20px] font-semibold tk-tighter leading-[1.2] group-hover:opacity-80 transition-opacity">
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p className="text-[14px] leading-[1.55] tk-tight line-clamp-3" style={{ color: "#56544c" }}>
                      {post.excerpt}
                    </p>
                  )}
                  <div className="mt-1 flex items-center justify-between">
                    {post.author && (
                      <span className="font-mono text-[11px]" style={{ color: "#9c9a90" }}>
                        {post.author}
                      </span>
                    )}
                    <span
                      className="inline-flex items-center gap-1 font-mono text-[11px] group-hover:gap-2 transition-all"
                      style={{ color: "#6B695F" }}
                    >
                      Read <IconArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
