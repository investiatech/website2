import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
    ArrowRight,
    Brain,
    Code2,
    GitBranch,
    Target,
    Layers,
    Sparkles,
    CheckCircle2,
    Users,
    Clock,
    Shield,
    Zap,
} from "lucide-react"
import Link from "next/link"

export default function ServicesOverviewPage() {
    return (
        <>
            <Header />
            <main>
                {/* Hero Section */}
                <section className="container mx-auto px-4 py-24 md:py-32 border-b border-border">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
                            Budujemy inteligentne rozwiązania
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800">
                                dla świata finansów
                            </span>
                        </h1>

                        <p className="text-xl text-muted-foreground leading-relaxed mb-8 text-pretty">
                            Tworzymy systemy oparte na AI, analizie danych i nowoczesnej architekturze.
                            Dostarczamy bezpieczne, skalowalne i zaawansowane rozwiązania dla firm finansowych.
                        </p>
                    </div>
                </section>

                {/* Main Services Grid */}
                <section className="border-t border-border py-24 md:py-32 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="max-w-2xl mx-auto text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                                Kompleksowe rozwiązania dla sektora finansowego
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Tworzymy kompleksowe rozwiązania — od analizy potrzeb i architektury
                                po wdrożenie, integracje i dalszy rozwój.
                            </p>
                        </div>

                        {/* Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">

                            {/* Aplikacje fintech */}
                            <div className="bg-background border border-border rounded-xl p-8 hover:border-primary/40 transition-colors">
                                <div className="size-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                                    <Sparkles className="size-7 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Aplikacje fintech</h3>
                                <p className="text-muted-foreground leading-relaxed mb-6">
                                    Budujemy skalowalne platformy finansowe od MVP po rozwiązania enterprise.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="size-5 text-primary mt-0.5 shrink-0" />
                                        <span className="text-sm">Aplikacje mobilne i webowe</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="size-5 text-primary mt-0.5 shrink-0" />
                                        <span className="text-sm">Systemy płatności i transakcji</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="size-5 text-primary mt-0.5 shrink-0" />
                                        <span className="text-sm">Digital banking solutions</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="size-5 text-primary mt-0.5 shrink-0" />
                                        <span className="text-sm">Peer-to-peer lending</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Backend & API */}
                            <div className="bg-background border border-border rounded-xl p-8 hover:border-primary/40 transition-colors">
                                <div className="size-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                                    <Code2 className="size-7 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Backend & API</h3>
                                <p className="text-muted-foreground leading-relaxed mb-6">
                                    Backend, REST/GraphQL API, mikroserwisy oraz architektura serverless.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="size-5 text-primary mt-0.5 shrink-0" />
                                        <span className="text-sm">Node.js & Python</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="size-5 text-primary mt-0.5 shrink-0" />
                                        <span className="text-sm">RESTful & GraphQL APIs</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="size-5 text-primary mt-0.5 shrink-0" />
                                        <span className="text-sm">Mikroserwisy i serverless</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="size-5 text-primary mt-0.5 shrink-0" />
                                        <span className="text-sm">WebSockets i real-time</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Integracje systemów */}
                            <div className="bg-background border border-border rounded-xl p-8 hover:border-primary/40 transition-colors">
                                <div className="size-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                                    <GitBranch className="size-7 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Integracje systemów</h3>
                                <p className="text-muted-foreground leading-relaxed mb-6">
                                    Integracje z bankami, brokerami i giełdami oraz z usługami zewnętrznymi.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="size-5 text-primary mt-0.5 shrink-0" />
                                        <span className="text-sm">API banków i brokerów</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="size-5 text-primary mt-0.5 shrink-0" />
                                        <span className="text-sm">Integracje z giełdami</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="size-5 text-primary mt-0.5 shrink-0" />
                                        <span className="text-sm">Payment gateways</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="size-5 text-primary mt-0.5 shrink-0" />
                                        <span className="text-sm">KYC / AML providers</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Modele AI i ML */}
                            <div className="bg-background border border-border rounded-xl p-8 hover:border-primary/40 transition-colors">
                                <div className="size-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                                    <Brain className="size-7 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Modele AI i ML</h3>
                                <p className="text-muted-foreground leading-relaxed mb-6">
                                    Modele predykcyjne, scoring ryzyka i inteligentne systemy rekomendacyjne.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="size-5 text-primary mt-0.5 shrink-0" />
                                        <span className="text-sm">Modele predykcyjne</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="size-5 text-primary mt-0.5 shrink-0" />
                                        <span className="text-sm">Risk scoring & fraud detection</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="size-5 text-primary mt-0.5 shrink-0" />
                                        <span className="text-sm">Systemy rekomendacyjne</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="size-5 text-primary mt-0.5 shrink-0" />
                                        <span className="text-sm">NLP dla finansów</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Systemy inwestycyjne */}
                            <div className="bg-background border border-border rounded-xl p-8 hover:border-primary/40 transition-colors">
                                <div className="size-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                                    <Target className="size-7 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Systemy inwestycyjne</h3>
                                <p className="text-muted-foreground leading-relaxed mb-6">
                                    Platformy do zarządzania portfelem, analizy rynkowej i tradingu.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="size-5 text-primary mt-0.5 shrink-0" />
                                        <span className="text-sm">Portfolio management</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="size-5 text-primary mt-0.5 shrink-0" />
                                        <span className="text-sm">Trading platforms</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="size-5 text-primary mt-0.5 shrink-0" />
                                        <span className="text-sm">Robo-advisors</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="size-5 text-primary mt-0.5 shrink-0" />
                                        <span className="text-sm">Wealth management tools</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Dashboardy finansowe */}
                            <div className="bg-background border border-border rounded-xl p-8 hover:border-primary/40 transition-colors">
                                <div className="size-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                                    <Layers className="size-7 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Dashboardy finansowe</h3>
                                <p className="text-muted-foreground leading-relaxed mb-6">
                                    Panele analityczne z wizualizacją danych i metryk w czasie rzeczywistym.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="size-5 text-primary mt-0.5 shrink-0" />
                                        <span className="text-sm">Real-time analytics</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="size-5 text-primary mt-0.5 shrink-0" />
                                        <span className="text-sm">Wizualizacja danych</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="size-5 text-primary mt-0.5 shrink-0" />
                                        <span className="text-sm">Custom KPI tracking</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="size-5 text-primary mt-0.5 shrink-0" />
                                        <span className="text-sm">Raportowanie i eksport</span>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="border-t border-border py-24 md:py-32">
                    <div className="container mx-auto px-4">
                        <div className="max-w-2xl mx-auto text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Dlaczego warto z nami pracować?</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Oferujemy kompleksowe wsparcie na każdym etapie projektu
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                            <div className="text-center">
                                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                                    <Users className="size-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">Doświadczony zespół</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    25+ specjalistów z doświadczeniem w fintech i AI
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                                    <Clock className="size-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">Terminowość</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Realizujemy projekty zgodnie z harmonogramem
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                                    <Shield className="size-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">Bezpieczeństwo</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Najwyższe standardy RODO, szyfrowania i audytu
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                                    <Zap className="size-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">Wsparcie 24/7</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">Monitoring i utrzymanie po wdrożeniu</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="border-t border-border py-24 md:py-32 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-balance">
                                Gotowy na start projektu?
                            </h2>
                            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed text-pretty">
                                Umów się na bezpłatną konsultację i poznaj szczegóły naszych usług
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Button size="lg" asChild>
                                    <Link href="/contact">
                                        Umów konsultacje online
                                        <ArrowRight className="size-4 ml-2" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main >
            <Footer />
        </>
    )
}
