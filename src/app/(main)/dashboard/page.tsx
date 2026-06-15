"use client"

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar, Clock, Plus } from "lucide-react";

// Fausses données pour illustrer l'UI sans base de données
// Les dates sont exprimées en offset (jours) depuis aujourd'hui pour éviter le mismatch SSR/client
const mockEventDefs = [
  {
    id: "1",
    title: "Soirée Cinéma : Dune 2",
    daysFromNow: 2,
    groupName: "Cinéphiles",
    creator: { name: "Alice", avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Alice" },
    myRsvp: "ATTENDING",
    attendeesCount: 8,
  },
  {
    id: "2",
    title: "Barbecue de rentrée",
    daysFromNow: 10,
    groupName: "Le groupe des 20",
    creator: { name: "Bob", avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Bob" },
    myRsvp: "PENDING",
    attendeesCount: 15,
  },
  {
    id: "3",
    title: "Session Escalade",
    daysFromNow: 18,
    groupName: "Sportifs",
    creator: { name: "Charlie", avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Charlie" },
    myRsvp: "ATTENDING",
    attendeesCount: 4,
  },
];

const getRsvpBadge = (status: string) => {
  switch (status) {
    case "ATTENDING":
      return (
        <span className="inline-flex items-center gap-1.5 bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20 rounded-full px-3.5 py-1 text-xs font-bold backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
          Présent
        </span>
      );
    case "ABSENT":
      return (
        <span className="inline-flex items-center gap-1.5 bg-destructive/10 text-destructive dark:text-red-300 border border-destructive/20 rounded-full px-3.5 py-1 text-xs font-bold backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-destructive" />
          Absent
        </span>
      );
    default:
      return (
        <span className="inline-flex items-center gap-1.5 bg-amber-500/15 text-amber-800 dark:text-amber-300 border border-amber-500/20 rounded-full px-3.5 py-1 text-xs font-bold backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
          En attente
        </span>
      );
  }
};

type MockEvent = {
  id: string;
  title: string;
  date: Date;
  groupName: string;
  myRsvp: string;
  attendeesCount: number;
};

const EventCard = ({ event }: { event: MockEvent }) => (
  <div className="group relative flex flex-col rounded-[1.75rem] sm:rounded-[2rem] overflow-hidden border border-white/40 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-0.5">

    {/* Card body */}
    <div className="flex-1 p-5 sm:p-6 space-y-4">
      {/* Group tag + RSVP badge */}
      <div className="flex items-start justify-between gap-2">
        <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-widest text-accent-foreground/80 bg-accent/20 dark:bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
          {event.groupName}
        </span>
        {getRsvpBadge(event.myRsvp)}
      </div>

      {/* Title */}
      <h3 className="text-xl sm:text-2xl font-black text-foreground leading-tight group-hover:text-primary transition-colors duration-200">
        {event.title}
      </h3>

      {/* Date & time */}
      <div className="space-y-2">
        <div className="flex items-center gap-2.5 text-muted-foreground">
          <Calendar className="h-4 w-4 text-primary/70 shrink-0" />
          <span className="text-sm font-semibold text-foreground/75 capitalize">
            {event.date.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" })}
          </span>
        </div>
        <div className="flex items-center gap-2.5 text-muted-foreground">
          <Clock className="h-4 w-4 text-primary/70 shrink-0" />
          <span className="text-sm font-semibold text-foreground/75">
            {event.date.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })}
          </span>
        </div>
      </div>
    </div>

    {/* Card footer */}
    <div className="px-5 sm:px-6 py-3.5 border-t border-white/50 dark:border-white/10 bg-white/20 dark:bg-white/5 flex items-center justify-between gap-4 transition-colors group-hover:bg-white/30 dark:group-hover:bg-white/10">
      <div className="flex items-center gap-2">
        <div className="flex -space-x-2">
          {[...Array(Math.min(3, event.attendeesCount))].map((_, i) => (
            <Avatar key={i} className="h-6 w-6 sm:h-7 sm:w-7 border-2 border-white dark:border-card shadow-sm">
              <AvatarImage src={`https://api.dicebear.com/7.x/notionists/svg?seed=Attendee${i}${event.id}`} />
              <AvatarFallback className="text-[9px]">U</AvatarFallback>
            </Avatar>
          ))}
        </div>
        {event.attendeesCount > 3 && (
          <span className="text-[11px] font-bold text-muted-foreground">
            +{event.attendeesCount - 3}
          </span>
        )}
      </div>

      {event.myRsvp === "PENDING" ? (
        <Button className="rounded-xl px-5 h-9 bg-primary text-primary-foreground hover:opacity-90 font-bold shadow-sm text-sm cursor-pointer transition-all hover:scale-[1.02]">
          Répondre
        </Button>
      ) : (
        <Button variant="ghost" className="rounded-xl px-5 h-9 hover:bg-white/40 dark:hover:bg-white/10 text-foreground/70 font-semibold text-sm cursor-pointer transition-all">
          Modifier
        </Button>
      )}
    </div>
  </div>
);

export default function DashboardPage() {
  const upcomingEvents: MockEvent[] = mockEventDefs.map((def) => {
    const date = new Date();
    date.setDate(date.getDate() + def.daysFromNow);
    date.setHours(20, 0, 0, 0);
    return { ...def, date };
  });

  return (
    <div className="space-y-8 sm:space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-5 sm:gap-6">
        <div className="space-y-1">
          <p className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-widest" suppressHydrationWarning>
            {new Date().toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" })}
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground">
            Bonjour, Lucas 👋
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base font-medium pt-0.5">
            {upcomingEvents.length > 0
              ? `${upcomingEvents.length} événement${upcomingEvents.length > 1 ? "s" : ""} à venir`
              : "Aucun événement prévu"}
          </p>
        </div>

        <Dialog>
          <DialogTrigger render={
            <Button className="w-full md:w-auto rounded-2xl py-3 px-7 bg-primary text-primary-foreground font-bold hover:opacity-90 shadow-md shadow-primary/20 cursor-pointer text-sm sm:text-base transition-all hover:scale-[1.02] flex items-center gap-2 shrink-0">
              <Plus className="h-4 w-4" />
              Nouvel événement
            </Button>
          } />
          <DialogContent className="w-[calc(100%-2rem)] max-w-[425px] rounded-[1.75rem] sm:rounded-[2rem] border border-white/50 dark:border-white/10 bg-card/90 dark:bg-card/80 backdrop-blur-2xl p-5 sm:p-8 shadow-xl">
            <DialogHeader className="space-y-1.5">
              <DialogTitle className="text-2xl font-black">Nouvel événement</DialogTitle>
              <DialogDescription className="text-muted-foreground">
                Planifiez un moment convivial pour l'un de vos groupes.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-5 py-4">
              <div className="grid gap-2">
                <Label htmlFor="title" className="font-semibold text-foreground/80">Titre de l'événement</Label>
                <Input id="title" placeholder="Ex: Soirée jeux de société" className="h-11 bg-background/40 border-border/60 focus-visible:ring-accent rounded-xl" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="date" className="font-semibold text-foreground/80">Date et Heure</Label>
                <Input id="date" type="datetime-local" className="h-11 bg-background/40 border-border/60 focus-visible:ring-accent rounded-xl" />
              </div>
            </div>
            <DialogFooter className="pt-2">
              <Button type="submit" className="w-full h-12 bg-primary text-primary-foreground font-bold rounded-2xl hover:opacity-90 shadow-md shadow-primary/15 cursor-pointer text-base transition-all hover:scale-[1.01]">
                Créer l'événement
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Events grid */}
      {upcomingEvents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {upcomingEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
          <div className="h-16 w-16 rounded-full bg-secondary/50 flex items-center justify-center text-3xl">
            📅
          </div>
          <p className="text-lg font-bold text-foreground/70">Aucun événement à venir</p>
          <p className="text-sm text-muted-foreground max-w-xs">
            Créez votre premier événement ou attendez une invitation d'un groupe.
          </p>
        </div>
      )}
    </div>
  );
}
