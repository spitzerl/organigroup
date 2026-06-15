"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Calendar, Users } from "lucide-react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const getLinkClass = (path: string) => {
    const isActive = pathname === path;
    return cn(
      "text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all duration-300",
      isActive 
        ? "bg-primary text-primary-foreground shadow-sm" 
        : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
    );
  };

  return (
    <div className="flex min-h-screen flex-col bg-background/20">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/70 backdrop-blur-xl">
        <div className="container mx-auto flex h-16 items-center justify-between px-3 sm:px-8">
          <Link href="/dashboard" className="flex items-center gap-1.5 sm:gap-2 group">
            <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg sm:rounded-xl bg-gradient-to-br from-primary via-accent-foreground to-accent text-primary-foreground font-black text-base sm:text-lg transition-transform group-hover:scale-105 shadow-md shadow-accent/10">
              O
            </div>
            <span className="text-lg sm:text-xl font-extrabold tracking-tight text-foreground hidden xs:inline-block">
              Organigroup
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1 sm:gap-2">
            <Link href="/dashboard" className={getLinkClass("/dashboard")}>
              Événements
            </Link>
            <Link href="/groups" className={getLinkClass("/groups")}>
              Groupes
            </Link>
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <ThemeToggle />
            <DropdownMenu>
              <DropdownMenuTrigger render={
                <Button variant="ghost" className="relative h-8 w-8 sm:h-9 sm:w-9 rounded-full cursor-pointer hover:opacity-85">
                  <Avatar className="h-8 w-8 sm:h-9 sm:w-9 border border-border">
                    <AvatarImage src="https://api.dicebear.com/7.x/notionists/svg?seed=Lucas" alt="@lucas" />
                    <AvatarFallback>LU</AvatarFallback>
                  </Avatar>
                </Button>
              } />
              <DropdownMenuContent className="w-56 rounded-2xl p-2 border-border/80 bg-card/95 backdrop-blur-md" align="end">
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-semibold leading-none text-foreground">Lucas</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      lucas@example.com
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="rounded-xl cursor-pointer">
                  Profil
                </DropdownMenuItem>
                <DropdownMenuItem className="rounded-xl cursor-pointer">
                  Paramètres
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-destructive rounded-xl cursor-pointer font-semibold">
                  <Link href="/" className="w-full">Se déconnecter</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* Floating Main Content Card */}
      <main className="flex-1 w-full max-w-6xl mx-auto p-2.5 sm:p-6 md:p-8 flex flex-col justify-start pb-24 md:pb-8">
        <div className="w-full bg-card/60 dark:bg-card/35 backdrop-blur-md border border-white/60 dark:border-border/10 shadow-xl rounded-[1.75rem] sm:rounded-[2.5rem] p-4 sm:p-8 md:p-10 transition-all flex-1 flex flex-col">
          {children}
        </div>
      </main>

      {/* Bottom Navigation Bar for Mobile */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-card/85 dark:bg-card/70 backdrop-blur-xl border-t border-border/40 shadow-[0_-4px_16px_rgba(0,0,0,0.04)] dark:shadow-[0_-4px_16px_rgba(0,0,0,0.2)]">
        <div className="flex h-16 items-center justify-around px-6">
          <Link href="/dashboard" className={cn(
            "flex flex-col items-center justify-center flex-1 py-1 text-xs font-semibold transition-all duration-200",
            pathname === "/dashboard" 
              ? "text-primary scale-105 font-bold" 
              : "text-muted-foreground hover:text-foreground"
          )}>
            <Calendar className="h-5.5 w-5.5 mb-1 stroke-[2.2]" />
            <span>Événements</span>
          </Link>

          <Link href="/groups" className={cn(
            "flex flex-col items-center justify-center flex-1 py-1 text-xs font-semibold transition-all duration-200",
            pathname === "/groups" 
              ? "text-primary scale-105 font-bold" 
              : "text-muted-foreground hover:text-foreground"
          )}>
            <Users className="h-5.5 w-5.5 mb-1 stroke-[2.2]" />
            <span>Groupes</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
