import { GuideShell } from "@/components/Guide/GuideShell";

export default function GuideLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <GuideShell>{children}</GuideShell>;
}
