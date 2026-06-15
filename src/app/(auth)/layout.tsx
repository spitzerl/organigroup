import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 overflow-hidden relative">
      {/* Background blobs for a modern look */}
      <div className="absolute top-0 -z-10 h-full w-full bg-transparent overflow-hidden">
        <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(255,190,100,0.18)] opacity-70 blur-[80px]"></div>
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] translate-x-1/4 translate-y-1/4 rounded-full bg-[rgba(217,83,79,0.1)] opacity-70 blur-[80px]"></div>
      </div>
      
      <Link href="/" className="absolute top-6 left-6 sm:top-12 sm:left-12 text-xl sm:text-2xl font-black tracking-tight text-foreground hover:opacity-80 transition-opacity">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent-foreground to-accent">Organigroup</span>
      </Link>

      <div className="w-full max-w-md animate-in fade-in slide-in-from-bottom-4 duration-500 relative z-10 mt-14 sm:mt-0">
        {children}
      </div>
    </div>
  );
}
