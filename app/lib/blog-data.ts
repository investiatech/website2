export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  author: string
  category: string
  readTime: string
  image: string
}

// export const blogPostsMock: BlogPost[] = [
//   {
//     slug: '1',
//     title: 'Wprowadzenie do Next.js 16',
//     excerpt: 'Poznaj najnowsze funkcje i ulepszenia w Next.js 16, w tym React Compiler, Turbopack i nowe API cacheowania.',
//     content: `Next.js 16 wprowadza wiele ekscytujących ulepszeń, które zmieniają sposób, w jaki budujemy aplikacje webowe.

// ## React Compiler

// React Compiler jest teraz stabilny w Next.js 16. Automatycznie optymalizuje komponenty React, eliminując potrzebę ręcznego użycia useMemo, useCallback i memo.

// ## Turbopack

// Turbopack jest teraz domyślnym bundlerem i oferuje znacznie szybsze czasy kompilacji w porównaniu do Webpack. To rewolucyjna zmiana dla developer experience.

// ## Nowe API cacheowania

// Cache Components wprowadzają nowy sposób deklaratywnego cacheowania z wykorzystaniem dyrektywy "use cache". Daje to programistom pełną kontrolę nad strategiami cacheowania.`,
//     date: '2025-11-28',
//     author: 'Anna Kowalska',
//     category: 'Framework',
//     readTime: '5 min',
//     image: '/images/investia.tech_stock.png'
//   },
//   {
//     slug: '2',
//     title: 'TypeScript Best Practices w 2025',
//     excerpt: 'Nowoczesne wzorce i najlepsze praktyki pisania typesafe kodu w TypeScript dla dużych projektów.',
//     content: `TypeScript stał się standardem w rozwoju aplikacji webowych. Poznaj najlepsze praktyki na rok 2025.

// ## Strict Mode

// Zawsze używaj strict mode w tsconfig.json. To podstawa typesafe kodu.

// ## Type Inference

// Wykorzystuj wnioskowanie typów zamiast explicite je deklarować wszędzie. TypeScript jest bardzo dobry w domyślaniu się intencji.

// ## Generyki

// Używaj generyków do tworzenia reużywalnych komponentów i funkcji, które zachowują bezpieczeństwo typów.`,
//     date: '2025-11-28',
//     author: 'Piotr Nowak',
//     category: 'TypeScript',
//     readTime: '7 min',
//     image: '/images/investia.tech_bull.png'
//   },
//   {
//     slug: '3',
//     title: 'Architektura mikroserwisów w Node.js',
//     excerpt: 'Jak zaprojektować i zaimplementować skalowalną architekturę mikroserwisów używając Node.js i Docker.',
//     content: `Mikroserwisy oferują elastyczność i skalowalność, ale wymagają przemyślanej architektury.

// ## Projektowanie serwisów

// Każdy mikroserwis powinien być odpowiedzialny za jedną domenę biznesową. To klucz do maintainability.

// ## Komunikacja między serwisami

// Wykorzystuj message brokery jak RabbitMQ lub Kafka dla asynchronicznej komunikacji.

// ## Deployment

// Docker i Kubernetes są standardem dla deploymentu mikroserwisów w produkcji.`,
//     date: '2025-11-28',
//     author: 'Marek Wiśniewski',
//     category: 'Backend',
//     readTime: '10 min',
//     image: '/images/investia.tech_chart.png'
//   },
//   {
//     slug: '4',
//     title: 'Optymalizacja wydajności React',
//     excerpt: 'Praktyczne techniki optymalizacji aplikacji React - od lazy loading po virtualizację list.',
//     content: `Wydajność jest kluczowa dla user experience. Poznaj sprawdzone techniki optymalizacji.

// ## React.memo

// Używaj React.memo dla komponentów, które renderują się często z tymi samymi propsami.

// ## Code Splitting

// Lazy loading komponentów z użyciem React.lazy i Suspense redukuje initial bundle size.

// ## Virtualizacja

// Dla długich list użyj react-window lub react-virtualized aby renderować tylko wslugoczne elementy.`,
//     date: '2025-01-15',
//     author: 'Katarzyna Lewandowska',
//     category: 'React',
//     readTime: '6 min',
//     image: '/images/investia.tech_bull.png'
//   },
//   {
//     slug: '5',
//     title: 'GraphQL vs REST API w 2025',
//     excerpt: 'Porównanie GraphQL i REST API - kiedy używać którego rozwiązania w nowoczesnych aplikacjach.',
//     content: `Wybór między GraphQL a REST zależy od konkretnych wymagań projektu.

// ## REST API

// REST jest prostszy w implementacji i lepszy dla publicznych API z predictable endpoints.

// ## GraphQL

// GraphQL świetnie sprawdza się gdy klient potrzebuje elastyczności w pobieraniu danych i chcemy uniknąć over-fetching.

// ## Hybrslug Approach

// Wiele projektów używa obu - REST dla prostych operacji i GraphQL tam gdzie potrzebna jest złożoność.`,
//     date: '2024-12-20',
//     author: 'Tomasz Kamiński',
//     category: 'API',
//     readTime: '8 min',
//     image: '/api-graphql-rest-comparison.jpg'
//   },
//   {
//     slug: '6',
//     title: 'Bezpieczeństwo aplikacji webowych',
//     excerpt: 'Kompleksowy przewodnik po zabezpieczaniu aplikacji - od CORS po CSP i rate limiting.',
//     content: `Bezpieczeństwo powinno być priorytetem od początku developmentu.

// ## HTTPS

// HTTPS jest absolutnym minimum. Używaj Let's Encrypt dla darmowych certyfikatów.

// ## Authentication

// Implementuj robust authentication z JWT lub session-based auth. Zawsze hash passwords z bcrypt.

// ## CORS i CSP

// Poprawnie skonfigurowany CORS i Content Security Policy chronią przed wieloma atakami.`,
//     date: '2024-12-15',
//     author: 'Anna Kowalska',
//     category: 'Security',
//     readTime: '9 min',
//     image: '/web-security-shield-lock.jpg'
//   },
//   {
//     slug: '7',
//     title: 'Server Components w React 19',
//     excerpt: 'Poznaj Server Components - nową paradygm w React, która zmienia sposób renderowania i fetching danych.',
//     content: `Server Components to jedna z największych zmian w React od lat.

// ## Czym są Server Components

// Server Components renderują się wyłącznie na serwerze, co oznacza zero JavaScript po stronie klienta dla tych komponentów.

// ## Kiedy używać

// slugealne dla komponentów które potrzebują danych z bazy, ale nie wymagają interaktywności. Doskonałe dla SEO.

// ## Migracja

// Stopniowo migruj komponenty zaczynając od tych najwyżej w drzewie. Nie wszystko musi być Server Component.`,
//     date: '2025-01-20',
//     author: 'Jan Kowalczyk',
//     category: 'React',
//     readTime: '7 min',
//     image: '/react-server-components.jpg'
//   },
//   {
//     slug: '8',
//     title: 'AI w rozwoju oprogramowania',
//     excerpt: 'Jak sztuczna inteligencja zmienia proces developmentu - od code completion po automated testing.',
//     content: `AI tools rewolucjonizują sposób w jaki piszemy kod.

// ## GitHub Copilot

// Copilot znacząco przyspiesza pisanie boilerplate kodu i pomaga w odkrywaniu nowych API.

// ## AI Code Review

// Automatyczne code review wykrywa potencjalne błędy i sugeruje improvements przed human review.

// ## Test Generation

// AI może generować comprehensive test cases, oszczędzając godziny pracy nad test coverage.`,
//     date: '2025-01-18',
//     author: 'Michał Zieliński',
//     category: 'AI',
//     readTime: '6 min',
//     image: '/artificial-intelligence-coding.jpg'
//   },
//   {
//     slug: '9',
//     title: 'Tailwind CSS - zaawansowane techniki',
//     excerpt: 'Odkryj zaawansowane wzorce i techniki pracy z Tailwind CSS w dużych projektach.',
//     content: `Tailwind CSS to potężne narzędzie, gdy jest używane prawslugłowo.

// ## Custom Design Tokens

// Definiuj własne design tokens w tailwind.config dla spójności projektu.

// ## Component Patterns

// Twórz reusable component patterns zamiast duplikować klasy w całym projekcie.

// ## Performance

// Używaj PurgeCSS i JIT mode dla optymalnego bundle size w produkcji.`,
//     date: '2025-01-12',
//     author: 'Ewa Szymańska',
//     category: 'CSS',
//     readTime: '8 min',
//     image: '/tailwind-css-design-system.jpg'
//   },
//   {
//     slug: '10',
//     title: 'PostgreSQL vs MongoDB',
//     excerpt: 'Analiza porównawcza relacyjnych i dokumentowych baz danych - która wybrać dla Twojego projektu?',
//     content: `Wybór bazy danych ma ogromny wpływ na architekturę aplikacji.

// ## PostgreSQL

// Doskonała dla structured data z complex relationships. ACslug compliance i transactions są built-in.

// ## MongoDB

// Świetna dla flexible schemas i rapslug prototyping. Skaluje się horizontally out of the box.

// ## Hybrslug Solutions

// Wiele firm używa obu - PostgreSQL dla critical data i MongoDB dla less structured content.`,
//     date: '2025-01-08',
//     author: 'Krzysztof Pawlak',
//     category: 'Database',
//     readTime: '9 min',
//     image: '/database-postgresql-mongodb.jpg'
//   },
//   {
//     slug: '11',
//     title: 'Web Accessibility w praktyce',
//     excerpt: 'Przewodnik po tworzeniu dostępnych aplikacji webowych - WCAG 2.1 i najlepsze praktyki.',
//     content: `Accessibility nie jest opcjonalne - to fundamentalna część dobrego UX.

// ## Semantic HTML

// Używaj proper HTML elements zamiast div soup. To podstawa screen reader support.

// ## Keyboard Navigation

// Wszystkie interactive elementy muszą być dostępne via keyboard. Test tab order regularnie.

// ## ARIA Attributes

// Używaj ARIA tylko gdy semantic HTML nie wystarcza. Zawsze testuj z prawdziwymi screen readers.`,
//     date: '2024-12-30',
//     author: 'Agnieszka Woźniak',
//     category: 'Frontend',
//     readTime: '10 min',
//     image: '/web-accessibility-wcag.jpg'
//   },
//   {
//     slug: '12',
//     title: 'CI/CD Pipeline dla Next.js',
//     excerpt: 'Jak zbudować robust CI/CD pipeline dla aplikacji Next.js z automated testing i deployment.',
//     content: `Automated deployment pipeline jest kluczowy dla szybkiego delivery.

// ## GitHub Actions

// GitHub Actions oferuje free CI/CD dla open source i jest perfectly integrated z GitHub repos.

// ## Testing Strategy

// Unit tests, integration tests, i E2E tests powinny być częścią każdego pipeline.

// ## Deployment

// Vercel oferuje zero-config deployment dla Next.js z automatic previews dla każdego PR.`,
//     date: '2024-12-25',
//     author: 'Paweł Dąbrowski',
//     category: 'DevOps',
//     readTime: '11 min',
//     image: '/cicd-pipeline-automation.jpg'
//   },
//   {
//     slug: '13',
//     title: 'Monorepo z Turborepo',
//     excerpt: 'Efektywne zarządzanie wieloma projektami w jednym repozytorium z użyciem Turborepo.',
//     content: `Monorepo strategy zmienia sposób organizacji kodu w dużych projektach.

// ## Czym jest Turborepo

// Turborepo to high-performance build system dla JavaScript i TypeScript monorepos.

// ## Shared Packages

// Współdziel kod między aplikacjami bez publikowania do npm registry.

// ## Incremental Builds

// Cache builds i uruchamiaj tylko to co się zmieniło dla maksymalnej wydajności.`,
//     date: '2025-01-22',
//     author: 'Adam Wójcik',
//     category: 'DevOps',
//     readTime: '9 min',
//     image: '/monorepo-turborepo-workspace.jpg'
//   },
//   {
//     slug: '14',
//     title: 'Prisma - nowoczesny ORM',
//     excerpt: 'Poznaj Prisma ORM i dowiedz się, jak upraszcza pracę z bazami danych w projektach TypeScript.',
//     content: `Prisma rewolucjonizuje sposób interakcji z bazami danych.

// ## Type Safety

// Prisma generuje w pełni typowane query builder na podstawie schema.

// ## Migrations

// Automatyczne migracje bazy danych z pełną kontrolą nad changelogiem.

// ## Prisma Studio

// Visual database browser pozwala na łatwą eksplorację i edycję danych.`,
//     date: '2025-01-19',
//     author: 'Barbara Kowalczyk',
//     category: 'Database',
//     readTime: '7 min',
//     image: '/prisma-orm-database.jpg'
//   },
//   {
//     slug: '15',
//     title: 'Animacje w React z Framer Motion',
//     excerpt: 'Tworzenie płynnych animacji i transitions w React aplikacjach używając Framer Motion.',
//     content: `Framer Motion to production-ready motion library dla React.

// ## Declarative Animations

// Definiuj animacje declaratively bez martwienia się o implementation details.

// ## Layout Animations

// Automatic layout animations gdy zmienia się pozycja lub rozmiar elementów.

// ## Gesture Recognition

// Built-in support dla drag, tap, pan i innych gestów użytkownika.`,
//     date: '2025-01-17',
//     author: 'Cezary Mazur',
//     category: 'Frontend',
//     readTime: '8 min',
//     image: '/framer-motion-animation.jpg'
//   },
//   {
//     slug: '16',
//     title: 'Testy E2E z Playwright',
//     excerpt: 'Automatyczne testy end-to-end dla aplikacji webowych z wykorzystaniem Playwright.',
//     content: `Playwright oferuje reliable testing dla modern web apps.

// ## Cross-Browser Testing

// Testuj w Chromium, Firefox i WebKit z jednym API.

// ## Auto-Waiting

// Playwright automatycznie czeka na elementy, eliminując flaky tests.

// ## Test Generation

// Generuj testy poprzez nagrywanie interakcji użytkownika w przeglądarce.`,
//     date: '2025-01-14',
//     author: 'Diana Nowak',
//     category: 'Testing',
//     readTime: '10 min',
//     image: '/images/investia.tech_stock.png'
//   },
//   {
//     slug: '17',
//     title: 'State Management z Zustand',
//     excerpt: 'Prosty i efektywny state management dla React aplikacji bez boilerplate.',
//     content: `Zustand to minimalistic state management solution.

// ## Zero Boilerplate

// Nie potrzebujesz provslugers, reducers ani actions. Tylko plain functions.

// ## Performance

// Komponenty re-renderują się tylko gdy zmienia się użyty przez nie state.

// ## DevTools

// Integracja z Redux DevTools dla debugging i time-travel.`,
//     date: '2025-01-11',
//     author: 'Emil Kowalski',
//     category: 'React',
//     readTime: '6 min',
//     image: '/images/investia.tech_stock.png'
//   },
//   {
//     slug: '18',
//     title: 'Docker dla developerów',
//     excerpt: 'Praktyczny przewodnik po Docker - od podstaw po production deployment.',
//     content: `Docker zmienia sposób deploymentu aplikacji.

// ## Containers vs VMs

// Kontenery są lightweight i szybkie w porównaniu do virtual machines.

// ## Multi-Stage Builds

// Optymalizuj image size używając multi-stage builds.

// ## Docker Compose

// Orkiestruj wiele kontenerów lokalnie dla development environment.`,
//     date: '2025-01-09',
//     author: 'Filip Jankowski',
//     category: 'DevOps',
//     readTime: '11 min',
//     image: '/images/investia.tech_stock.png'
//   },
//   {
//     slug: '19',
//     title: 'WebSockets w czasie rzeczywistym',
//     excerpt: 'Implementacja real-time komunikacji w aplikacjach web z użyciem WebSockets.',
//     content: `WebSockets umożliwiają bi-directional communication.

// ## Kiedy używać WebSockets

// slugealne dla chat apps, live notifications, collaborative editing.

// ## Socket.io

// Socket.io dodaje reliability i fallback mechanisms do WebSockets.

// ## Scaling

// Używaj Redis adapter dla scaling WebSocket connections across servers.`,
//     date: '2025-01-07',
//     author: 'Gabriela Lewandowska',
//     category: 'Backend',
//     readTime: '9 min',
//     image: '/images/investia.tech_stock.png'
//   },
//   {
//     slug: '20',
//     title: 'Design Systems z Radix UI',
//     excerpt: 'Budowanie accessible design systems z użyciem Radix UI primitives.',
//     content: `Radix UI oferuje unstyled, accessible components.

// ## Accessibility First

// Wszystkie komponenty są fully accessible out of the box.

// ## Customizable

// Pełna kontrola nad stylingiem bez nadpisywania existing styles.

// ## shadcn/ui

// shadcn/ui buduje na Radix UI dodając piękne default styles.`,
//     date: '2025-01-04',
//     author: 'Henryk Wiśniewski',
//     category: 'Frontend',
//     readTime: '7 min',
//     image: '/images/investia.tech_stock.png'
//   },
//   {
//     slug: '21',
//     title: 'Serverless Functions',
//     excerpt: 'Wykorzystanie serverless functions w Next.js dla efektywnych backend operations.',
//     content: `Serverless eliminuje potrzebę zarządzania serwerami.

// ## Edge Functions

// Uruchamiaj kod blisko użytkowników dla minimalnej latency.

// ## Cold Starts

// Strategie minimalizowania cold start times w serverless functions.

// ## Cost Optimization

// Pay per execution - perfect dla variable traffic patterns.`,
//     date: '2025-01-02',
//     author: 'Iwona Kamińska',
//     category: 'Backend',
//     readTime: '8 min',
//     image: '/images/investia.tech_stock.png'
//   },
//   {
//     slug: '22',
//     title: 'Progressive Web Apps',
//     excerpt: 'Tworzenie PWA - aplikacji webowych, które działają jak native mobile apps.',
//     content: `PWA łączą best of web i mobile worlds.

// ## Service Workers

// Offline support i background sync dla lepszego UX.

// ## App Manifest

// Umożliwia instalację web app na home screen użytkownika.

// ## Push Notifications

// Engage users z web push notifications jak w native apps.`,
//     date: '2024-12-27',
//     author: 'Jacek Zieliński',
//     category: 'Frontend',
//     readTime: '10 min',
//     image: '/images/investia.tech_stock.png'
//   },
//   {
//     slug: '23',
//     title: 'OAuth 2.0 i Openslug Connect',
//     excerpt: 'Implementacja bezpiecznej autoryzacji i autentykacji w modern web apps.',
//     content: `OAuth i OslugC są standardami modern authentication.

// ## OAuth 2.0 Flows

// Authorization Code Flow z PKCE dla maximum security.

// ## Social Login

// Integracja z Google, GitHub, Facebook dla seamless UX.

// ## Token Management

// Refresh tokens i secure storage strategies.`,
//     date: '2024-12-22',
//     author: 'Karolina Dąbrowska',
//     category: 'Security',
//     readTime: '12 min',
//     image: '/images/investia.tech_stock.png'
//   },
//   {
//     slug: '24',
//     title: 'Streaming i Suspense w React',
//     excerpt: 'Nowe możliwości React 19 - streaming HTML i Suspense dla lepszego UX.',
//     content: `React 19 wprowadza powerful streaming capabilities.

// ## Streaming SSR

// Server-ssluge rendering z progressive enhancement.

// ## Suspense Boundaries

// Izoluj loading states i errors w specific parts of UI.

// ## Concurrent Features

// useTransition i useDeferredValue dla smooth user experience.`,
//     date: '2024-12-18',
//     author: 'Łukasz Mazur',
//     category: 'React',
//     readTime: '9 min',
//     image: '/images/investia.tech_stock.png'
//   },
//   {
//     slug: '25',
//     title: 'Edge Computing w Next.js',
//     excerpt: 'Wykorzystanie Edge Runtime dla ultra-szybkich responses i globalnej dystrybucji aplikacji.',
//     content: `Edge Computing przenosi computation bliżej użytkowników.

// ## Edge Runtime

// Next.js Edge Runtime działa na edge network globalnie distributed.

// ## Mslugdleware na Edge

// Wykonuj authentication, redirects i rewrites z minimalną latency.

// ## Edge Functions

// Serverless functions działające na edge dla best possible performance.`,
//     date: '2025-01-22',
//     author: 'Monika Szymańska',
//     category: 'Framework',
//     readTime: '8 min',
//     image: '/images/investia.tech_stock.png'
//   },
//   {
//     slug: '26',
//     title: 'Type-Safe APIs z tRPC',
//     excerpt: 'Budowanie end-to-end type-safe APIs bez code generation używając tRPC.',
//     content: `tRPC eliminuje need for REST lub GraphQL schemas.

// ## End-to-End Type Safety

// TypeScript types są shared między client i server automatycznie.

// ## Zero Code Generation

// Brak build steps - types są inferred w czasie development.

// ## Integration z Next.js

// Perfect integration z Next.js App Router i Server Components.`,
//     date: '2025-01-22',
//     author: 'Norbert Kowalczyk',
//     category: 'TypeScript',
//     readTime: '7 min',
//     image: '/images/investia.tech_stock.png'
//   },
//   {
//     slug: '27',
//     title: 'React Query - Data Fetching',
//     excerpt: 'Zarządzanie server state w React aplikacjach z użyciem React Query (TanStack Query).',
//     content: `React Query upraszcza data fetching i caching.

// ## Automatic Caching

// Inteligentne cacheowanie zapytań z automatic background updates.

// ## Optimistic Updates

// Update UI instantly podczas async operations dla lepszego UX.

// ## Infinite Queries

// Built-in support dla pagination i infinite scrolling patterns.`,
//     date: '2025-01-19',
//     author: 'Olga Pawlak',
//     category: 'React',
//     readTime: '8 min',
//     image: '/images/investia.tech_stock.png'
//   },
//   {
//     slug: '28',
//     title: 'Zod - Schema Valslugation',
//     excerpt: 'Type-safe schema valslugation dla TypeScript z wykorzystaniem biblioteki Zod.',
//     content: `Zod to TypeScript-first schema valslugation library.

// ## Runtime Type Checking

// Walslugacja danych w runtime z pełnym TypeScript inference.

// ## Form Valslugation

// Perfect dla form valslugation z integracją React Hook Form.

// ## API Response Valslugation

// Valslugate API responses i catch breaking changes early.`,
//     date: '2025-01-19',
//     author: 'Piotr Mazur',
//     category: 'TypeScript',
//     readTime: '6 min',
//     image: '/images/investia.tech_stock.png'
//   },
//   {
//     slug: '29',
//     title: 'Web Performance Optimization',
//     excerpt: 'Zaawansowane techniki optymalizacji wydajności aplikacji webowych - Core Web Vitals.',
//     content: `Performance bezpośrednio wpływa na user experience i SEO.

// ## Largest Contentful Paint

// Optymalizuj LCP poprzez image optimization i critical CSS.

// ## Cumulative Layout Shift

// Eliminuj layout shifts z proper sizing and font loading strategies.

// ## First Input Delay

// Minimalizuj Fslug z code splitting i defer non-critical JavaScript.`,
//     date: '2025-01-19',
//     author: 'Rafał Kowalski',
//     category: 'Frontend',
//     readTime: '10 min',
//     image: '/images/investia.tech_stock.png'
//   },
//   {
//     slug: '30',
//     title: 'Supabase - Open Source Firebase',
//     excerpt: 'Backend as a Service z PostgreSQL - poznaj Supabase dla rapslug development.',
//     content: `Supabase to open source alternative do Firebase.

// ## PostgreSQL Database

// Real-time database z row level security i powerful queries.

// ## Authentication

// Built-in auth z social provslugers i magic links.

// ## Storage i Edge Functions

// File storage i serverless functions included.`,
//     date: '2025-01-19',
//     author: 'Sara Wójcik',
//     category: 'Backend',
//     readTime: '9 min',
//     image: '/images/investia.tech_stock.png'
//   },
//   {
//     slug: '31',
//     title: 'GraphQL Subscriptions',
//     excerpt: 'Real-time updates w GraphQL aplikacjach poprzez subscriptions i WebSockets.',
//     content: `Subscriptions dodają real-time capabilities do GraphQL.

// ## WebSocket Connection

// Persistent connection dla bi-directional communication.

// ## Live Updates

// Push changes do clients instantly bez polling.

// ## Apollo Client

// Apollo Client oferuje seamless integration z React.`,
//     date: '2025-01-19',
//     author: 'Tomasz Lewandowski',
//     category: 'API',
//     readTime: '7 min',
//     image: '/images/investia.tech_stock.png'
//   },
//   {
//     slug: '32',
//     title: 'Internationalization z next-intl',
//     excerpt: 'Implementacja wielojęzycznych aplikacji Next.js z next-intl i App Router.',
//     content: `next-intl to modern i18n solution dla Next.js.

// ## App Router Support

// Full support dla Next.js App Router z server components.

// ## Type-Safe Messages

// TypeScript autocomplete dla translation keys.

// ## Dynamic Locale Switching

// Zmiana języka bez page reload z client-ssluge routing.`,
//     date: '2025-01-19',
//     author: 'Urszula Jankowska',
//     category: 'Framework',
//     readTime: '8 min',
//     image: '/images/investia.tech_stock.png'
//   }
// ]
