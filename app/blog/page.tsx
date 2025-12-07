'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { BlogCard } from '@/components/blog-card'

import { Button } from '@/components/ui/button'
import { useState, useMemo, useEffect } from 'react'
import { Calendar, Code, Lightbulb, TrendingUp, Video, Zap } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { BlogPost } from '../lib/blog-data'

import { toast } from 'sonner'
import { subscribeToNewsletter } from '../lib/subscribeToNewsletter'
import { quickInsights } from "@/app/lib/quickInsights";
import { handleNewsletterSubmit } from '../lib/handleNewsletterSubmit'

export default function BlogPage() {
    const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        let cancelled = false
        const controller = new AbortController()

        const fetchPosts = async () => {
            try {
                setLoading(true)
                setError(null)

                const response = await fetch("http://localhost:8090/post/all", {
                    method: "GET",
                    headers: { "Accept": "application/json" },
                    signal: controller.signal,
                })

                if (!response.ok) {
                    const text = await response.text().catch(() => "")
                    throw new Error(
                        text || `Failed to fetch blog posts (status: ${response.status})`,
                    )
                }

                const data = await response.json()

                if (!cancelled) {
                    setBlogPosts(data)
                }
            } catch (err) {
                if (cancelled) return
                if (err instanceof DOMException && err.name === "AbortError") return

                console.error("[v0] Error fetching blog posts:", err)
                setError(err instanceof Error ? err.message : "An error occurred")
            } finally {
                if (!cancelled) {
                    setLoading(false)
                }
            }
        }

        fetchPosts()

        return () => {
            cancelled = true
            controller.abort()
        }
    }, [])

    const postsByDay = useMemo(
        () =>
            Object.entries(
                blogPosts.reduce((acc, post) => {
                    const dateKey = post.date // np. "2025-01-15"

                    if (!acc[dateKey]) {
                        acc[dateKey] = []
                    }

                    acc[dateKey].push(post)
                    return acc
                }, {} as Record<string, BlogPost[]>)
            )
                .sort(([a], [b]) => b.localeCompare(a)),
        [blogPosts]
    )

    // async function handleNewsletterSubmit(e: React.FormEvent<HTMLFormElement>) {
    //     e.preventDefault();

    //     const form = e.currentTarget;
    //     const emailField = form.elements.namedItem("email");

    //     if (!(emailField instanceof HTMLInputElement)) {
    //         toast.error("Nie udało się odczytać adresu e-mail.");
    //         return;
    //     }

    //     const email = emailField.value;

    //     try {
    //         const result = await subscribeToNewsletter(email);

    //         toast.success("Zapisano do newslettera!", {
    //             description: result.message || "Dziękujemy za dołączenie do Investia.Tech",
    //             style: {
    //                 background: "#22C55E",
    //                 color: "white",
    //                 fontSize: "16px",
    //                 padding: "18px 20px",
    //                 borderRadius: "12px",
    //             },
    //         });

    //         form.reset();
    //     } catch (error: any) {
    //         toast.error("Nie udało się zapisać.", {
    //             description: error.message ?? "Spróbuj ponownie później.",
    //         });
    //     }
    // }

    return (
        <>
            <Header />
            <main className="min-h-screen">
                {/* Hero Section */}
                <section className="container mx-auto px-4 py-24 md:py-32">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
                            Eksperckie spojrzenie na technologię
                            <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-blue-600 to-blue-800">
                                dla finansów
                            </span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed mb-8 text-pretty">
                            Odkryj najnowsze trendy, best practices i praktyczne porady z zakresu rozwoju oprogramowania, AI i
                            technologii finansowych
                        </p>
                    </div>
                </section>

                {/* Main Content */}
                <section className="py-12 md:py-16 border-t border-border bg-muted/30">
                    <div className="container mx-auto px-4">

                        <div className="flex items-center gap-3 mb-8">
                            <Lightbulb className="h-6 w-6 text-primary" />
                            <h1 className="text-3xl font-bold">Artykuły, wiedza i inspiracje</h1>
                        </div>
                        <p className="text-muted-foreground mb-12 max-w-2xl">
                            Praktyczne analizy, trendy technologiczne i wskazówki, które pomogą Ci podejmować lepsze decyzje w świecie finansów i AI.
                        </p>

                        {loading && (
                            <div className="text-center py-12">
                                <p className="text-muted-foreground">Ładowanie postów...</p>
                            </div>
                        )}

                        {error && (
                            <div className="text-center py-12">
                                <p className="text-red-500">Błąd: {error}</p>
                                <p className="text-sm text-muted-foreground mt-2">
                                    Sprawdź czy API jest dostępne pod adresem https://localhost:8085/post/all
                                </p>
                            </div>
                        )}

                        {postsByDay.length > 0 && (
                            <div>
                                {postsByDay.map(([day, posts]) => (
                                    <div key={day} className="mb-16">
                                        <div className="flex items-center gap-3 mb-8">
                                            <Calendar className="h-5 w-5 text-muted-foreground" />
                                            <h3 className="text-2xl font-semibold">
                                                {new Date(day).toLocaleDateString("pl-PL", {
                                                    day: "2-digit",
                                                    month: "long",
                                                    year: "numeric",
                                                })}
                                            </h3>
                                            <div className="flex-1 h-px bg-border" />
                                        </div>

                                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                            {posts.map((post) => (
                                                <BlogCard key={post.slug} post={post} />
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                    </div>
                </section>

                {/* Quick Insights */}
                <section className="py-8 md:py-12 border-t border-border">
                    <div className="container mx-auto px-4">
                        <div className="mb-16">
                            <div className="flex items-center gap-3 mb-8">
                                <Lightbulb className="h-6 w-6" />
                                <h2 className="text-2xl font-semibold">Quick Insights</h2>
                            </div>
                            <p className="text-muted-foreground mb-8">
                                30-sekundowe insighty technologiczne – szybkie tipy, które możesz zastosować już dziś
                            </p>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {quickInsights.map((insight, index) => {
                                    const Icon = insight.icon
                                    return (
                                        <div key={index} className="p-4 border rounded-lg hover:border-foreground/20 transition-colors">
                                            <div className="flex items-start gap-3 mb-2">
                                                <div className="p-2 rounded-lg bg-muted">
                                                    <Icon className="h-4 w-4" />
                                                </div>
                                                <h3 className="font-medium text-sm leading-tight">{insight.title}</h3>
                                            </div>
                                            <p className="text-sm text-muted-foreground leading-relaxed">{insight.tip}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Newsletter CTA */}
                <section className="border-t border-border py-16 md:py-24 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="max-w-2xl mx-auto text-center">
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Nie przegap nowych artykułów</h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                Zapisz się do newslettera i otrzymuj najnowsze artykuły bezpośrednio na swoją skrzynkę
                            </p>
                            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={handleNewsletterSubmit}>
                                <Input name="email" type="email" placeholder="Twój adres email" className="flex-1" />
                                <Button type="submit">Zapisz się</Button>
                            </form>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    )
}
