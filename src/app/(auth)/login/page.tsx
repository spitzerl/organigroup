import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { loginUser } from "../actions";

export default function LoginPage() {
  return (
    <Card className="border-border/60 shadow-2xl shadow-accent/5 backdrop-blur-xl bg-card/85 dark:bg-card/40 rounded-[1.75rem] sm:rounded-[2.5rem] p-1 sm:p-4">
      <CardHeader className="space-y-2 text-center pb-6">
        <CardTitle className="text-3xl font-extrabold tracking-tight text-foreground">Bon retour 👋</CardTitle>
        <CardDescription className="text-base text-muted-foreground">
          Connectez-vous pour retrouver vos groupes
        </CardDescription>
      </CardHeader>
      <form action={loginUser}>
        <CardContent className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-foreground/80">Adresse Email</Label>
            <Input id="email" name="email" type="email" placeholder="nom@exemple.com" required className="h-11 bg-background/40 border-border/70 focus-visible:ring-accent rounded-xl" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password" className="text-sm font-medium text-foreground/80">Mot de passe</Label>
              <Link href="#" className="text-xs text-primary font-semibold hover:underline">Mot de passe oublié ?</Link>
            </div>
            <Input id="password" name="password" type="password" required className="h-11 bg-background/40 border-border/70 focus-visible:ring-accent rounded-xl" />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-5 pt-2">
          <Button type="submit" className="w-full h-14 text-lg font-bold bg-primary text-primary-foreground hover:opacity-95 rounded-2xl transition-all shadow-md shadow-primary/10 cursor-pointer">
            Se connecter
          </Button>
          <div className="text-center text-sm text-muted-foreground">
            Vous n'avez pas de compte ?{" "}
            <Link href="/register" className="font-semibold text-primary hover:underline">
              Inscrivez-vous
            </Link>
          </div>
        </CardFooter>
      </form>
    </Card>
  );
}
