import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Shield, Lock, Eye, Database, FileText, Users } from 'lucide-react'

export default function PrivacyPolicyPage() {
    return (
        <>
            <Header />
            <main>
                {/* Hero Section */}
                <section className="container mx-auto px-4 py-24 md:py-32">
                    <div className="max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                            <Shield className="size-4" />
                            Obowiązuje od: 1 stycznia 2025
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                            Polityka prywatności
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Dokument opisujący zasady przetwarzania danych osobowych użytkowników naszych usług
                        </p>
                    </div>
                </section>

                {/* Content Section */}
                <section className="border-t border-border py-16 md:py-24">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto space-y-16">

                            {/* Administrator danych */}
                            <div>
                                <div className="flex items-start gap-4 mb-6">
                                    <div>
                                        <h2 className="text-2xl font-bold mb-2">1. Administrator danych osobowych</h2>
                                        <p className="text-muted-foreground">Kim jesteśmy i jak możesz się z nami skontaktować</p>
                                    </div>
                                </div>
                                <div className="space-y-4 text-muted-foreground leading-relaxed">
                                    <p>
                                        Administratorem Twoich danych osobowych jest [Nazwa Firmy] z siedzibą w [Adres], wpisana do Krajowego Rejestru Sądowego pod numerem KRS: [numer], NIP: [numer].
                                    </p>
                                    <p>
                                        Możesz skontaktować się z nami w sprawach dotyczących ochrony danych osobowych:
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 ml-4">
                                        <li>Pisemnie na adres: Investia.Tech P.S.A. 00-020 Warszawa ul. Chmielna 2/31</li>
                                        <li>E-mail: office@investia.tech</li>
                                        <li>Telefon: +48 723 857 770</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Zakres przetwarzania */}
                            <div>
                                <div className="flex items-start gap-4 mb-6">
                                    <div>
                                        <h2 className="text-2xl font-bold mb-2">2. Zakres przetwarzanych danych</h2>
                                        <p className="text-muted-foreground">Jakie dane zbieramy i w jakim celu</p>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="bg-muted/30 p-6 rounded-lg">
                                        <h3 className="font-semibold mb-3">Dane identyfikacyjne</h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Imię, nazwisko, adres e-mail, numer telefonu - zbierane podczas rejestracji konta, składania zamówień lub kontaktu z nami.
                                        </p>
                                    </div>
                                    <div className="bg-muted/30 p-6 rounded-lg">
                                        <h3 className="font-semibold mb-3">Dane techniczne</h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Adres IP, typ przeglądarki, system operacyjny, dane o urządzeniu - zbierane automatycznie w celu zapewnienia bezpieczeństwa i optymalizacji usług.
                                        </p>
                                    </div>
                                    <div className="bg-muted/30 p-6 rounded-lg">
                                        <h3 className="font-semibold mb-3">Dane o aktywności</h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Historia przeglądania, preferencje, interakcje z platformą - w celu personalizacji doświadczeń i ulepszania usług.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Cele przetwarzania */}
                            <div>
                                <div className="flex items-start gap-4 mb-6">
                                    <div>
                                        <h2 className="text-2xl font-bold mb-2">3. Cele i podstawy prawne przetwarzania</h2>
                                        <p className="text-muted-foreground">Dlaczego przetwarzamy Twoje dane</p>
                                    </div>
                                </div>
                                <div className="space-y-4 text-muted-foreground leading-relaxed">
                                    <p>Przetwarzamy Twoje dane osobowe w następujących celach:</p>
                                    <ul className="list-disc list-inside space-y-3 ml-4">
                                        <li><strong>Świadczenie usług</strong> - na podstawie umowy (art. 6 ust. 1 lit. b RODO)</li>
                                        <li><strong>Marketing</strong> - na podstawie Twojej zgody (art. 6 ust. 1 lit. a RODO)</li>
                                        <li><strong>Wypełnianie obowiązków prawnych</strong> - np. rachunkowych i podatkowych (art. 6 ust. 1 lit. c RODO)</li>
                                        <li><strong>Ochrona przed nadużyciami</strong> - w naszym prawnie uzasadnionym interesie (art. 6 ust. 1 lit. f RODO)</li>
                                        <li><strong>Analityka i ulepszanie usług</strong> - w naszym prawnie uzasadnionym interesie (art. 6 ust. 1 lit. f RODO)</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Bezpieczeństwo */}
                            <div>
                                <div className="flex items-start gap-4 mb-6">
                                    <div>
                                        <h2 className="text-2xl font-bold mb-2">4. Bezpieczeństwo danych</h2>
                                        <p className="text-muted-foreground">Jak chronimy Twoje informacje</p>
                                    </div>
                                </div>
                                <div className="space-y-4 text-muted-foreground leading-relaxed">
                                    <p>
                                        Stosujemy zaawansowane środki techniczne i organizacyjne w celu ochrony Twoich danych osobowych:
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 ml-4">
                                        <li>Szyfrowanie danych w tranzycie (TLS 1.3) i w spoczynku (AES-256)</li>
                                        <li>Regularne audyty bezpieczeństwa i testy penetracyjne</li>
                                        <li>Ograniczony dostęp do danych tylko dla upoważnionych pracowników</li>
                                        <li>Monitoring i detekcja zagrożeń w czasie rzeczywistym</li>
                                        <li>Regularne kopie zapasowe z szyfrowaniem</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Bezpieczeństwo */}
                            <div>
                                <div className="flex items-start gap-4 mb-6">
                                    <div>
                                        <h2 className="text-2xl font-bold mb-2">4. Bezpieczeństwo danych</h2>
                                        <p className="text-muted-foreground">Jak chronimy Twoje informacje</p>
                                    </div>
                                </div>
                                <div className="space-y-4 text-muted-foreground leading-relaxed">
                                    <p>
                                        Stosujemy zaawansowane środki techniczne i organizacyjne w celu ochrony Twoich danych osobowych:
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 ml-4">
                                        <li>Szyfrowanie danych w tranzycie (TLS 1.3) i w spoczynku (AES-256)</li>
                                        <li>Regularne audyty bezpieczeństwa i testy penetracyjne</li>
                                        <li>Ograniczony dostęp do danych tylko dla upoważnionych pracowników</li>
                                        <li>Monitoring i detekcja zagrożeń w czasie rzeczywistym</li>
                                        <li>Regularne kopie zapasowe z szyfrowaniem</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Prawa użytkownika */}
                            <div>
                                <div className="flex items-start gap-4 mb-6">
                                    <div>
                                        <h2 className="text-2xl font-bold mb-2">5. Twoje prawa</h2>
                                        <p className="text-muted-foreground">Jakie prawa przysługują Ci w związku z przetwarzaniem danych</p>
                                    </div>
                                </div>
                                <div className="space-y-4 text-muted-foreground leading-relaxed">
                                    <p>Zgodnie z RODO przysługują Ci następujące prawa:</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="bg-muted/30 p-4 rounded-lg">
                                            <h3 className="font-semibold mb-2">Prawo dostępu</h3>
                                            <p className="text-sm">Możesz uzyskać informacje o przetwarzanych danych</p>
                                        </div>
                                        <div className="bg-muted/30 p-4 rounded-lg">
                                            <h3 className="font-semibold mb-2">Prawo do sprostowania</h3>
                                            <p className="text-sm">Możesz poprawić nieprawidłowe dane</p>
                                        </div>
                                        <div className="bg-muted/30 p-4 rounded-lg">
                                            <h3 className="font-semibold mb-2">Prawo do usunięcia</h3>
                                            <p className="text-sm">Możesz żądać usunięcia danych</p>
                                        </div>
                                        <div className="bg-muted/30 p-4 rounded-lg">
                                            <h3 className="font-semibold mb-2">Prawo do ograniczenia</h3>
                                            <p className="text-sm">Możesz ograniczyć przetwarzanie</p>
                                        </div>
                                        <div className="bg-muted/30 p-4 rounded-lg">
                                            <h3 className="font-semibold mb-2">Prawo do przenoszenia</h3>
                                            <p className="text-sm">Możesz przenieść dane do innego administratora</p>
                                        </div>
                                        <div className="bg-muted/30 p-4 rounded-lg">
                                            <h3 className="font-semibold mb-2">Prawo sprzeciwu</h3>
                                            <p className="text-sm">Możesz wnieść sprzeciw wobec przetwarzania</p>
                                        </div>
                                    </div>
                                    <p className="mt-6">
                                        Aby skorzystać z przysługujących Ci praw, skontaktuj się z nami pod adresem privacy@example.com
                                    </p>
                                </div>
                            </div>

                            {/* Cookies */}
                            <div>
                                <h2 className="text-2xl font-bold mb-4">6. Pliki cookies</h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    Nasza strona wykorzystuje pliki cookies. Szczegółowe informacje znajdziesz w naszej{' '}
                                    <a href="/cookies" className="text-primary hover:underline">Polityce cookies</a>.
                                </p>
                            </div>

                            {/* Zmiany */}
                            <div>
                                <h2 className="text-2xl font-bold mb-4">7. Zmiany w polityce prywatności</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Zastrzegamy sobie prawo do wprowadzania zmian w niniejszej polityce prywatności. O wszelkich istotnych zmianach poinformujemy Cię poprzez wiadomość e-mail lub powiadomienie na stronie. Data ostatniej aktualizacji jest zawsze widoczna na początku dokumentu.
                                </p>
                            </div>

                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
