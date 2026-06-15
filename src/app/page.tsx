import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { 
  Calendar, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  Lock, 
  Bell, 
  Sparkles,
  Heart
} from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col bg-transparent overflow-x-hidden relative">

      {/* Header */}
      <header className="w-full border-b border-border/30 bg-background/50 backdrop-blur-md sticky top-0 z-50 transition-all">
        <div className="max-w-6xl mx-auto flex h-16 items-center justify-between px-3 sm:px-6">
          <Link href="/" className="flex items-center gap-1.5 sm:gap-2 group">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary via-accent-foreground to-accent text-primary-foreground font-black text-base transition-transform group-hover:scale-105 shadow-md shadow-accent/10">
              O
            </div>
            <span className="text-base sm:text-lg font-extrabold tracking-tight text-foreground">
              Organigroup
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors">
              Fonctionnalités
            </a>
            <a href="#preview" className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors">
              Aperçu
            </a>
            <a href="#values" className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors">
              Notre vision
            </a>
          </nav>

          <div className="flex items-center gap-1 sm:gap-3">
            <ThemeToggle />
            <Link href="/login" className="text-xs sm:text-sm font-semibold text-foreground/80 hover:text-foreground hover:bg-secondary px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all">
              Se connecter
            </Link>
            <Link href="/register" className="text-xs sm:text-sm font-semibold bg-primary text-primary-foreground hover:opacity-90 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full transition-all shadow-sm">
              S'inscrire
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center px-4 pt-12 pb-10 sm:pt-24 sm:pb-16 space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
        <div className="mx-auto inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 dark:bg-accent/5 px-4 py-1.5 text-xs font-bold text-accent-foreground backdrop-blur-sm">
          <Sparkles className="h-3.5 w-3.5 fill-accent stroke-[2.5]" />
          Votre alternative Discord chaleureuse & simplifiée
        </div>
        
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-foreground leading-[1.05]">
          Réunissez vos proches, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-foreground via-accent to-destructive">
            Simplement.
          </span>
        </h1>
        
        <p className="mx-auto max-w-xl text-base sm:text-xl text-muted-foreground font-medium leading-relaxed">
          Fini les messages importants perdus dans le flux de discussion. Une interface mobile-first, chaleureuse et professionnelle pour savoir qui sera présent à vos prochains événements.
        </p>

        <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 justify-center pt-4 w-full sm:w-auto px-4 sm:px-0">
          <Link href="/register" className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto rounded-2xl px-10 h-14 text-lg font-bold shadow-lg shadow-accent-foreground/5 hover:opacity-95 transition-all cursor-pointer hover:scale-[1.02] flex items-center justify-center")}>
            Commencer l'aventure
          </Link>
          <Link href="/login" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "w-full sm:w-auto rounded-2xl px-10 h-14 text-lg font-bold border-border bg-background/40 backdrop-blur-sm hover:bg-secondary cursor-pointer hover:scale-[1.02] flex items-center justify-center")}>
            Voir mon espace
          </Link>
        </div>
      </section>

      {/* Interactive Mockup Preview Section */}
      <section id="preview" className="max-w-5xl mx-auto px-6 pb-24 w-full animate-in fade-in duration-1000 delay-300">
        <div className="w-full bg-card/65 dark:bg-card/35 backdrop-blur-xl border border-white/60 dark:border-border/10 shadow-2xl rounded-[1.75rem] sm:rounded-[2.5rem] p-4 sm:p-6 md:p-8 relative">
          
          {/* Top Browser dots */}
          <div className="flex items-center gap-2 pb-4 sm:pb-6 border-b border-border/30">
            <div className="h-3.5 w-3.5 rounded-full bg-destructive/80"></div>
            <div className="h-3.5 w-3.5 rounded-full bg-accent/80"></div>
            <div className="h-3.5 w-3.5 rounded-full bg-emerald-500/80"></div>
            <div className="mx-auto text-xs font-bold text-muted-foreground/60 bg-background/50 border border-border/30 px-6 py-1 rounded-full hidden sm:block">
              organigroup.fr/dashboard
            </div>
          </div>

          {/* Dummy Dashboard UI Preview */}
          <div className="pt-6 space-y-8 select-none">
            {/* Header / Stats row */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="space-y-1">
                <h3 className="text-2xl font-black text-foreground">Bonjour, Lucas 👋</h3>
                <p className="text-xs font-medium text-muted-foreground">Voici un aperçu de vos événements de groupe.</p>
              </div>
              <span className="text-xs font-bold bg-accent/15 text-accent-foreground px-3.5 py-1.5 rounded-full border border-accent/20">
                1 invitation en attente
              </span>
            </div>


            {/* Event Card Preview */}
            <div className="max-w-md bg-background/50 border border-dashed border-border rounded-[2rem] p-5 shadow-sm space-y-4 relative">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold bg-accent/25 text-accent-foreground px-2.5 py-0.5 rounded-full uppercase">
                    Cinéphiles
                  </span>
                  <h4 className="text-lg font-bold text-foreground pt-1">Soirée Cinéma : Dune 2</h4>
                </div>
                <span className="inline-flex items-center gap-1 bg-[oklch(0.82_0.14_140_/_0.15)] text-[oklch(0.45_0.12_140)] border-0 rounded-full px-2.5 py-0.5 text-[10px] font-semibold">
                  Présent
                </span>
              </div>
              <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-muted-foreground/60" /> vendredi 19 juin à 20:00
              </p>
              <div className="flex items-center justify-between pt-2 border-t border-dashed border-border/70">
                <div className="flex -space-x-1.5">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="h-6 w-6 rounded-full bg-accent/40 border-2 border-card text-[8px] font-bold flex items-center justify-center">
                      A{i}
                    </div>
                  ))}
                </div>
                <span className="text-[10px] font-semibold text-muted-foreground">Organisé par Alice</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section id="features" className="bg-secondary/30 border-y border-border/40 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center space-y-3 max-w-xl mx-auto pb-16">
            <h2 className="text-3xl font-black text-foreground sm:text-4xl">
              Pensé pour les groupes d'amis.
            </h2>
            <p className="text-muted-foreground font-medium">
              Toutes les fonctionnalités nécessaires pour ne plus jamais devoir relancer 10 fois vos amis par message privé.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-card/45 border border-border/60 rounded-[2rem] p-8 space-y-4 hover:shadow-md hover:bg-card/75 transition-all duration-300">
              <div className="h-11 w-11 rounded-2xl bg-accent/20 flex items-center justify-center text-accent-foreground shadow-sm">
                <CheckCircle2 className="h-6 w-6 stroke-[2.5]" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Réponses instantanées</h3>
              <p className="text-muted-foreground text-sm font-medium leading-relaxed">
                Présent, absent ou incertain. D'un simple clic, chacun indique sa disponibilité pour le groupe. Fini les calculs mentaux.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-card/45 border border-border/60 rounded-[2rem] p-8 space-y-4 hover:shadow-md hover:bg-card/75 transition-all duration-300">
              <div className="h-11 w-11 rounded-2xl bg-destructive/15 flex items-center justify-center text-destructive shadow-sm">
                <Bell className="h-6 w-6 stroke-[2.5]" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Notifications douces</h3>
              <p className="text-muted-foreground text-sm font-medium leading-relaxed">
                Des rappels automatiques et respectueux sont envoyés aux retardataires qui n'ont pas encore répondu à l'invitation.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-card/45 border border-border/60 rounded-[2rem] p-8 space-y-4 hover:shadow-md hover:bg-card/75 transition-all duration-300">
              <div className="h-11 w-11 rounded-2xl bg-primary/10 flex items-center justify-center text-foreground shadow-sm">
                <Lock className="h-6 w-6 stroke-[2.5]" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Groupes Privés</h3>
              <p className="text-muted-foreground text-sm font-medium leading-relaxed">
                Créez vos espaces exclusifs pour votre colocation, vos partenaires de sport ou vos compagnons de jeu de société en toute sécurité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section id="values" className="max-w-4xl mx-auto px-6 py-24 text-center space-y-8">
        <Heart className="mx-auto h-12 w-12 text-destructive fill-destructive/15 stroke-[1.5]" />
        <h2 className="text-3xl font-black text-foreground sm:text-4xl">
          Donnez une maison à vos projets communs.
        </h2>
        <p className="mx-auto max-w-xl text-muted-foreground font-medium leading-relaxed">
          Rejoignez Organigroup dès aujourd'hui pour planifier vos barbecues, soirées jeux, cinémas et sessions de sport sans le chaos habituel des applications de messagerie.
        </p>
        <div className="pt-2">
          <Link href="/register" className={cn(buttonVariants({ size: "lg" }), "rounded-full px-8 h-12 text-base font-semibold shadow-sm hover:opacity-90 transition-all cursor-pointer")}>
            Créer un compte gratuitement
          </Link>
        </div>
      </section>

      {/* Footer bar */}
      <footer className="w-full border-t border-border/40 py-8 bg-card/10 text-center text-xs font-semibold text-muted-foreground/60">
        <p>© 2026 Organigroup. Conçu avec amour pour des rencontres plus humaines.</p>
      </footer>
    </main>
  );
}
