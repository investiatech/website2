import type { BlogPost } from "./blog-data"

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const res = await fetch(`/api/post/${slug}`, {
    cache: "no-store",
  })

  if (res.status === 404) {
    return null
  }

  if (!res.ok) {
    console.error(
      "Failed to fetch blog post",
      res.status,
      await res.text().catch(() => "")
    )
    throw new Error("Failed to fetch blog post")
  }

  return res.json()
}
