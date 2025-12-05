import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Brain, Code2, Shield, Target, TrendingUp, AlertCircle, Lock, Zap, ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function AIModelsPage() {
  return (
    <>
      <Header />
      <main>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
              Inteligentne algorytmy i modele AI dla {' '}
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-blue-600 to-blue-800">
                sektora finansowego
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 text-pretty">
              Tworzymy wyspecjalizowane modele AI i algorytmy analityczne dla sektora finansowego, od predykcji rynkowych po automatyzację decyzji inwestycyjnych.
            </p>
          </div>
        </section>

        {/* Portfolio modeli AI */}
        <section className="border-t border-border py-24 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Portfolio modeli AI
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sprawdzone rozwiązania AI dostosowane do potrzeb branży finansowej
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-background p-8 rounded-lg border border-border hover:border-primary/50 transition-colors">
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="size-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Modele predykcyjne</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Prognozowanie cen akcji, kryptowalut i innych aktywów z wykorzystaniem deep learning i analiz szeregów czasowych.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="size-4 text-primary mt-0.5 shrink-0" />
                    <span>LSTM dla szeregów czasowych</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="size-4 text-primary mt-0.5 shrink-0" />
                    <span>Transformer models dla danych finansowych</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="size-4 text-primary mt-0.5 shrink-0" />
                    <span>Ensemble learning dla lepszej dokładności</span>
                  </li>
                </ul>
              </div>

              <div className="bg-background p-8 rounded-lg border border-border hover:border-primary/50 transition-colors">
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Code2 className="size-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Algorytmy inwestycyjne</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Automatyczne strategie tradingowe, optymalizacja portfeli i systemy alokacji aktywów oparte na AI.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="size-4 text-primary mt-0.5 shrink-0" />
                    <span>Algorytmiczne strategie trading</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="size-4 text-primary mt-0.5 shrink-0" />
                    <span>Portfolio optimization z RL</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="size-4 text-primary mt-0.5 shrink-0" />
                    <span>Market making algorithms</span>
                  </li>
                </ul>
              </div>

              <div className="bg-background p-8 rounded-lg border border-border hover:border-primary/50 transition-colors">
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="size-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Risk scoring</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Ocena ryzyka kredytowego, scoring klientów i modele scoringowe dla instytucji finansowych.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="size-4 text-primary mt-0.5 shrink-0" />
                    <span>Credit scoring models</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="size-4 text-primary mt-0.5 shrink-0" />
                    <span>Customer risk profiling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="size-4 text-primary mt-0.5 shrink-0" />
                    <span>Portfolio risk assessment</span>
                  </li>
                </ul>
              </div>

              <div className="bg-background p-8 rounded-lg border border-border hover:border-primary/50 transition-colors">
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <AlertCircle className="size-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Wykrywanie anomalii</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Systemy detekcji fraud, wykrywanie nietypowych transakcji i monitoring bezpieczeństwa w czasie rzeczywistym.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="size-4 text-primary mt-0.5 shrink-0" />
                    <span>Real-time fraud detection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="size-4 text-primary mt-0.5 shrink-0" />
                    <span>Anomaly detection algorithms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="size-4 text-primary mt-0.5 shrink-0" />
                    <span>Pattern recognition dla bezpieczeństwa</span>
                  </li>
                </ul>
              </div>

              <div className="bg-background p-8 rounded-lg border border-border hover:border-primary/50 transition-colors">
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Brain className="size-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">NLP dla finansów</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Analiza sentymentu rynku, przetwarzanie raportów finansowych i ekstakcja informacji z dokumentów.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="size-4 text-primary mt-0.5 shrink-0" />
                    <span>Market sentiment analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="size-4 text-primary mt-0.5 shrink-0" />
                    <span>Financial document processing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="size-4 text-primary mt-0.5 shrink-0" />
                    <span>News impact prediction</span>
                  </li>
                </ul>
              </div>

              <div className="bg-background p-8 rounded-lg border border-border hover:border-primary/50 transition-colors">
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Zap className="size-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Reinforcement Learning</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Agenty uczące się przez interakcję z rynkiem, adaptacyjne strategie i dynamiczna optymalizacja.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="size-4 text-primary mt-0.5 shrink-0" />
                    <span>Adaptive trading agents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="size-4 text-primary mt-0.5 shrink-0" />
                    <span>Dynamic portfolio rebalancing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="size-4 text-primary mt-0.5 shrink-0" />
                    <span>Market making optimization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Przykłady zastosowań */}
        <section className="border-t border-border py-24 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Przykłady zastosowań
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Zobacz, jak nasze modele AI rozwiązują rzeczywiste problemy biznesowe
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              <div className="bg-card p-8 rounded-lg border border-border">
                <div className="flex items-start gap-4">
                  <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <TrendingUp className="size-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Platforma tradingowa z predykcjami AI</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      System dla firmy inwestycyjnej wykorzystujący modele LSTM do prognozowania cen akcji.
                      Model analizuje dane historyczne, volume trading oraz news sentiment.
                    </p>
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                      <div>
                        <div className="text-lg font-bold text-primary mb-1">78%</div>
                        <div className="text-sm text-muted-foreground">Dokładność predykcji</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-primary mb-1">24/7</div>
                        <div className="text-sm text-muted-foreground">Monitoring real-time</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-primary mb-1">+42%</div>
                        <div className="text-sm text-muted-foreground">ROI w 6 miesięcy</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card p-8 rounded-lg border border-border">
                <div className="flex items-start gap-4">
                  <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <AlertCircle className="size-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">System analizy danych rynkowych</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Monitoruje wykresy, wolumen i sentyment rynkowy, wykrywając nienaturalne zjawiska oraz nieefektywności, które mogą być okazją lub zagrożeniem dla strategii inwestycyjnych.
                    </p>
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                      <div>
                        <div className="text-lg font-bold text-primary mb-1">96%</div>
                        <div className="text-sm text-muted-foreground">Trafność detekcji</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-primary mb-1">0.5s</div>
                        <div className="text-sm text-muted-foreground">Czas analizy</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-primary mb-1">$8M</div>
                        <div className="text-sm text-muted-foreground">Zapobiegł stratom</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card p-8 rounded-lg border border-border">
                <div className="flex items-start gap-4">
                  <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Target className="size-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Credit scoring dla fintech</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Model ML dla platformy pożyczkowej oceniający zdolność kredytową klientów na podstawie danych alternatywnych.
                      Gradient boosting z automatyczną selekcją cech.
                    </p>
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                      <div>
                        <div className="text-lg font-bold text-primary mb-1">89%</div>
                        <div className="text-sm text-muted-foreground">AUC score</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-primary mb-1">-35%</div>
                        <div className="text-sm text-muted-foreground">Spadek defaultów</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-primary mb-1">2min</div>
                        <div className="text-sm text-muted-foreground">Czas decyzji</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bezpieczeństwo modeli */}
        <section className="border-t border-border py-24 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Bezpieczeństwo modeli AI
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                W finansach bezpieczeństwo jest kluczowe - tak projektujemy nasze modele
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-background p-8 rounded-lg border border-border">
                <Lock className="size-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Encryption & Privacy</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Wszystkie dane trenowane i przetwarzane przez modele są szyfrowane end-to-end.
                  Stosujemy differential privacy dla ochrony danych klientów.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="size-4 text-primary mt-0.5" />
                    <span>AES-256 encryption dla danych at-rest</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="size-4 text-primary mt-0.5" />
                    <span>TLS 1.3 dla transmisji danych</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="size-4 text-primary mt-0.5" />
                    <span>Differential privacy w treningu</span>
                  </li>
                </ul>
              </div>

              <div className="bg-background p-8 rounded-lg border border-border">
                <Shield className="size-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Model Validation</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Każdy model przechodzi rygorystyczny proces walidacji i testowania przed wdrożeniem.
                  Continuous monitoring wykrywa drift i anomalie.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="size-4 text-primary mt-0.5" />
                    <span>Backtesting na danych historycznych</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="size-4 text-primary mt-0.5" />
                    <span>A/B testing przed pełnym wdrożeniem</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="size-4 text-primary mt-0.5" />
                    <span>Real-time model performance monitoring</span>
                  </li>
                </ul>
              </div>

              <div className="bg-background p-8 rounded-lg border border-border">
                <Target className="size-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Explainability</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Modele AI w finansach muszą być wyjaśnialne. Używamy SHAP values, LIME oraz custom interpretability tools.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="size-4 text-primary mt-0.5" />
                    <span>Feature importance analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="size-4 text-primary mt-0.5" />
                    <span>Decision paths visualization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="size-4 text-primary mt-0.5" />
                    <span>Audit trail dla wszystkich predykcji</span>
                  </li>
                </ul>
              </div>

              <div className="bg-background p-8 rounded-lg border border-border">
                <Zap className="size-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Compliance & Governance</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Nasze modele spełniają wymogi regulacyjne GDPR, MiFID II oraz standardy bankowości.
                  Pełna dokumentacja i governance framework.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="size-4 text-primary mt-0.5" />
                    <span>GDPR compliant data handling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="size-4 text-primary mt-0.5" />
                    <span>MiFID II requirements adherence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="size-4 text-primary mt-0.5" />
                    <span>Model governance documentation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Jak działają predykcje */}
        <section className="border-t border-border py-24 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Jak działają predykcje?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Od danych po decyzje - poznaj proces działania naszych modeli AI
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="size-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shrink-0">
                      1
                    </div>
                    <div className="w-px h-full bg-border mt-4"></div>
                  </div>
                  <div className="pb-12">
                    <h3 className="text-xl font-semibold mb-2">Zbieranie i preprocessing danych</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Model pobiera dane z różnych źródeł: ceny historyczne, volume, news sentiment, dane makroekonomiczne.
                      Dane są czyszczone, normalizowane i transformowane do odpowiedniego formatu.
                      Outliers są wykrywane i obsługiwane zgodnie ze strategią biznesową.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="size-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shrink-0">
                      2
                    </div>
                    <div className="w-px h-full bg-border mt-4"></div>
                  </div>
                  <div className="pb-12">
                    <h3 className="text-xl font-semibold mb-2">Feature engineering</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Tworzenie zaawansowanych cech: technical indicators (RSI, MACD, Bollinger Bands),
                      rolling statistics, lag features dla szeregów czasowych.
                      Feature selection eliminuje nieistotne zmienne i redukuje wymiarowość.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="size-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shrink-0">
                      3
                    </div>
                    <div className="w-px h-full bg-border mt-4"></div>
                  </div>
                  <div className="pb-12">
                    <h3 className="text-xl font-semibold mb-2">Model inference</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Przetworzone dane trafiają do wytrenowanego modelu (LSTM, Transformer, XGBoost).
                      Model generuje predykcje wraz z confidence intervals.
                      W przypadku ensemble - agregacja wyników z wielu modeli dla większej stabilności.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="size-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shrink-0">
                      4
                    </div>
                    <div className="w-px h-full bg-border mt-4"></div>
                  </div>
                  <div className="pb-12">
                    <h3 className="text-xl font-semibold mb-2">Post-processing i walidacja</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Wyniki przechodzą walidację biznesową: sprawdzenie czy mieszczą się w rozsądnych granicach,
                      konfrontacja z regułami domenowymi. Generowane są wyjaśnienia (SHAP values) dla każdej predykcji.
                      Risk checks weryfikują czy model nie proponuje zbyt ryzykownych decyzji.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="size-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shrink-0">
                      5
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Delivery i monitoring</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Wyniki są dostarczane przez API w czasie rzeczywistym lub zapisywane do bazy danych.
                      System monitoruje performance modelu: accuracy metrics, latency, drift detection.
                      Feedback loop pozwala na continuous learning i retraining modelu.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-border py-24 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-balance">
                Gotowy na wdrożenie AI w swojej firmie?
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed text-pretty">
                Porozmawiajmy o tym, jak modele AI mogą zwiększyć efektywność Twojego biznesu finansowego.
                Umów się na bezpłatną konsultację.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Umów konsultacje online
                    <ArrowRight className="size-4 ml-2" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/services">Zobacz usługi</Link>
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
