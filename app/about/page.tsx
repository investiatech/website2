import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Target, Sparkles, Shield, Users, Award, TrendingUp, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
    return (
        <>
            <Header />
            <main>
                {/* Hero Section */}
                <section className="container mx-auto px-4 py-24 md:py-32">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
                            Tworzymy przyszłość finansów z{' '}
                            <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-blue-600 to-blue-800">
                                technologią AI i Quantum
                            </span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed mb-8 text-pretty">
                            Jesteśmy zespołem pasjonatów technologii, którzy wierzą, że innowacyjne rozwiązania
                            mogą zrewolucjonizować sposób, w jaki świat finansów działa dzisiaj.
                        </p>
                    </div>
                </section>

                {/* Mission & Vision */}
                <section className="border-t border-border py-24 md:py-32 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            <div className="bg-background p-8 rounded-lg border border-border text-center">
                                <div className="size-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                                    <Target className="size-8 text-primary" />
                                </div>
                                <h2 className="text-2xl font-bold mb-4">Nasza misja</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Demokratyzacja dostępu do zaawansowanych technologii AI i Quantum Computing
                                    dla firm każdej wielkości, umożliwiając im konkurowanie na równych zasadach.
                                </p>
                            </div>

                            <div className="bg-background p-8 rounded-lg border border-border text-center">
                                <div className="size-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                                    <Sparkles className="size-8 text-primary" />
                                </div>
                                <h2 className="text-2xl font-bold mb-4">Nasza wizja</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Być liderem w tworzeniu inteligentnych rozwiązań finansowych wykorzystujących
                                    najnowsze osiągnięcia technologii i zmieniających oblicze branży FinTech.
                                </p>
                            </div>

                            <div className="bg-background p-8 rounded-lg border border-border text-center">
                                <div className="size-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                                    <Shield className="size-8 text-primary" />
                                </div>
                                <h2 className="text-2xl font-bold mb-4">Nasze wartości</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Innowacyjność, przejrzystość, bezpieczeństwo i partnerskie podejście
                                    do każdego projektu. Stawiamy na jakość i długoterminowe relacje.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Story */}
                <section className="border-t border-border py-24 md:py-32">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 text-center">
                                Nasza historia
                            </h2>
                            <div className="space-y-6 text-muted-foreground leading-relaxed">
                                <p className="text-lg">
                                    Investia.Tech powstała w 2024 roku z pasji do technologii i przekonania,
                                    że sztuczna inteligencja oraz quantum computing mogą fundamentalnie zmienić
                                    sposób działania sektora finansowego.
                                </p>
                                <p>
                                    Zaczynaliśmy jako mały zespół z doświadczeniem w machine learning,
                                    software development i finansach. Dziś jesteśmy zespołem specjalistów,
                                    którzy wspólnie zrealizowali ponad wiele projektów dla klientów z całego świata.
                                </p>
                                <p>
                                    Naszym pierwszym projektem była platforma analizy ryzyka in wykorzystująca
                                    algorytmy ML. Od tamtej pory rozwinęliśmy nasze kompetencje w kierunku quantum computing,
                                    advanced analytics i automatyzacji procesów finansowych.
                                </p>
                                <p>
                                    Współpracujemy z bankami, funduszami inwestycyjnymi, firmami fintech oraz startupami,
                                    dostarczając rozwiązania dostosowane do unikalnych potrzeb każdego klienta.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team Values */}
                <section className="border-t border-border py-24 md:py-32">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center">
                                Co nas wyróżnia
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <div className="p-6">
                                    <Users className="size-12 text-primary mb-4" />
                                    <h3 className="text-xl font-semibold mb-3">Eksperci w swoich dziedzinach</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Każdy członek zespołu ma minimum 5 lat doświadczenia w swojej specjalizacji
                                        i regularnie rozwija swoje kompetencje.
                                    </p>
                                </div>

                                <div className="p-6">
                                    <Award className="size-12 text-primary mb-4" />
                                    <h3 className="text-xl font-semibold mb-3">Certyfikacje i nagrody</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Posiadamy certyfikaty AWS, Google Cloud, Microsoft Azure oraz nagrody
                                        za innowacyjne rozwiązania w branży FinTech.
                                    </p>
                                </div>

                                <div className="p-6">
                                    <TrendingUp className="size-12 text-primary mb-4" />
                                    <h3 className="text-xl font-semibold mb-3">Ciągły rozwój</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Inwestujemy w rozwój zespołu, badania nad nowymi technologiami
                                        i uczestnictwo w konferencjach branżowych.
                                    </p>
                                </div>

                                <div className="p-6">
                                    <Shield className="size-12 text-primary mb-4" />
                                    <h3 className="text-xl font-semibold mb-3">Bezpieczeństwo na pierwszym miejscu</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Stosujemy najwyższe standardy bezpieczeństwa danych i compliance
                                        zgodnie z regulacjami GDPR i PSD2.
                                    </p>
                                </div>

                                <div className="p-6">
                                    <Sparkles className="size-12 text-primary mb-4" />
                                    <h3 className="text-xl font-semibold mb-3">Innowacyjne podejście</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Nie boimy się eksperymentować z nowymi technologiami i rozwiązaniami,
                                        zawsze z myślą o wartości biznesowej.
                                    </p>
                                </div>

                                <div className="p-6">
                                    <Target className="size-12 text-primary mb-4" />
                                    <h3 className="text-xl font-semibold mb-3">Zorientowanie na rezultat</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Skupiamy się na dostarczaniu mierzalnych korzyści biznesowych,
                                        nie tylko na wdrożeniu technologii.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="border-t border-border py-24 md:py-32 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-balance">
                                Gotowy na współpracę?
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-pretty">
                                Skontaktuj się z nami i porozmawiajmy o tym, jak możemy pomóc
                                Twojej firmie w transformacji cyfrowej.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Button size="lg" asChild>
                                    <Link href="/contact">
                                        Umów konsultację online
                                        <ArrowRight className="size-4 ml-2" />
                                    </Link>
                                </Button>
                                <Button size="lg" variant="outline" asChild>
                                    <Link href="/services">Zobacz nasze usługi</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
