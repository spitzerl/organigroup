import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { registerUser } from "../actions";

export default function RegisterPage() {
  return (
    <Card className="border-border/60 shadow-2xl shadow-accent/5 backdrop-blur-xl bg-card/85 dark:bg-card/40 rounded-[1.75rem] sm:rounded-[2.5rem] p-1 sm:p-4">
      <CardHeader className="space-y-2 text-center pb-6">
        <CardTitle className="text-3xl font-extrabold tracking-tight text-foreground">Rejoignez-nous 🚀</CardTitle>
        <CardDescription className="text-base text-muted-foreground">
          Créez un compte pour organiser vos événements
        </CardDescription>
      </CardHeader>
      <form action={registerUser}>
        <CardContent className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium text-foreground/80">Nom ou Pseudo</Label>
            <Input id="name" name="name" type="text" placeholder="John Doe" required className="h-11 bg-background/40 border-border/70 focus-visible:ring-accent rounded-xl" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-foreground/80">Adresse Email</Label>
            <Input id="email" name="email" type="email" placeholder="nom@exemple.com" required className="h-11 bg-background/40 border-border/70 focus-visible:ring-accent rounded-xl" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm font-medium text-foreground/80">Mot de passe</Label>
            <Input id="password" name="password" type="password" required className="h-11 bg-background/40 border-border/70 focus-visible:ring-accent rounded-xl" />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-5 pt-2">
          <Button type="submit" className="w-full h-14 text-lg font-bold bg-primary text-primary-foreground hover:opacity-95 rounded-2xl transition-all shadow-md shadow-primary/10 cursor-pointer">
            Créer mon compte
          </Button>
          <div className="text-center text-sm text-muted-foreground">
            Vous avez déjà un compte ?{" "}
            <Link href="/login" className="font-semibold text-primary hover:underline">
              Connectez-vous
            </Link>
          </div>
        </CardFooter>
      </form>
    </Card>
  );
}
