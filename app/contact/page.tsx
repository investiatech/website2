import { Mail, Phone, MapPin, Code, Cpu, Sparkles, Shield, Database, Cloud } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { handleContactSubmit } from '../lib/handleContactSubmit'

export default function ContactPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen">
                {/* Hero Section */}
                <section className="container mx-auto px-4 py-24 md:py-32">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
                            Skontaktuj się z {' '}
                            <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-blue-600 to-blue-800">
                                Investia.Tech
                            </span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed mb-8 text-pretty">
                            Napisz do nas, jeśli szukasz partnera w obszarze AI, quantum computingu
                            lub zaawansowanej analityki dla sektora finansowego. Odpowiadamy zwykle w ciągu 24 godzin.
                        </p>
                    </div>
                </section>

                <section className="py-24 md:py-32 border-t border-border">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <div className="grid md:grid-cols-2 gap-12">
                                {/* Contact Form */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-6">Wyślij wiadomość</h2>
                                    <form className="space-y-6" onSubmit={handleContactSubmit}>
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-medium">
                                                Imię i nazwisko
                                            </label>
                                            <Input
                                                id="name"
                                                type="text"
                                                placeholder="Jan Kowalski"
                                                required
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-medium">
                                                Email
                                            </label>
                                            <Input
                                                id="email"
                                                type="email"
                                                placeholder="jan@przyklad.pl"
                                                required
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="phone" className="text-sm font-medium">
                                                Telefon
                                            </label>
                                            <Input
                                                id="phone"
                                                type="tel"
                                                placeholder="+48 123 456 789"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="subject" className="text-sm font-medium">
                                                Temat
                                            </label>
                                            <Input
                                                id="subject"
                                                type="text"
                                                placeholder="Zapytanie o współpracę"
                                                required
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="message" className="text-sm font-medium">
                                                Wiadomość
                                            </label>
                                            <Textarea
                                                id="message"
                                                placeholder="Opowiedz nam o swoim projekcie..."
                                                rows={6}
                                                required
                                            />
                                        </div>

                                        <Button type="submit" size="lg" className="w-full">
                                            Wyślij wiadomość
                                        </Button>
                                    </form>
                                </div>

                                {/* Contact Information */}
                                <div className="space-y-8">
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-6">
                                            Informacje kontaktowe
                                        </h2>
                                        <p className="text-muted-foreground mb-8">
                                            Odpowiadamy na wszystkie zapytania w ciągu 24 godzin.
                                            Skontaktuj się z nami w dogodny dla Ciebie sposób.
                                        </p>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="flex gap-4">
                                            <div className="flex items-center justify-center size-12 rounded-lg border border-border shrink-0">
                                                <Mail className="size-5 text-muted-foreground" />
                                            </div>
                                            <div>
                                                <h3 className="font-medium mb-1">Email</h3>
                                                <p className="text-sm text-muted-foreground">
                                                    office@investia.tech
                                                </p>
                                                {/* <p className="text-sm text-muted-foreground">
                                                    projekty@investia.tech
                                                </p> */}
                                            </div>
                                        </div>

                                        <div className="flex gap-4">
                                            <div className="flex items-center justify-center size-12 rounded-lg border border-border shrink-0">
                                                <Phone className="size-5 text-muted-foreground" />
                                            </div>
                                            <div>
                                                <h3 className="font-medium mb-1">Telefon</h3>
                                                <p className="text-sm text-muted-foreground">
                                                    +48 723857770
                                                </p>
                                                <p className="text-sm text-muted-foreground">
                                                    Pon-Pt: 9:00 - 18:00
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex gap-4">
                                            <div className="flex items-center justify-center size-12 rounded-lg border border-border shrink-0">
                                                <MapPin className="size-5 text-muted-foreground" />
                                            </div>
                                            <div>
                                                <h3 className="font-medium mb-1">Adres</h3>
                                                <p className="text-sm text-muted-foreground">
                                                    ul. Chmielna 2 / 31
                                                </p>
                                                <p className="text-sm text-muted-foreground">
                                                    00-020 Warszawa, Polska
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-8">
                                        <h3 className="font-medium mb-4">Godziny pracy</h3>
                                        <div className="space-y-2 text-sm">
                                            <div className="flex justify-between">
                                                <span className="text-muted-foreground">
                                                    Poniedziałek - Piątek
                                                </span>
                                                <span className="font-medium">9:00 - 18:00</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-muted-foreground">Sobota</span>
                                                <span className="font-medium">10:00 - 14:00</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-muted-foreground">Niedziela</span>
                                                <span className="font-medium">Zamknięte</span>
                                            </div>
                                        </div>
                                    </div>
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
