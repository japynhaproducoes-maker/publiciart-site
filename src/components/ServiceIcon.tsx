import { Globe, Rocket, Palette, Server, Gauge, RefreshCw, type LucideProps } from "lucide-react";

const MAP = { Globe, Rocket, Palette, Server, Gauge, RefreshCw };

export default function ServiceIcon({ name, ...props }: { name: string } & LucideProps) {
  const Cmp = MAP[name as keyof typeof MAP] ?? Globe;
  return <Cmp {...props} />;
}
