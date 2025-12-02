import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Layers, GitBranch, Target, Check } from "lucide-react"
import Link from "next/link"

export default function SolutionAreasPage() {
    return (
        <>
            <Header />
            <main>
                {/* Hero Section */}
                <section className="container mx-auto px-4 py-24 md:py-32 border-b border-border">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
                            Rozwiązania dopasowane do <span className='text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-blue-800'>potrzeb finansów</span> 
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed mb-8 text-pretty">
                            Wspieramy projekty wymagające precyzyjnych analiz, integracji i automatyzacji. Nasze rozwiązania łączą
                            najnowsze technologie z głęboką wiedzą domenową.
                        </p>
                    </div>
                </section>

                {/* Automatyzacja procesów finansowych */}
                <section className="container mx-auto px-4 py-24 md:py-32 border-b border-border">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                            <div>
                                <div className="size-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                                    <Zap className="size-8 text-primary" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                                    Automatyzacja procesów finansowych
                                </h2>
                                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                                    Eliminujemy rutynowe zadania i przyspieszamy przepływy pracy dzięki inteligentnej automatyzacji. Nasze
                                    rozwiązania pozwalają zespołom skupić się na zadaniach o wysokiej wartości dodanej.
                                </p>

                                <div className="space-y-4 mb-8">
                                    <div className="flex items-start gap-3">
                                        <Check className="size-5 text-primary mt-1 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-semibold mb-1">Automatyczne księgowanie</h3>
                                            <p className="text-sm text-muted-foreground">
                                                Inteligentne rozpoznawanie transakcji i automatyczna kategoryzacja
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Check className="size-5 text-primary mt-1 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-semibold mb-1">Workflow finansowy</h3>
                                            <p className="text-sm text-muted-foreground">
                                                Automatyzacja obiegu dokumentów, zatwierdzeń i raportowania
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Check className="size-5 text-primary mt-1 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-semibold mb-1">Zarządzanie płatnościami</h3>
                                            <p className="text-sm text-muted-foreground">
                                                Automatyczne przetwarzanie przelewów, faktur i reconciliation
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Check className="size-5 text-primary mt-1 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-semibold mb-1">Compliance monitoring</h3>
                                            <p className="text-sm text-muted-foreground">
                                                Automatyczne sprawdzanie zgodności z regulacjami AML/KYC
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-card p-6 rounded-lg border border-border">
                                    <h3 className="text-lg font-semibold mb-3">Przykładowe wdrożenie</h3>
                                    <div className="space-y-3 text-sm text-muted-foreground">
                                        <p>
                                            <span className="font-medium text-foreground">Klient:</span> Departament finansowy w firmie
                                            technologicznej (500+ pracowników)
                                        </p>
                                        <p>
                                            <span className="font-medium text-foreground">Rozwiązanie:</span> Zautomatyzowaliśmy proces
                                            rozliczania wydatków pracowników, fakturowania oraz generowania raportów finansowych
                                        </p>
                                        <p>
                                            <span className="font-medium text-foreground">Rezultat:</span> 80% redukcja czasu przetwarzania,
                                            eliminacja błędów manualnych
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-muted/30 p-6 rounded-lg">
                                    <h3 className="text-lg font-semibold mb-3">Technologie</h3>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 rounded-full bg-background border border-border text-sm">Python</span>
                                        <span className="px-3 py-1 rounded-full bg-background border border-border text-sm">RPA</span>
                                        <span className="px-3 py-1 rounded-full bg-background border border-border text-sm">OCR/AI</span>
                                        <span className="px-3 py-1 rounded-full bg-background border border-border text-sm">Zapier</span>
                                        <span className="px-3 py-1 rounded-full bg-background border border-border text-sm">n8n</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Dashboardy i analityka danych */}
                <section className="container mx-auto px-4 py-24 md:py-32 border-b border-border bg-muted/30">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                            <div className="lg:order-2">
                                <div className="size-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                                    <Layers className="size-8 text-primary" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Dashboardy i analityka danych</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                                    Wizualizujemy kluczowe metryki biznesowe w intuicyjnych dashboardach, które dostarczają actionable
                                    insights w czasie rzeczywistym.
                                </p>

                                <div className="space-y-4 mb-8">
                                    <div className="flex items-start gap-3">
                                        <Check className="size-5 text-primary mt-1 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-semibold mb-1">Real-time analytics</h3>
                                            <p className="text-sm text-muted-foreground">
                                                Monitorowanie KPI i metryk biznesowych w czasie rzeczywistym
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Check className="size-5 text-primary mt-1 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-semibold mb-1">Interaktywne wizualizacje</h3>
                                            <p className="text-sm text-muted-foreground">
                                                Wykresy, tabele i mapy ciepła z możliwością drill-down
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Check className="size-5 text-primary mt-1 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-semibold mb-1">Raporty automatyczne</h3>
                                            <p className="text-sm text-muted-foreground">
                                                Scheduled reports wysyłane mailowo lub do Slack/Teams
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Check className="size-5 text-primary mt-1 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-semibold mb-1">Predykcje i prognozy</h3>
                                            <p className="text-sm text-muted-foreground">AI-powered forecasting dla przewidywania trendów</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6 lg:order-1">
                                <div className="bg-card p-6 rounded-lg border border-border">
                                    <h3 className="text-lg font-semibold mb-3">Case study</h3>
                                    <div className="space-y-3 text-sm text-muted-foreground">
                                        <p>
                                            <span className="font-medium text-foreground">Klient:</span> Fundusz inwestycyjny (zarządzanie
                                            portfelem $500M)
                                        </p>
                                        <p>
                                            <span className="font-medium text-foreground">Rozwiązanie:</span> Dashboard analityczny z
                                            wizualizacją performance, risk metrics i market data w czasie rzeczywistym
                                        </p>
                                        <p>
                                            <span className="font-medium text-foreground">Rezultat:</span> 50% szybsze podejmowanie decyzji
                                            inwestycyjnych, lepszy risk management
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-background p-6 rounded-lg border border-border">
                                    <h3 className="text-lg font-semibold mb-3">Technologie</h3>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 rounded-full bg-muted text-sm">React</span>
                                        <span className="px-3 py-1 rounded-full bg-muted text-sm">D3.js</span>
                                        <span className="px-3 py-1 rounded-full bg-muted text-sm">Chart.js</span>
                                        <span className="px-3 py-1 rounded-full bg-muted text-sm">WebSocket</span>
                                        <span className="px-3 py-1 rounded-full bg-muted text-sm">PostgreSQL</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Integracje API */}
                <section className="container mx-auto px-4 py-24 md:py-32 border-b border-border">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                            <div>
                                <div className="size-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                                    <GitBranch className="size-8 text-primary" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                                    Integracje API z bankami i brokerami
                                </h2>
                                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                                    Łączymy Twoje systemy z platformami bankowymi, maklerskimi i giełdami zapewniając płynną wymianę
                                    danych i automatyzację operacji.
                                </p>

                                <div className="space-y-4 mb-8">
                                    <div className="flex items-start gap-3">
                                        <Check className="size-5 text-primary mt-1 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-semibold mb-1">Open Banking API</h3>
                                            <p className="text-sm text-muted-foreground">
                                                Integracje PSD2 z bankami dla automatycznego dostępu do danych
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Check className="size-5 text-primary mt-1 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-semibold mb-1">Platformy maklerskie</h3>
                                            <p className="text-sm text-muted-foreground">Integracje z Interactive Brokers, Trading212, XTB</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Check className="size-5 text-primary mt-1 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-semibold mb-1">Market data feeds</h3>
                                            <p className="text-sm text-muted-foreground">
                                                Real-time quotes, historical data z giełd i platform OTC
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Check className="size-5 text-primary mt-1 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-semibold mb-1">Payment gateways</h3>
                                            <p className="text-sm text-muted-foreground">
                                                Stripe, PayPal, Przelewy24 dla procesowania płatności
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-card p-6 rounded-lg border border-border">
                                    <h3 className="text-lg font-semibold mb-3">Przykład integracji</h3>
                                    <div className="space-y-3 text-sm text-muted-foreground">
                                        <p>
                                            <span className="font-medium text-foreground">Klient:</span> Platforma agregująca konta bankowe i
                                            inwestycyjne
                                        </p>
                                        <p>
                                            <span className="font-medium text-foreground">Rozwiązanie:</span> Zintegrowaliśmy 15+ banków
                                            polskich i europejskich oraz 5 platform maklerskich
                                        </p>
                                        <p>
                                            <span className="font-medium text-foreground">Rezultat:</span> Automatyczna synchronizacja
                                            transakcji, sald i pozycji w czasie rzeczywistym
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-muted/30 p-6 rounded-lg">
                                    <h3 className="text-lg font-semibold mb-3">Standardy i protokoły</h3>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 rounded-full bg-background border border-border text-sm">REST API</span>
                                        <span className="px-3 py-1 rounded-full bg-background border border-border text-sm">GraphQL</span>
                                        <span className="px-3 py-1 rounded-full bg-background border border-border text-sm">WebSocket</span>
                                        <span className="px-3 py-1 rounded-full bg-background border border-border text-sm">OAuth 2.0</span>
                                        <span className="px-3 py-1 rounded-full bg-background border border-border text-sm">FIX</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Aplikacje inwestycyjne */}
                <section className="container mx-auto px-4 py-24 md:py-32 bg-muted/30">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                            <div className="lg:order-2">
                                <div className="size-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                                    <Target className="size-8 text-primary" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Budowa aplikacji inwestycyjnych</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                                    Tworzymy kompleksowe platformy inwestycyjne - od prostych portfolio trackerów po zaawansowane systemy
                                    tradingowe z AI.
                                </p>

                                <div className="space-y-4 mb-8">
                                    <div className="flex items-start gap-3">
                                        <Check className="size-5 text-primary mt-1 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-semibold mb-1">Portfolio management</h3>
                                            <p className="text-sm text-muted-foreground">
                                                Zarządzanie portfelem, tracking performance, rebalancing
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Check className="size-5 text-primary mt-1 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-semibold mb-1">Trading platforms</h3>
                                            <p className="text-sm text-muted-foreground">
                                                Zaawansowane platformy do tradingu z charting i order execution
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Check className="size-5 text-primary mt-1 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-semibold mb-1">Robo-advisory</h3>
                                            <p className="text-sm text-muted-foreground">
                                                AI-powered doradcy inwestycyjni z automatyczną alokacją
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Check className="size-5 text-primary mt-1 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-semibold mb-1">Risk management</h3>
                                            <p className="text-sm text-muted-foreground">
                                                Narzędzia do analizy i zarządzania ryzykiem portfela
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6 lg:order-1">
                                <div className="bg-card p-6 rounded-lg border border-border">
                                    <h3 className="text-lg font-semibold mb-3">Flagowy projekt</h3>
                                    <div className="space-y-3 text-sm text-muted-foreground">
                                        <p>
                                            <span className="font-medium text-foreground">Klient:</span> Startup fintech - platforma
                                            inwestycyjna dla millenialsów
                                        </p>
                                        <p>
                                            <span className="font-medium text-foreground">Rozwiązanie:</span> Aplikacja mobilna i webowa z
                                            portfolio tracker, AI recommendations i social trading
                                        </p>
                                        <p>
                                            <span className="font-medium text-foreground">Rezultat:</span> 50k+ aktywnych użytkowników w
                                            pierwszym roku, $20M AUM
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-background p-6 rounded-lg border border-border">
                                    <h3 className="text-lg font-semibold mb-3">Stack technologiczny</h3>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 rounded-full bg-muted text-sm">Next.js</span>
                                        <span className="px-3 py-1 rounded-full bg-muted text-sm">React Native</span>
                                        <span className="px-3 py-1 rounded-full bg-muted text-sm">Node.js</span>
                                        <span className="px-3 py-1 rounded-full bg-muted text-sm">Python</span>
                                        <span className="px-3 py-1 rounded-full bg-muted text-sm">PostgreSQL</span>
                                        <span className="px-3 py-1 rounded-full bg-muted text-sm">Redis</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="container mx-auto px-4 py-24 md:py-32">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-balance">
                            Gotowy na transformację finansową?
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed text-pretty">
                            Umów się na bezpłatną konsultację i dowiedz się, jak możemy pomóc w automatyzacji, integracji lub budowie
                            Twojego rozwiązania finansowego.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button size="lg" asChild>
                                <Link href="/contact">
                                    Umów konsultację
                                    <ArrowRight className="size-4 ml-2" />
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild>
                                <Link href="/pricing">Zobacz cennik</Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
