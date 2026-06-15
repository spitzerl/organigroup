"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Calendar, 
  Users, 
  User, 
  Lock, 
  Unlock, 
  Clock, 
  Plus, 
  Check
} from "lucide-react";

// Fausses données pour illustrer l'UI sans base de données
const mockEvents = [
  {
    id: "1",
    title: "Soirée Cinéma : Dune 2",
    date: new Date(new Date().setDate(new Date().getDate() + 2)), // Dans 2 jours
    groupName: "Cinéphiles",
    creator: { name: "Alice", avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Alice" },
    isPrivate: false,
    myRsvp: "ATTENDING",
    attendeesCount: 8,
  },
  {
    id: "2",
    title: "Barbecue de rentrée",
    date: new Date(new Date().setDate(new Date().getDate() + 10)), // Dans 10 jours
    groupName: "Le groupe des 20",
    creator: { name: "Bob", avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Bob" },
    isPrivate: true,
    myRsvp: "PENDING",
    attendeesCount: 15,
  },
  {
    id: "3",
    title: "Session Escalade",
    date: new Date(new Date().setDate(new Date().getDate() - 3)), // Il y a 3 jours
    groupName: "Sportifs",
    creator: { name: "Charlie", avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Charlie" },
    isPrivate: false,
    myRsvp: "ABSENT",
    attendeesCount: 4,
  }
];

export default function DashboardPage() {
  const upcomingEvents = mockEvents.filter(e => e.date > new Date());
  const pastEvents = mockEvents.filter(e => e.date <= new Date());

  const getRsvpBadge = (status: string) => {
    switch (status) {
      case "ATTENDING": 
        return (
          <span className="inline-flex items-center gap-1.5 bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20 rounded-full px-3 py-1 text-xs font-semibold">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400"></span>
            Présent
          </span>
        );
      case "ABSENT": 
        return (
          <span className="inline-flex items-center gap-1.5 bg-destructive/10 text-destructive dark:text-red-300 border border-destructive/20 rounded-full px-3 py-1 text-xs font-semibold">
            <span className="h-1.5 w-1.5 rounded-full bg-destructive dark:bg-red-400"></span>
            Absent
          </span>
        );
      default: 
        return (
          <span className="inline-flex items-center gap-1.5 bg-amber-500/10 text-amber-800 dark:text-amber-300 border border-amber-500/20 rounded-full px-3 py-1 text-xs font-semibold">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500 dark:bg-amber-400 animate-pulse"></span>
            En attente
          </span>
        );
    }
  };

  const EventCard = ({ event }: { event: any }) => (
    <Card className="flex flex-col border border-dashed border-border/80 shadow-sm hover:shadow-md transition-all duration-300 bg-card/45 hover:bg-card/75 dark:bg-card/25 dark:hover:bg-card/40 rounded-[1.75rem] sm:rounded-[2rem] overflow-hidden group">
      <CardHeader className="pb-3 pt-5 px-5 sm:pb-4 sm:pt-6 sm:px-6">
        <div className="flex justify-between items-start gap-2">
          <div className="space-y-1.5">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-accent-foreground/90 bg-accent/20 px-2.5 py-0.5 rounded-full">
              {event.groupName}
            </span>
            <CardTitle className="text-lg sm:text-xl font-bold text-foreground leading-snug group-hover:text-primary transition-colors pt-1">
              {event.title}
            </CardTitle>
          </div>
          <div className="shrink-0">{getRsvpBadge(event.myRsvp)}</div>
        </div>
      </CardHeader>
      
      <CardContent className="flex-1 px-5 pb-5 sm:px-6 sm:pb-6 space-y-3.5 text-sm text-muted-foreground">
        <div className="flex items-center gap-2.5">
          <Calendar className="h-4.5 w-4.5 text-muted-foreground/70" />
          <span className="font-medium text-foreground/80 text-xs sm:text-sm">
            {event.date.toLocaleDateString("fr-FR", { weekday: 'long', day: 'numeric', month: 'long' })}
          </span>
        </div>
        <div className="flex items-center gap-2.5">
          <Clock className="h-4.5 w-4.5 text-muted-foreground/70" />
          <span className="text-xs font-semibold">
            {event.date.toLocaleTimeString("fr-FR", { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>
        <div className="flex items-center gap-2.5 pt-1">
          <Avatar className="h-6 w-6 border border-border/60">
            <AvatarImage src={event.creator.avatar} />
            <AvatarFallback>{event.creator.name[0]}</AvatarFallback>
          </Avatar>
          <span className="text-xs font-medium text-muted-foreground">
            Créé par <strong className="text-foreground/80">{event.creator.name}</strong>
          </span>
          {event.isPrivate ? (
            <span className="ml-auto flex items-center gap-1 text-[10px] font-bold text-muted-foreground bg-secondary px-2 py-0.5 rounded-full">
              <Lock className="h-3 w-3" /> Privé
            </span>
          ) : (
            <span className="ml-auto flex items-center gap-1 text-[10px] font-bold text-muted-foreground bg-secondary px-2 py-0.5 rounded-full">
              <Unlock className="h-3 w-3" /> Public
            </span>
          )}
        </div>
      </CardContent>

      <CardFooter className="px-5 py-3 sm:px-6 sm:py-4 border-t border-dashed border-border/70 flex justify-between items-center bg-secondary/20 group-hover:bg-secondary/40 transition-colors">
        <div className="flex items-center">
          <div className="flex -space-x-2.5">
            {[...Array(Math.min(3, event.attendeesCount))].map((_, i) => (
              <Avatar key={i} className="h-7 w-7 sm:h-8 sm:w-8 border-2 border-card shadow-sm hover:translate-y-[-2px] transition-transform duration-200">
                <AvatarImage src={`https://api.dicebear.com/7.x/notionists/svg?seed=Attendee${i}${event.id}`} />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            ))}
          </div>
          {event.attendeesCount > 3 && (
            <span className="ml-2.5 text-[10px] sm:text-xs font-bold text-muted-foreground bg-secondary/80 border border-border/40 px-2 py-0.5 rounded-full">
              +{event.attendeesCount - 3}
            </span>
          )}
        </div>
        
        {event.myRsvp === "PENDING" ? (
          <Button className="rounded-xl px-6 py-4.5 bg-primary text-primary-foreground hover:opacity-95 font-bold shadow-md shadow-primary/10 text-sm cursor-pointer transition-all hover:scale-[1.02]">
            Répondre
          </Button>
        ) : (
          <Button variant="outline" className="rounded-xl px-6 py-4.5 border border-border bg-background/40 hover:bg-secondary text-foreground font-bold text-sm cursor-pointer transition-all hover:scale-[1.02]">
            Modifier
          </Button>
        )}
      </CardFooter>
    </Card>
  );

  return (
    <div className="space-y-8 sm:space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header and Welcome Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 sm:gap-6 pb-2">
        <div className="space-y-1.5">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
            Bonjour, Lucas 👋
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base font-medium">
            Prêt pour vos prochains événements de groupe ? Retrouvez toutes vos invitations ici.
          </p>
        </div>

        <Dialog>
          <DialogTrigger render={
            <Button className="w-full md:w-auto rounded-xl py-5 px-8 bg-primary text-primary-foreground font-bold hover:opacity-95 shadow-md shadow-primary/15 cursor-pointer text-base sm:text-lg transition-all hover:scale-[1.02]">
              Créer un événement
            </Button>
          } />
          <DialogContent className="w-[calc(100%-2rem)] max-w-[425px] rounded-[1.75rem] sm:rounded-[2rem] border-border/80 bg-card p-5 sm:p-8">
            <DialogHeader className="space-y-2">
              <DialogTitle className="text-2xl font-bold">Nouvel événement</DialogTitle>
              <DialogDescription className="text-muted-foreground">
                Planifiez un moment convivial pour l'un de vos groupes.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-5 py-4">
              <div className="grid gap-2">
                <Label htmlFor="title" className="font-semibold text-foreground/80">Titre de l'événement</Label>
                <Input id="title" placeholder="Ex: Soirée jeux de société" className="h-11 bg-background/40 border-border/70 focus-visible:ring-accent rounded-xl" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="date" className="font-semibold text-foreground/80">Date et Heure</Label>
                <Input id="date" type="datetime-local" className="h-11 bg-background/40 border-border/70 focus-visible:ring-accent rounded-xl" />
              </div>
            </div>
            <DialogFooter className="pt-2">
              <Button type="submit" className="w-full h-14 bg-primary text-primary-foreground font-bold rounded-2xl hover:opacity-95 shadow-md shadow-primary/10 cursor-pointer text-base transition-all hover:scale-[1.02]">
                Créer l'événement
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>



      {/* Tabs and Event Cards Grid */}
      <Tabs defaultValue="upcoming" className="w-full">
        <div className="flex items-center justify-between border-b border-border/40 pb-3 mb-6">
          <TabsList className="bg-secondary/60 border border-border/40 p-1.5 rounded-full flex gap-1 h-auto">
            <TabsTrigger 
              value="upcoming" 
              className="rounded-full px-5 py-2 text-xs font-semibold cursor-pointer data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm transition-all"
            >
              À venir ({upcomingEvents.length})
            </TabsTrigger>
            <TabsTrigger 
              value="past" 
              className="rounded-full px-5 py-2 text-xs font-semibold cursor-pointer data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm transition-all"
            >
              Passés ({pastEvents.length})
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="upcoming" className="focus-visible:outline-none focus:outline-none">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="past" className="focus-visible:outline-none focus:outline-none">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 opacity-75">
            {pastEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
