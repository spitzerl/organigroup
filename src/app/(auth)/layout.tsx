import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 overflow-hidden relative">
      
      <Link href="/" className="absolute top-6 left-6 sm:top-12 sm:left-12 text-xl sm:text-2xl font-black tracking-tight text-foreground hover:opacity-80 transition-opacity">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent-foreground to-accent">Organigroup</span>
      </Link>

      <div className="w-full max-w-md animate-in fade-in slide-in-from-bottom-4 duration-500 relative z-10 mt-14 sm:mt-0">
        {children}
      </div>
    </div>
  );
}
