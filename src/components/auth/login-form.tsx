"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required." }),
  lastName: z.string().min(1, { message: "Last name is required." }),
  password: z.string().min(1, { message: "Password is required." }),
});

// You can add or modify users here
const allowedUsers = [
    { firstName: "John", lastName: "Doe", password: "password123" },
    { firstName: "Jane", lastName: "Smith", password: "password456" },
];

export function LoginForm() {
  const router = useRouter();
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const user = allowedUsers.find(
      (u) =>
        u.firstName.toLowerCase() === values.firstName.toLowerCase() &&
        u.lastName.toLowerCase() === values.lastName.toLowerCase() &&
        u.password === values.password
    );

    if (user) {
        toast({
            title: "Connexion réussie",
            description: "Redirection vers votre tableau de bord...",
        });
        router.push("/dashboard");
    } else {
        toast({
            title: "Échec de la connexion",
            description: "Identifiants incorrects. Veuillez réessayer.",
            variant: "destructive",
        });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Prénom</FormLabel>
              <FormControl>
                <Input placeholder="Prénom" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom</FormLabel>
              <FormControl>
                <Input placeholder="Nom" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center">
                <FormLabel>Mot de passe</FormLabel>
                <Link
                  href="#"
                  className="ml-auto inline-block text-sm underline"
                >
                  Mot de passe oublié ?
                </Link>
              </div>
              <FormControl>
                <Input type="password" placeholder="••••••••" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Se connecter
        </Button>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Ou continuer avec
            </span>
          </div>
        </div>
        <Button variant="outline" className="w-full" type="button">
          S'inscrire avec Google
        </Button>
      </form>
    </Form>
  );
}
