// import { BlogPost } from "./blog-data"

// export async function getPosts(): Promise<BlogPost[]> {
//   const res = await fetch("http://localhost:8085/post/all", {
//     next: { revalidate: 60 },
//   })

//   if (!res.ok) {
//     throw new Error("Failed to fetch blog posts")
//   }

//   return res.json()
// }
