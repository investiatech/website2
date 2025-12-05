import { Zap, Code, TrendingUp, Lightbulb } from "lucide-react";

export const quickInsights = [
  {
    icon: Zap,
    title: "Low-Latency Architecture",
    tip: "Unikaj alokacji pamięci w pętli tradingowej – GC pause może kosztować utratę entire order flow.",
  },
  {
    icon: Code,
    title: "Type-Safe Modeling",
    tip: "Typuj feedy rynkowe i eventy w systemie matchingowym — błędna struktura ticka to błędna strategia.",
  },
  {
    icon: TrendingUp,
    title: "Backtesting Accuracy",
    tip: "Używaj danych tick-by-tick zamiast interwałów — microstructure noise może zmienić wynik strategii o 20–40%.",
  },
  {
    icon: Lightbulb,
    title: "Risk & Execution Models",
    tip: "Modeluj slippage i execution delay — strategia, która działa bez kosztów transakcyjnych, nie działa.",
  },
];
