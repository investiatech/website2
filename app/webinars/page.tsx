'use client'

import Footer from '@/components/footer'
import { Header } from '@/components/header'
import { WebinarCard } from '@/components/webinar-card'
import { webinars } from '@/lib/webinar-data'
import { Video } from 'lucide-react'
import { useMemo } from 'react'

export default function WebinarsPage() {
    const upcomingWebinars = useMemo(() =>
        webinars.filter(w => w.isUpcoming),
        []
    )

    return (
        <>
            <Header />
            <main className="min-h-screen">
                <section className="py-8 md:py-12">
                    <div className="container mx-auto px-4">
                        <div className="flex items-center gap-3 mb-8">
                            <Video className="h-6 w-6 text-primary" />
                            <h1 className="text-3xl font-bold">Webinary</h1>
                        </div>
                        <p className="text-muted-foreground mb-12 max-w-2xl">
                            Dołącz do naszych bezpłatnych webinarów prowadzonych przez ekspertów. Zdobądź praktyczną wiedzę i rozwijaj swoje umiejętności.
                        </p>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {upcomingWebinars.map((webinar) => (
                                <WebinarCard key={webinar.id} webinar={webinar} />
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
