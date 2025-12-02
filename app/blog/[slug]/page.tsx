import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BlogPost } from '@/app/lib/blog-data'

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:8085'

async function getPostBySlug(slug: string): Promise<BlogPost | null> {
    const res = await fetch(`${API_URL}/post/${slug}`, {
        cache: 'no-store',
    })

    if (res.status === 404) {
        return null
    }

    if (!res.ok) {
        console.error('Failed to fetch blog post', res.status, await res.text())
        throw new Error('Failed to fetch blog post')
    }

    return res.json()
}

export default async function BlogPostPage({
    params,
}: {
    params: { slug: string }
}) {
    const { slug } = await params

    const post = await getPostBySlug(slug)

    if (!post) {
        notFound()
    }

    return (
        <>
            <Header />
            <main className="container mx-auto px-4 py-12">
                <div className="max-w-3xl mx-auto">
                    <Link href="/blog">
                        <Button variant="ghost" className="mb-8 -ml-4">
                            <ArrowLeft className="size-4 mr-2" />
                            Powrót do artykułów
                        </Button>
                    </Link>

                    <article>
                        <div className="mb-8">
                            <Badge variant="secondary" className="font-mono text-xs mb-4">
                                {post.category}
                            </Badge>
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                                {post.title}
                            </h1>
                            <div className="flex items-center gap-6 text-sm text-muted-foreground">
                                <span className="flex items-center gap-2">
                                    <Calendar className="size-4" />
                                    {new Date(post.date).toLocaleDateString('pl-PL', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                    })}
                                </span>
                                <span className="flex items-center gap-2">
                                    <Clock className="size-4" />
                                    {post.readTime}
                                </span>
                                <span>Autor: {post.author}</span>
                            </div>
                        </div>

                        <div className="prose prose-neutral dark:prose-invert max-w-none">
                            {post.content.split('\n\n').map((paragraph, index) => {
                                if (paragraph.startsWith('## ')) {
                                    return (
                                        <h2 key={index} className="text-2xl font-bold mt-12 mb-4">
                                            {paragraph.replace('## ', '')}
                                        </h2>
                                    )
                                }
                                return (
                                    <p
                                        key={index}
                                        className="leading-relaxed mb-6 text-muted-foreground"
                                    >
                                        {paragraph}
                                    </p>
                                )
                            })}
                        </div>
                    </article>
                </div>
            </main>
            <Footer />
        </>
    )
}
