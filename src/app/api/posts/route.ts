import { type NextRequest, NextResponse } from "next/server";
import { writeClient } from "@/sanity/write-client";

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export async function POST(request: NextRequest) {
  // Authenticate via shared secret header
  const secret = request.headers.get("x-webhook-secret");
  if (!process.env.N8N_WEBHOOK_SECRET || secret !== process.env.N8N_WEBHOOK_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!process.env.SANITY_API_TOKEN) {
    return NextResponse.json({ error: "Sanity write token not configured" }, { status: 500 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { title, slug, author, publishedAt, excerpt, body: postBody } = body as {
    title?: string;
    slug?: string;
    author?: string;
    publishedAt?: string;
    excerpt?: string;
    body?: unknown[];
  };

  if (!title) {
    return NextResponse.json({ error: "title is required" }, { status: 400 });
  }

  const resolvedSlug = typeof slug === "string" && slug ? slug : slugify(title as string);

  try {
    const doc = await writeClient.create({
      _type: "post",
      title,
      slug: { _type: "slug", current: resolvedSlug },
      author: author ?? null,
      publishedAt: publishedAt ?? new Date().toISOString(),
      excerpt: excerpt ?? null,
      body: postBody ?? [],
    });

    return NextResponse.json(
      { success: true, id: doc._id, slug: resolvedSlug },
      { status: 201 }
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
