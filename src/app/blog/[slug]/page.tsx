import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PortableText, type PortableTextBlock } from "@portabletext/react";
import { client } from "@/sanity/client";
import { postBySlugQuery, postSlugsQuery } from "@/sanity/queries";
import { urlFor } from "@/sanity/image";
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
  body?: PortableTextBlock[];
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export async function generateStaticParams() {
  const slugs: { slug: string }[] = await client.fetch(postSlugsQuery);
  return slugs.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post: Post | null = await client.fetch(postBySlugQuery, { slug });
  if (!post) return {};
  return {
    title: `${post.title} — Gigvane Blog`,
    description: post.excerpt,
  };
}

const portableTextComponents = {
  block: {
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="text-[17px] leading-[1.7] tk-tight mb-5" style={{ color: "#2a2a2c" }}>
        {children}
      </p>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="text-[28px] font-semibold tk-tighter leading-[1.2] mt-10 mb-4">{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="text-[22px] font-semibold tk-tighter leading-[1.25] mt-8 mb-3">{children}</h3>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote
        className="pl-5 my-6 text-[18px] italic leading-[1.6] tk-tight"
        style={{
          borderLeft: "2px solid #CFF24E",
          color: "#56544c",
          fontFamily: "var(--font-instrument-serif), serif",
        }}
      >
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="mb-5 flex flex-col gap-2 pl-1">{children}</ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol className="mb-5 flex flex-col gap-2 pl-1 list-decimal list-inside">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <li className="flex items-start gap-2.5 text-[16px] leading-[1.6]" style={{ color: "#2a2a2c" }}>
        <span
          className="mt-2 shrink-0"
          style={{ width: 5, height: 5, borderRadius: 9999, background: "#CFF24E", flexShrink: 0 }}
        />
        <span>{children}</span>
      </li>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <li className="text-[16px] leading-[1.6]" style={{ color: "#2a2a2c" }}>{children}</li>
    ),
  },
  marks: {
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong className="font-semibold">{children}</strong>
    ),
    em: ({ children }: { children?: React.ReactNode }) => (
      <em style={{ fontFamily: "var(--font-instrument-serif), serif" }}>{children}</em>
    ),
    code: ({ children }: { children?: React.ReactNode }) => (
      <code
        className="font-mono text-[14px] px-1.5 py-0.5 rounded"
        style={{ background: "rgba(14,14,16,.06)", color: "#0E0E10" }}
      >
        {children}
      </code>
    ),
    link: ({ children, value }: { children?: React.ReactNode; value?: { href: string } }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:opacity-70 transition-opacity"
        style={{ color: "#0E0E10" }}
      >
        {children}
      </a>
    ),
  },
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post: Post | null = await client.fetch(postBySlugQuery, { slug });

  if (!post) notFound();

  return (
    <div style={{ background: "var(--bone)" }}>
      <Navbar />
      <article className="max-w-[1240px] mx-auto px-6 lg:px-10 py-16">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 font-mono text-[11px] hover:opacity-70 transition-opacity mb-10"
          style={{ color: "#6B695F", letterSpacing: ".04em" }}
        >
          <span style={{ transform: "rotate(180deg)", display: "inline-flex" }}>
            <IconArrowRight size={12} />
          </span>
          BACK TO BLOG
        </Link>

        {/* Header */}
        <div className="max-w-[760px]">
          <div className="flex items-center gap-3 mb-4">
            {post.publishedAt && (
              <span className="eyebrow">{formatDate(post.publishedAt)}</span>
            )}
            {post.author && (
              <>
                <span style={{ color: "var(--hairmid)" }}>·</span>
                <span className="font-mono text-[11px]" style={{ color: "#9c9a90" }}>
                  {post.author}
                </span>
              </>
            )}
          </div>
          <h1
            className="text-[40px] sm:text-[56px] font-semibold tk-tightest leading-[1.05] mb-5"
          >
            {post.title}
          </h1>
          {post.excerpt && (
            <p
              className="text-[19px] leading-[1.55] tk-tight mb-8"
              style={{ color: "#56544c" }}
            >
              {post.excerpt}
            </p>
          )}
        </div>

        {/* Main image */}
        {post.mainImage?.asset && (
          <div
            className="relative w-full rounded-2xl overflow-hidden mb-12"
            style={{ aspectRatio: "16/7", background: "var(--bonesoft)" }}
          >
            <Image
              src={urlFor(post.mainImage).width(1240).height(543).url()}
              alt={post.mainImage.alt ?? post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1280px) 100vw, 1240px"
            />
          </div>
        )}

        {/* Body */}
        {post.body && (
          <div className="max-w-[680px]">
            <PortableText value={post.body} components={portableTextComponents} />
          </div>
        )}

        {/* Bottom rule + nav */}
        <div className="mt-16 pt-8" style={{ borderTop: "1px solid var(--hair)" }}>
          <Link
            href="/blog"
            className="btn-ink gap-1.5"
          >
            More posts <IconArrowRight size={14} />
          </Link>
        </div>
      </article>
    </div>
  );
}
