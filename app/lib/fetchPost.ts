import type { BlogPost } from "./blog-data"

export async function fetchPosts(signal?: AbortSignal): Promise<BlogPost[]> {
    const response = await fetch("https://investia.tech:8890/post/all", {
        method: "GET",
        headers: { Accept: "application/json" },
        signal,
    })

    if (!response.ok) {
        const text = await response.text().catch(() => "")
        throw new Error(
            text || `Failed to fetch blog posts (status: ${response.status})`,
        )
    }

    const data = await response.json()
    return data as BlogPost[]
}