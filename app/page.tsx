'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowRight, Code2, Zap, Shield, Users, CheckCircle2, Smartphone, Cloud, Database, Rocket, HeartHandshake, LineChart, Lock, TestTube, Sparkles, Settings, Star, Quote, Phone, Send, Mail, MapPin, Target, Brain, Layers, Calculator, GitBranch, TrendingUp, HelpCircle } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Textarea } from '@/components/ui/textarea'
import { subscribeToNewsletter } from './lib/newsletter'

async function handleNewsletterSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const form = e.currentTarget;
  const email = (form.elements.namedItem("email") as HTMLInputElement).value;

  await subscribeToNewsletter(email);
}


export default function Home() {
    const { toast } = useToast();
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="relative aspect-square lg:aspect-auto lg:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/images/investia.tech_hero.svg"
                alt="Zespół projektujący algorytmy i oprogramowanie dla nowoczesnych finansów"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-10 text-balance">
                Projektujemy algorytmy dla{' '}
                <span className='text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-blue-800'>nowoczesnych finansów</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed text-pretty">
                Tworzymy skalowalne systemy fintech, modele AI i aplikacje webowe — od szybkich MVP po
                zaawansowane rozwiązania dla firm inwestycyjnych i technologicznych.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
                  <Button size="lg" asChild className="w-full sm:w-auto">
                    <Link href="/contact">
                      Porozmawiajmy o Twoim projekcie
                      <ArrowRight className="size-4 ml-2" />
                    </Link>
                  </Button>

                  <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
                    <Link href="/blog">
                      Zobacz blog
                    </Link>
                  </Button>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mt-3">
                Odpowiadamy zazwyczaj w ciągu jednego dnia roboczego. Pierwsza konsultacja jest bezpłatna i niezobowiązująca.
              </p>
            </div>
          </div>
        </section>

        {/* Dla kogo tworzymy Section */}
        <section className="border-t border-border py-24 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Wspieramy firmy, które pracują z danymi i finansami
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Budujemy rozwiązania dla organizacji, które potrzebują niezawodnych narzędzi do analizy danych,
                prognozowania i automatyzacji procesów finansowych.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
              <div className="bg-background p-8 rounded-lg border border-border hover:border-primary/50 transition-colors text-center">
                <div className="size-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                  <Sparkles className="size-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Fintechy i startupy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Skalowalne rozwiązania dla młodych firm fintech, od pierwszego MVP po rozwijane platformy produktowe.
                </p>
              </div>

              <div className="bg-background p-8 rounded-lg border border-border hover:border-primary/50 transition-colors text-center">
                <div className="size-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                  <Target className="size-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Firmy inwestycyjne</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Zaawansowane narzędzia analityczne i algorytmy wspierające decyzje funduszy, domów maklerskich
                  i firm inwestycyjnych.
                </p>
              </div>

              <div className="bg-background p-8 rounded-lg border border-border hover:border-primary/50 transition-colors text-center">
                <div className="size-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                  <Calculator className="size-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Działy finansowe</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Systemy automatyzujące raportowanie, rozliczenia i przepływy finansowe w większych organizacjach.
                </p>
              </div>

              <div className="bg-background p-8 rounded-lg border border-border hover:border-primary/50 transition-colors text-center">
                <div className="size-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                  <Layers className="size-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">SaaS B2B</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Moduły i komponenty finansowe dla produktów SaaS — płatności, rozliczenia, subskrypcje i raportowanie.
                </p>
              </div>

              <div className="bg-background p-8 rounded-lg border border-border hover:border-primary/50 transition-colors text-center">
                <div className="size-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                  <Shield className="size-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Doradztwo finansowe</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Panele klienta, CRM i analityka dla doradców finansowych oraz wealth management.
                </p>
              </div>

              <div className="bg-background p-8 rounded-lg border border-border hover:border-primary/50 transition-colors text-center">
                <div className="size-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                  <Brain className="size-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Analityka i data science</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Środowiska danych i narzędzia machine learning dla zespołów analitycznych i data science.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Style Financial Problems Section */}
        <section className="border-t border-border py-24 md:py-32">
          <div className="container mx-auto px-4">
            {/* <div className="max-w-5xl mx-auto"> */}
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Wyzwania finansów, które pomagamy rozwiązać
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Finanse mierzą się z rosnącą złożonością danych, integracji i automatyzacji, odpowiadamy na te problemy nowoczesną technologią i AI.
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-8 md:left-1/2 top-0 h-[calc(100%-100px)] w-px bg-border md:-ml-px" />

              {/* Timeline items */}
              <div className="space-y-16">
                {/* Item 1 */}
                <div className="relative grid md:grid-cols-2 gap-8 md:gap-16">
                  {/* Number badge */}
                  <div className="absolute left-0 md:left-1/2 size-16 ml-0 md:-ml-8 rounded-full bg-background border-2 border-border flex items-center justify-center font-bold text-2xl z-10">
                    01
                  </div>

                  {/* Problem - Left on desktop */}
                  <div className="md:text-right ml-20 md:ml-0 md:pr-20">
                    <div className="inline-block md:float-right">
                      <h3 className="text-xl font-bold mb-3">Chaos informacyjny</h3>
                      <p className="text-muted-foreground mb-4 max-w-md">
                        Dane rozproszone w dziesiątkach systemów. Brak jednolitej struktury.
                        Godziny tracone na szukanie informacji.
                      </p>
                      <div className="flex flex-wrap gap-2 md:justify-end">
                        <span className="text-xs px-3 py-1 rounded-full bg-muted">Silosy danych</span>
                        <span className="text-xs px-3 py-1 rounded-full bg-muted">Niska efektywność</span>
                      </div>
                    </div>
                  </div>

                  {/* Solution - Right on desktop */}
                  <div className="ml-20 md:ml-0 md:pl-20">
                    <div className="inline-block">
                      <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                        <Database className="size-6 text-primary" />
                      </div>
                      <h4 className="text-xl font-bold mb-2 text-foreground">Zunifikowana platforma</h4>
                      <p className="text-muted-foreground max-w-md">
                        AI integruje wszystkie źródła w jednym ekosystemie. Real-time pipelines
                        zapewniają dostęp do aktualnych danych w sekundach.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="relative grid md:grid-cols-2 gap-8 md:gap-16">
                  <div className="absolute left-0 md:left-1/2 size-16 ml-0 md:-ml-8 rounded-full bg-background border-2 border-border flex items-center justify-center font-bold text-2xl z-10">
                    02
                  </div>

                  <div className="md:text-right ml-20 md:ml-0 md:pr-20">
                    <div className="inline-block md:float-right">
                      <h3 className="text-xl font-bold mb-3">Brak analityki predykcyjnej</h3>
                      <p className="text-muted-foreground mb-4 max-w-md">
                        Raporty z opóźnieniem. Reakcja zamiast przewidywania.
                        80% czasu na przygotowanie danych.
                      </p>
                      <div className="flex flex-wrap gap-2 md:justify-end">
                        <span className="text-xs px-3 py-1 rounded-full bg-muted">Opóźnienia</span>
                        <span className="text-xs px-3 py-1 rounded-full bg-muted">Reaktywność</span>
                      </div>
                    </div>
                  </div>

                  <div className="ml-20 md:ml-0 md:pl-20">
                    <div className="inline-block">
                      <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                        <TrendingUp className="size-6 text-primary" />
                      </div>
                      <h4 className="text-xl font-bold mb-2 text-foreground">AI predykcyjne</h4>
                      <p className="text-muted-foreground max-w-md">
                        Machine learning identyfikuje trendy przed ich wystąpieniem.
                        NLP pozwala zadawać pytania w naturalnym języku.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="relative grid md:grid-cols-2 gap-8 md:gap-16">
                  <div className="absolute left-0 md:left-1/2 size-16 ml-0 md:-ml-8 rounded-full bg-background border-2 border-border flex items-center justify-center font-bold text-2xl z-10">
                    03
                  </div>

                  <div className="md:text-right ml-20 md:ml-0 md:pr-20">
                    <div className="inline-block md:float-right">
                      <h3 className="text-xl font-bold mb-3">Trudne decyzje inwestycyjne</h3>
                      <p className="text-muted-foreground mb-4 max-w-md">
                        Uproszczone modele finansowe. Nieprecyzyjna analiza ryzyka.
                        Długie symulacje scenariuszy.
                      </p>
                      <div className="flex flex-wrap gap-2 md:justify-end">
                        <span className="text-xs px-3 py-1 rounded-full bg-muted">Ograniczenia</span>
                        <span className="text-xs px-3 py-1 rounded-full bg-muted">Niepewność</span>
                      </div>
                    </div>
                  </div>

                  <div className="ml-20 md:ml-0 md:pl-20">
                    <div className="inline-block">
                      <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                        <Sparkles className="size-6 text-primary" />
                      </div>
                      <h4 className="text-xl font-bold mb-2 text-foreground">Quantum optimization</h4>
                      <p className="text-muted-foreground max-w-md">
                        Obliczenia z technologią AI i Quantum analizują miliardy kombinacji w minuty.
                        Optymalizacja inwestycji uwzględniająca setki zmiennych.
                      </p>
                    </div>

                  </div>

                </div>

                {/* Item 4 */}
                <div className="relative grid md:grid-cols-2 gap-8 md:gap-16">
                  <div className="absolute left-0 md:left-1/2 size-16 ml-0 md:-ml-8 rounded-full bg-background border-2 border-border flex items-center justify-center font-bold text-2xl z-10">
                    04
                  </div>

                  <div className="md:text-right ml-20 md:ml-0 md:pr-20">
                    <div className="inline-block md:float-right">
                      <h3 className="text-xl font-bold mb-3">Ręczne procesy finansowe</h3>
                      <p className="text-muted-foreground mb-4 max-w-md">
                        Powtarzalne zadania wykonywane manualnie. Wysokie ryzyko błędów.
                        Zasoby tracone na rutynę.
                      </p>
                      <div className="flex flex-wrap gap-2 md:justify-end">
                        <span className="text-xs px-3 py-1 rounded-full bg-muted">Manualność</span>
                        <span className="text-xs px-3 py-1 rounded-full bg-muted">Błędy</span>
                      </div>
                    </div>
                  </div>

                  <div className="ml-20 md:ml-0 md:pl-20">
                    <div className="inline-block">
                      <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                        <Zap className="size-6 text-primary" />
                      </div>
                      <h4 className="text-xl font-bold mb-2 text-foreground">Automatyzacja AI</h4>
                      <p className="text-muted-foreground max-w-md">
                        Inteligentne boty wykonują rutynowe zadania 24/7.
                        Eliminacja błędów ludzkich. Oszczędność do 70% czasu.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Item 5 */}
                <div className="relative grid md:grid-cols-2 gap-8 md:gap-16">
                  <div className="absolute left-0 md:left-1/2 size-16 ml-0 md:-ml-8 rounded-full bg-background border-2 border-border flex items-center justify-center font-bold text-2xl z-10">
                    05
                  </div>

                  <div className="md:text-right ml-20 md:ml-0 md:pr-20">
                    <div className="inline-block md:float-right">
                      <h3 className="text-xl font-bold mb-3">Niska efektywność danych</h3>
                      <p className="text-muted-foreground mb-4 max-w-md">
                        Dane gromadzone, ale niewykorzystywane. Brak insights.
                        Niewykorzystany potencjał informacji.
                      </p>
                      <div className="flex flex-wrap gap-2 md:justify-end">
                        <span className="text-xs px-3 py-1 rounded-full bg-muted">Zmarnowane dane</span>
                        <span className="text-xs px-3 py-1 rounded-full bg-muted">Brak ROI</span>
                      </div>
                    </div>
                  </div>

                  <div className="ml-20 md:ml-0 md:pl-20">
                    <div className="inline-block">
                      <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                        <Brain className="size-6 text-primary" />
                      </div>
                      <h4 className="text-xl font-bold mb-2 text-foreground">Data Intelligence</h4>
                      <p className="text-muted-foreground max-w-md">
                        AI odkrywa ukryte wzorce i korelacje. Rekomendacje oparte na danych.
                        Maksymalizacja ROI z każdego bajta informacji.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom CTA */}
              {/* <div className="mt-16 text-center">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Umów bezpłatną konsultację
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
              </div> */}
            </div>
          </div>
          {/* </div> */}
        </section>

        {/* W jakich obszarach pomagamy Section */}
        {/* <section className="border-t border-border py-24 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">W jakich obszarach pomagamy?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Kompleksowe wsparcie technologiczne dostosowane do Twoich potrzeb
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
              <div className="bg-background p-8 rounded-lg border border-border hover:border-primary/50 transition-colors text-center">
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <Code2 className="size-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Algorytmy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Zaawansowane algorytmy optymalizacyjne i predykcyjne dla Twojego biznesu
                </p>
              </div>

              <div className="bg-background p-8 rounded-lg border border-border hover:border-primary/50 transition-colors text-center">
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <Layers className="size-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Dashboardy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Intuicyjne panele kontrolne z wizualizacją danych w czasie rzeczywistym
                </p>
              </div>

              <div className="bg-background p-8 rounded-lg border border-border hover:border-primary/50 transition-colors text-center">
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <Zap className="size-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Automatyzacja</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Automatyzacja procesów biznesowych eliminująca rutynowe zadania
                </p>
              </div>

              <div className="bg-background p-8 rounded-lg border border-border hover:border-primary/50 transition-colors text-center">
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <GitBranch className="size-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Integracje</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Płynna integracja z istniejącymi systemami i narzędziami
                </p>
              </div>

              <div className="bg-background p-8 rounded-lg border border-border hover:border-primary/50 transition-colors text-center">
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <Brain className="size-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">AI</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Sztuczna inteligencja i machine learning dla innowacyjnych rozwiązań
                </p>
              </div>
            </div>
          </div>
        </section> */}

        {/* Usługi Section - Co możemy dla Ciebie zrealizować */}
        <section className="border-t border-border py-24 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Jakie rozwiązania możemy dla Ciebie przygotować?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Dostarczamy rozwiązania end-to-end — od strategii i projektowania po rozwój, wdrożenie i utrzymanie.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
              <div className="bg-background p-8 rounded-lg border border-border hover:border-primary/50 transition-colors">
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Sparkles className="size-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Aplikacje fintech</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Budujemy skalowalne platformy finansowe od MVP po rozwiązania enterprise z pełną funkcjonalnością
                </p>
              </div>

              <div className="bg-background p-8 rounded-lg border border-border hover:border-primary/50 transition-colors">
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Code2 className="size-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Backend & API</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Rozwiązania backendowe, RESTful i GraphQL API, mikroserwisy i serverless architecture
                </p>
              </div>

              <div className="bg-background p-8 rounded-lg border border-border hover:border-primary/50 transition-colors">
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <GitBranch className="size-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Integracje systemów</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Płynna integracja z bankami, brokerami, giełdami oraz zewnętrznymi dostawcami usług finansowych
                </p>
              </div>

              <div className="bg-background p-8 rounded-lg border border-border hover:border-primary/50 transition-colors">
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Brain className="size-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Modele AI i ML</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Zaawansowane algorytmy uczenia maszynowego, modele predykcyjne i systemy rekomendacyjne
                </p>
              </div>

              <div className="bg-background p-8 rounded-lg border border-border hover:border-primary/50 transition-colors">
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="size-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Systemy inwestycyjne</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Kompleksowe platformy do zarządzania portfelem, analityki rynkowej i wykonywania transakcji
                </p>
              </div>

              <div className="bg-background p-8 rounded-lg border border-border hover:border-primary/50 transition-colors">
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Layers className="size-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Dashboardy finansowe</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Intuicyjne panele kontrolne z wizualizacją danych i metryk biznesowych w czasie rzeczywistym
                </p>
              </div>
            </div>

            <div className="text-center">
              <Button size="lg" asChild className="w-full sm:w-auto">
                <Link href="/services">
                  Zobacz pełną ofertę usług
                  <ArrowRight className="size-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* AI Models Section */}
        <section className="border-t border-border py-24 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Algorytmy i modele AI dla finansów</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Zaawansowane modele AI dla finansów - od predykcji po automatyzację decyzji
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
              <div className="bg-background p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
                <Brain className="size-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Modele predykcyjne</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Prognozowanie trendów rynkowych i zachowań klientów
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
                <Code2 className="size-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Algorytmy inwestycyjne</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Automatyzacja strategii tradingowych i alokacji aktywów
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
                <Shield className="size-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Risk scoring</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Ocena ryzyka inwestycyjnego i wykrywanie trendów
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
                <Target className="size-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">AI Trading Models</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Modele AI wykrywające trendy, anomalie na rynkach finansowych.
                </p>
              </div>
            </div>

            <div className="text-center">
              <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
                <Link href="/ai-models">
                  Poznaj nasze modele AI
                  <ArrowRight className="size-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="border-t border-border py-24 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Jak pracujemy?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Prosty, przejrzysty proces od pomysłu do produkcji.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="text-foreground size-16 rounded-full border border-muted-foreground/40 bg-muted flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">Discovery</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Zaczynamy od zrozumienia Twojego biznesu i celów. Omawiamy potrzeby, priorytety i zakres projektu, aby jasno zaplanować kolejne kroki.
                </p>
              </div>

              <div className="text-center">
                <div className="text-foreground size-16 rounded-full border border-muted-foreground/40 bg-muted flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">Design & Planning</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Tworzymy pierwsze makiety, projektujemy architekturę i rozpisujemy plan działania. Pracujemy iteracyjnie, tak aby każdy etap był transparentny.
                </p>
              </div>

              <div className="text-center">
                <div className="text-foreground size-16 rounded-full border border-muted-foreground/40 bg-muted flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">Development</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Budujemy aplikację w krótkich cyklach, regularnie pokazując postępy. Otrzymujesz działające wersje i masz stały wpływ na rozwój projektu.
                </p>
              </div>

              <div className="text-center">
                <div className="text-foreground size-16 rounded-full border border-muted-foreground/40 bg-muted flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="text-xl font-semibold mb-2">Launch & Support</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Wdrażamy aplikację na produkcję i zapewniamy wsparcie po uruchomieniu. Na bieżąco reagujemy na potrzeby i pomagamy w dalszym rozwoju.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Dlaczego my Section */}
        <section className="border-t border-border py-24 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Lewa kolumna – tekst główny */}
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                    Dlaczego firmy finansowe wybierają Investia.Tech?
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Łączymy doświadczenie w budowaniu systemów finansowych z praktyczną znajomością AI
                    i nowoczesnych architektur chmurowych. Pracujemy tam, gdzie technologia bezpośrednio
                    wpływa na wyniki biznesowe: w inwestycjach, ryzyku, raportowaniu i automatyzacji procesów.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Zamiast ogólnych „aplikacji”, dostarczamy rozwiązania projektowane pod konkretny
                    przypadek użycia: od modeli predykcyjnych, przez integracje z bankami i brokerami,
                    po dashboardy zarządcze i narzędzia dla zespołów analitycznych.
                  </p>

                  <ul className="space-y-2 text-muted-foreground mb-8">
                    <li>• Skupienie na sektorze finansowym i danych</li>
                    <li>• Technologia dobrana do problemu, nie odwrotnie</li>
                    <li>• Transparentny proces i jasna komunikacja</li>
                    <li>• Długoterminowe podejście, nie tylko „wdrożenie i koniec”</li>
                  </ul>

                  {/* <Button size="lg" asChild>
                    <Link href="/about">
                      Poznaj nasze podejście
                      <ArrowRight className="size-4 ml-2" />
                    </Link>
                  </Button> */}
                </div>

                {/* Prawa kolumna – 3 wyróżniki zamiast suchych liczb */}
                <div className="space-y-6">
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <Target className="size-8 text-primary mb-3" />
                    <h3 className="text-xl font-semibold mb-2">Skupienie na rozwiązaniach finansowych</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Pracujemy z firmami, które operują na danych finansowych – fintechami,
                      domami maklerskimi, działami finansowymi i SaaS B2B.
                    </p>
                  </div>

                  <div className="bg-card p-6 rounded-lg border border-border">
                    <Sparkles className="size-8 text-primary mb-3" />
                    <h3 className="text-xl font-semibold mb-2">Technologia, która ma sens biznesowy</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      AI, modele predykcyjne czy automatyzacja są dla nas narzędziem,
                      a nie celem samym w sobie. Zaczynamy od problemu, nie od stacku.
                    </p>
                  </div>

                  <div className="bg-card p-6 rounded-lg border border-border">
                    <Shield className="size-8 text-primary mb-3" />
                    <h3 className="text-xl font-semibold mb-2">Bezpieczeństwo i odpowiedzialność</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Projekty budujemy z myślą o bezpieczeństwie, zgodności z regulacjami
                      i możliwości audytu – co jest kluczowe w finansach.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="border-t border-border py-24 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Co mówią nasi klienci
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Opinie osób i firm, z którymi współpracowaliśmy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="border border-border rounded-lg p-8 bg-card">
                <div className="flex items-center gap-1 mb-4">
                  <Star className="size-5 fill-yellow-400 text-yellow-400" />
                  <Star className="size-5 fill-yellow-400 text-yellow-400" />
                  <Star className="size-5 fill-yellow-400 text-yellow-400" />
                  <Star className="size-5 fill-yellow-400 text-yellow-400" />
                  <Star className="size-5 fill-yellow-400 text-yellow-400" />
                </div>
                <Quote className="size-8 text-muted-foreground/30 mb-4" />
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Investia.Tech pomogła nam usprawnić procesy i wdrożyć kluczowe rozwiązania technologiczne. Komunikacja była szybka, a praca wykonana na wysokim poziomie.
                </p>
                <div>
                  <div className="font-semibold">Anna K.</div>
                  <div className="text-sm text-muted-foreground">CEO, TechStart</div>
                </div>
              </div>

              <div className="border border-border rounded-lg p-8 bg-card">
                <div className="flex items-center gap-1 mb-4">
                  <Star className="size-5 fill-yellow-400 text-yellow-400" />
                  <Star className="size-5 fill-yellow-400 text-yellow-400" />
                  <Star className="size-5 fill-yellow-400 text-yellow-400" />
                  <Star className="size-5 fill-yellow-400 text-yellow-400" />
                  <Star className="size-5 fill-yellow-400 text-yellow-400" />
                </div>
                <Quote className="size-8 text-muted-foreground/30 mb-4" />
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Dzięki współpracy udało nam się uruchomić pierwszą wersję produktu szybciej, niż zakładaliśmy. Świetne podejście, elastyczność i pełne zrozumienie naszych potrzeb.
                </p>
                <div>
                  <div className="font-semibold">Michał N.</div>
                  <div className="text-sm text-muted-foreground">CTO, FinanceApp</div>
                </div>
              </div>

              <div className="border border-border rounded-lg p-8 bg-card">
                <div className="flex items-center gap-1 mb-4">
                  <Star className="size-5 fill-yellow-400 text-yellow-400" />
                  <Star className="size-5 fill-yellow-400 text-yellow-400" />
                  <Star className="size-5 fill-yellow-400 text-yellow-400" />
                  <Star className="size-5 fill-yellow-400 text-yellow-400" />
                  <Star className="size-5 fill-yellow-400 text-yellow-400" />
                </div>
                <Quote className="size-8 text-muted-foreground/30 mb-4" />
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Od projektu po wdrożenie — cały proces przebiegł sprawnie i transparentnie. Aplikacja działa stabilnie, a na wsparcie zawsze można liczyć.
                </p>
                <div>
                  <div className="font-semibold">Katarzyna W.</div>
                  <div className="text-sm text-muted-foreground">Product Manager, ShopPro</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="border-t border-border py-24 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Case Studies</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Konkretne przykłady transformacji biznesowych dzięki naszym rozwiązaniom
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-5xl mx-auto">

              {/* Case Study 1 */}
              <div className="bg-card rounded-lg border border-border overflow-hidden hover:border-primary/50 transition-colors">
                {/* <div className="relative aspect-video bg-muted">
                  <img
                    src="/images/investia.tech_stock.png"
                    alt="Optymalizacja portfela inwestycyjnego"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div> */}

                <div className="relative aspect-video bg-muted">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Database className="size-24 text-muted-foreground/20" />
                  </div>
                </div>

                <div className="p-8">
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                    Inwestowanie
                  </div>

                  <h3 className="text-xl font-semibold mb-3">
                    Optymalizacja portfela inwestycyjnego z AI w Modern Portfolio Theory
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Platforma wykorzystująca modele optymalizacji portfela (MPT) oraz algorytmy uczenia maszynowego.
                    System analizuje korelacje, zmienność i ryzyko aktywów, a następnie generuje optymalne alokacje dla profilu inwestora.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 rounded-full bg-muted text-sm">Java</span>
                    <span className="px-3 py-1 rounded-full bg-muted text-sm">Quantum</span>
                    <span className="px-3 py-1 rounded-full bg-muted text-sm">A.I.</span>
                    <span className="px-3 py-1 rounded-full bg-muted text-sm">MongoDB</span>
                  </div>

                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                    <div>
                      <div className="text-xl font-bold text-primary mb-1">87%</div>
                      <div className="text-sm text-muted-foreground">Skuteczność</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-primary mb-1">+14%</div>
                      <div className="text-sm text-muted-foreground">Sharpe Ratio</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-primary mb-1">6 mies.</div>
                      <div className="text-sm text-muted-foreground">Czas wdrożenia</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Case Study 2 */}
              <div className="bg-card rounded-lg border border-border overflow-hidden hover:border-primary/50 transition-colors">
                {/* <div className="relative aspect-video bg-muted">
                  <img
                    src="/images/investia.tech_chart.png"
                    alt="System do minimalizowania ryzyka Black-Swan"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div> */}

                <div className="relative aspect-video bg-muted">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Layers className="size-24 text-muted-foreground/20" />
                  </div>
                </div>

                <div className="p-8">
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                    Analiza ryzyka
                  </div>

                  <h3 className="text-xl font-semibold mb-3">
                    System do minimalizowania ryzyka Black-Swan w portfelach inwestycyjnych
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Moduł predykcji skrajnych zdarzeń wykorzystujący modele probabilistyczne, symulacje Monte Carlo
                    i rozszerzony model Black–Scholes. System wykrywa anomalie i generuje rekomendacje redukujące
                    ekspozycję na nieprzewidywalne zdarzenia.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 rounded-full bg-muted text-sm">Java</span>
                    <span className="px-3 py-1 rounded-full bg-muted text-sm">Python</span>
                    <span className="px-3 py-1 rounded-full bg-muted text-sm">A.I.</span>
                    <span className="px-3 py-1 rounded-full bg-muted text-sm">MongoDB</span>
                  </div>

                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                    <div>
                      <div className="text-xl font-bold text-primary mb-1">−28%</div>
                      <div className="text-sm text-muted-foreground">Redukcja drawdownu</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-primary mb-1">+19%</div>
                      <div className="text-sm text-muted-foreground">Dokładniejszy model</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-primary mb-1">3.2s</div>
                      <div className="text-sm text-muted-foreground">Symulacja Monte Carlo</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Blogs Section */}
        <section className="border-t border-border py-24 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Praktyczna wiedza o AI, finansach i technologii</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Raporty, przewodniki i analizy, które pomogą Ci podejmować lepsze decyzje biznesowe dzięki algorytmom oraz A.I.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
              <div className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
                <div className="inline-block px-3 py-1 rounded-full bg-muted-foreground/10 text-muted-foreground text-xs font-medium mb-3">
                  Algoritms
                </div>
                <h3 className="text-lg font-semibold mb-2">Architektura systemów finansowych</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Praktyczne spojrzenie na skalowalność, odporność systemów i architekturę mikroserwisów stosowaną w bankowości oraz fintechach nowej generacji.
                </p>
                <div className="text-sm text-primary font-medium">
                  <Link
                    href="/blog/1"
                    className="flex items-center gap-2 text-sm text-primary font-medium"
                  >
                    12 minut czytania
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
                <div className="inline-block px-3 py-1 rounded-full bg-muted-foreground/10 text-muted-foreground text-xs font-medium mb-3">
                  Backend
                </div>
                <h3 className="text-lg font-semibold mb-2">Integracje i przetwarzanie danych</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Omówienie najlepszych praktyk w pracy z API bankowymi, przetwarzaniu real-time, data pipelines oraz projektowaniu wydajnych backendów.
                </p>
                <div className="text-sm text-primary font-medium">
                  <Link
                    href="/blog/2"
                    className="flex items-center gap-2 text-sm text-primary font-medium"
                  >
                    5 minut czytania
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
                <div className="inline-block px-3 py-1 rounded-full bg-muted-foreground/10 text-muted-foreground text-xs font-medium mb-3">
                  Algoritms
                </div>
                <h3 className="text-lg font-semibold mb-2">A.I. prediction</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Analiza nowoczesnych metod uczenia maszynowego używanych do prognozowania trendów, oceny ryzyka i automatyzacji strategii tradingowych.
                </p>
                <div className="text-sm text-primary font-medium">
                  <Link
                    href="/blog/next-js-react"
                    className="flex items-center gap-2 text-sm text-primary font-medium"
                  >
                    8 minut czytania
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
                <Link href="/blog">
                  Przeglądaj wszystkie artykuły
                  <ArrowRight className="size-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section id="newsletter" className="border-t border-border py-24 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  Bądź na bieżąco z technologią
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Zapisz się do newslettera i otrzymuj praktyczne porady,
                  case studies oraz najnowsze trendy w rozwoju oprogramowania.
                </p>
              </div>

              {/* <form className="flex flex-col sm:flex-row gap-3"> */}
              <form className="flex flex-col sm:flex-row gap-3" onSubmit={handleNewsletterSubmit}>
                <Input
                  name="email"
                  type="email"
                  placeholder="twoj.email@example.com"
                  className="flex-1"
                  required
                />
                <Button type="submit" size="lg">
                  Zapisz się
                  <ArrowRight className="size-4 ml-2" />
                </Button>
              </form>

              <p className="text-xs text-muted-foreground text-center mt-4">
                Wyślemy ci maksymalnie 2 emaile miesięcznie. Możesz się wypisać w każdej chwili.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="border-t border-border py-24 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Często zadawane pytania</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Odpowiedzi na najczęściej zadawane pytania o nasze usługi i współpracę
              </p>
            </div>

            <div className="max-w-5xl mx-auto space-y-4">
              <div className="bg-background p-6 rounded-lg border border-border">
                <h3 className="text-lg font-semibold mb-2">Jak długo trwa realizacja projektu?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Czas realizacji zależy od złożoności projektu. Proste MVP możemy dostarczyć w 6-8 tygodni, podczas gdy
                  kompleksowe rozwiązania enterprise mogą wymagać 6-12 miesięcy. Po wstępnej konsultacji przedstawiamy
                  szczegółowy harmonogram.
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg border border-border">
                <h3 className="text-lg font-semibold mb-2">Jakie technologie wykorzystujecie?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Specjalizujemy się w nowoczesnym stacku: React, Next.js, Node.js, Python dla backendu, PostgreSQL,
                  MongoDB dla baz danych. W projektach AI używamy TensorFlow, PyTorch, OpenAI API. Dostosowujemy
                  technologie do specyfiki projektu.
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg border border-border">
                <h3 className="text-lg font-semibold mb-2">Czy oferujecie wsparcie po wdrożeniu?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Tak, oferujemy pakiety wsparcia technicznego i utrzymania aplikacji. Obejmują one monitoring,
                  aktualizacje, bugfixy oraz rozwój funkcjonalności. Dostępne są różne poziomy SLA dostosowane do
                  potrzeb.
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg border border-border">
                <h3 className="text-lg font-semibold mb-2">Jak wygląda proces współpracy?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Zaczynamy od bezpłatnej konsultacji i warsztatów discovery. Następnie tworzymy dokumentację techniczną
                  i prototypy. Pracujemy w sprintach z regularnymi demo i feedbackiem. Stosujemy metodyki Agile/Scrum
                  dla elastyczności.
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg border border-border">
                <h3 className="text-lg font-semibold mb-2">Jakie są koszty wdrożenia rozwiązań AI?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Koszty projektów AI zaczynają się od 50k PLN dla prostych integracji (chatboty, podstawowa analityka)
                  do 500k+ PLN dla zaawansowanych systemów predykcyjnych. Ostateczna wycena zależy od złożoności
                  algorytmów i wolumenu danych.
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg border border-border">
                <h3 className="text-lg font-semibold mb-2">Czy pracujecie z startupami?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Tak, współpracujemy ze startupami oferując elastyczne modele cenowe. Możemy rozliczać się equity,
                  oferować rabaty dla wczesnych stadiów lub model success fee. Pomagamy w budowie MVP i skalowaniu
                  produktu.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Simple Contact Form Section */}
        <section className="border-t border-border py-24 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Skontaktuj się z nami</h2>
                <p className="text-lg text-muted-foreground">
                  Masz pytania? Wypełnij formularz, a odpowiemy najszybciej jak to możliwe.
                </p>
              </div>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Imię i nazwisko
                    </label>
                    <Input id="name" type="text" placeholder="Jan Kowalski" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="jan@example.com" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Temat
                  </label>
                  <Input id="subject" type="text" placeholder="W czym możemy pomóc?" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Wiadomość
                  </label>
                  <Textarea id="message" placeholder="Opisz swój projekt lub zadaj pytanie..." rows={5} required />
                </div>
                <div className="text-center">
                  <Button type="submit" size="lg" className="w-full md:w-auto min-w-[200px]">
                    Wyślij wiadomość
                    <ArrowRight className="size-4 ml-2" />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="border-t border-border py-24 md:py-32 flex items-center bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-balance">
                Masz pomysł na projekt?
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed text-pretty">
                Porozmawiajmy o tym, jak możemy pomóc w realizacji Twojej wizji.
                Umów się na bezpłatną konsultację.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" asChild className="w-full sm:w-auto">
                  <Link href="/contact">
                    Umów konsultację online
                    <ArrowRight className="size-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
