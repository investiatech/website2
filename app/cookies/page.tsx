import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Cookie, Settings, BarChart, Shield, Eye, CheckCircle } from 'lucide-react'

export default function CookiesPage() {
    return (
        <>
            <Header />
            <main>
                {/* Hero Section */}
                <section className="container mx-auto px-4 py-24 md:py-32">
                    <div className="max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                            <Cookie className="size-4" />
                            Ostatnia aktualizacja: 1 stycznia 2025
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                            Polityka cookies
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Informacje o wykorzystywanych plikach cookies i technologiach śledzących
                        </p>
                    </div>
                </section>

                {/* Content Section */}
                <section className="border-t border-border py-16 md:py-24">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto space-y-16">

                            {/* Czym są cookies */}
                            <div>
                                <div className="flex items-start gap-4 mb-6">

                                    <div>
                                        <h2 className="text-2xl font-bold mb-2">1. Czym są pliki cookies?</h2>
                                        <p className="text-muted-foreground">Podstawowe informacje o technologii cookies</p>
                                    </div>
                                </div>
                                <div className="space-y-4 text-muted-foreground leading-relaxed">
                                    <p>
                                        Pliki cookies (tzw. "ciasteczka") to małe pliki tekstowe, które są zapisywane na Twoim urządzeniu (komputerze, tablecie, smartfonie) podczas przeglądania stron internetowych.
                                    </p>
                                    <p>
                                        Cookies umożliwiają rozpoznanie Twojego urządzenia i odpowiednie dopasowanie treści strony do Twoich preferencji. Zawierają informacje niezbędne do prawidłowego funkcjonowania witryny oraz pomagają nam w jej ulepszaniu.
                                    </p>
                                </div>
                            </div>

                            {/* Rodzaje cookies */}
                            <div>
                                <div className="flex items-start gap-4 mb-6">
                                    <div>
                                        <h2 className="text-2xl font-bold mb-2">2. Jakie rodzaje cookies wykorzystujemy?</h2>
                                        <p className="text-muted-foreground">Kategorie plików cookies używanych na naszej stronie</p>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="bg-background border border-border p-6 rounded-lg">
                                        <div className="flex items-start gap-3 mb-3">
                                            <CheckCircle className="size-5 text-primary shrink-0 mt-1" />
                                            <div>
                                                <h3 className="font-semibold mb-2">Cookies niezbędne (wymagane)</h3>
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    Te pliki są konieczne do prawidłowego funkcjonowania strony. Umożliwiają korzystanie z podstawowych funkcji, takich jak logowanie, nawigacja czy bezpieczeństwo. Nie można ich wyłączyć.
                                                </p>
                                                <div className="mt-3 text-sm">
                                                    <strong>Przykłady:</strong> sesja użytkownika, koszyk, preferencje językowe
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-background border border-border p-6 rounded-lg">
                                        <div className="flex items-start gap-3 mb-3">
                                            <BarChart className="size-5 text-primary shrink-0 mt-1" />
                                            <div>
                                                <h3 className="font-semibold mb-2">Cookies analityczne</h3>
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    Służą do zbierania informacji o sposobie korzystania ze strony. Pomagają nam zrozumieć, które sekcje są najbardziej popularne i jak użytkownicy poruszają się po witrynie.
                                                </p>
                                                <div className="mt-3 text-sm">
                                                    <strong>Narzędzia:</strong> Google Analytics, Microsoft Clarity
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-background border border-border p-6 rounded-lg">
                                        <div className="flex items-start gap-3 mb-3">
                                            <Eye className="size-5 text-primary shrink-0 mt-1" />
                                            <div>
                                                <h3 className="font-semibold mb-2">Cookies marketingowe</h3>
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    Wykorzystywane do śledzenia użytkowników między stronami w celu wyświetlania reklam, które są dla nich istotne i angażujące.
                                                </p>
                                                <div className="mt-3 text-sm">
                                                    <strong>Narzędzia:</strong> Google Ads, Facebook Pixel, LinkedIn Insight Tag
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-background border border-border p-6 rounded-lg">
                                        <div className="flex items-start gap-3 mb-3">
                                            <Settings className="size-5 text-primary shrink-0 mt-1" />
                                            <div>
                                                <h3 className="font-semibold mb-2">Cookies funkcjonalne</h3>
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    Pozwalają na zapamiętanie wyborów dokonanych przez użytkownika (np. język, region) w celu zapewnienia bardziej spersonalizowanego doświadczenia.
                                                </p>
                                                <div className="mt-3 text-sm">
                                                    <strong>Przykłady:</strong> preferencje wyświetlania, ustawienia dostępności
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Zarządzanie cookies */}
                            <div>
                                <div className="flex items-start gap-4 mb-6">
                                    <div>
                                        <h2 className="text-2xl font-bold mb-2">3. Jak zarządzać plikami cookies?</h2>
                                        <p className="text-muted-foreground">Masz pełną kontrolę nad cookies</p>
                                    </div>
                                </div>
                                <div className="space-y-4 text-muted-foreground leading-relaxed">
                                    <p>
                                        Możesz w każdej chwili zmienić ustawienia dotyczące plików cookies lub je usunąć. Poniżej znajdziesz instrukcje dla najpopularniejszych przeglądarek:
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="bg-muted/30 p-4 rounded-lg">
                                            <h3 className="font-semibold mb-2">Google Chrome</h3>
                                            <p className="text-sm">Ustawienia → Prywatność i bezpieczeństwo → Pliki cookie i inne dane witryn</p>
                                        </div>
                                        <div className="bg-muted/30 p-4 rounded-lg">
                                            <h3 className="font-semibold mb-2">Mozilla Firefox</h3>
                                            <p className="text-sm">Opcje → Prywatność i bezpieczeństwo → Ciasteczka i dane stron</p>
                                        </div>
                                        <div className="bg-muted/30 p-4 rounded-lg">
                                            <h3 className="font-semibold mb-2">Safari</h3>
                                            <p className="text-sm">Preferencje → Prywatność → Zarządzaj danymi witryn</p>
                                        </div>
                                        <div className="bg-muted/30 p-4 rounded-lg">
                                            <h3 className="font-semibold mb-2">Microsoft Edge</h3>
                                            <p className="text-sm">Ustawienia → Pliki cookie i uprawnienia witryny → Zarządzaj plikami cookie</p>
                                        </div>
                                    </div>
                                    <div className="p-4 rounded-r-lg mt-6">
                                        <p className="font-semibold text-foreground mb-2">Uwaga:</p>
                                        <p>
                                            Wyłączenie niektórych plików cookies może wpłynąć na funkcjonalność strony i uniemożliwić korzystanie z niektórych funkcji.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Cookies stron trzecich */}
                            <div>
                                <h2 className="text-2xl font-bold mb-4">4. Cookies stron trzecich</h2>
                                <div className="space-y-4 text-muted-foreground leading-relaxed">
                                    <p>
                                        Nasza strona może wykorzystywać cookies pochodzące od zaufanych partnerów trzecich w celach analitycznych i marketingowych:
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 ml-4">
                                        <li><strong>Google Analytics</strong> - analiza ruchu na stronie</li>
                                        <li><strong>Google Ads</strong> - remarketing i kampanie reklamowe</li>
                                        <li><strong>Facebook Pixel</strong> - śledzenie konwersji z reklam</li>
                                        <li><strong>LinkedIn Insight Tag</strong> - analityka kampanii B2B</li>
                                    </ul>
                                    <p className="mt-4">
                                        Te usługi mogą wykorzystywać cookies do identyfikacji Twojego urządzenia. Ich polityki prywatności dostępne są na stronach odpowiednich dostawców.
                                    </p>
                                </div>
                            </div>

                            {/* Privacy */}
                            <div>
                                <h2 className="text-2xl font-bold mb-4">5. Pliki prywatności</h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    Dbamy o bezpieczeństwo i poufność Twoich danych. Zasady ich przetwarzania,
                                    przechowywania oraz ochrony opisujemy szczegółowo w naszej{' '}
                                    <a href="/privacy-policy" className="text-primary hover:underline">Polityce prywatności</a>.
                                </p>
                            </div>

                            {/* Kontakt */}
                            <div>
                                <h2 className="text-2xl font-bold mb-4">6. Kontakt</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Jeśli masz pytania dotyczące naszej polityki cookies, skontaktuj się z nami:
                                </p>
                                <div className="mt-4 space-y-2 text-muted-foreground">
                                    <p>E-mail: office@investia.tech</p>
                                    <p>Telefon: +48 723 857 770</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
