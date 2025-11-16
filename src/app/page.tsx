import { Star, Ticket, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  const euroNumbers = [5, 12, 25, 33, 47];
  const euroStars = [7, 11];
  const myMillionCode = 'DF 123 4567';
  const drawDate = "Tirage du Mardi 16 Juillet 2024";

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="bg-primary text-primary-foreground py-6 px-4 md:px-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Ticket className="h-8 w-8" />
            <h1 className="text-2xl font-bold">EuroMillions & My Million</h1>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto py-8 md:py-12 px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Derniers Résultats
          </h2>
          <p className="text-muted-foreground">{drawDate}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Award className="text-primary" />
                EuroMillions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center">
                <p className="mb-4 text-muted-foreground">Numéros gagnants :</p>
                <div className="flex items-center justify-center gap-2 md:gap-4 mb-6">
                  {euroNumbers.map((num) => (
                    <div
                      key={num}
                      className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-primary text-primary-foreground rounded-full text-2xl font-bold shadow-inner"
                    >
                      {num}
                    </div>
                  ))}
                </div>
                <p className="mb-4 text-muted-foreground">Étoiles :</p>
                <div className="flex items-center justify-center gap-2 md:gap-4">
                  {euroStars.map((star) => (
                    <div
                      key={star}
                      className="relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14"
                    >
                      <Star className="absolute text-accent fill-current w-full h-full" />
                      <span className="relative z-10 text-accent-foreground text-2xl font-bold">
                        {star}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Ticket className="text-primary" />
                My Million
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center h-full">
                <p className="mb-4 text-muted-foreground">Votre code gagnant :</p>
                <div className="bg-secondary px-6 py-4 rounded-lg">
                  <p className="text-3xl font-bold tracking-widest text-secondary-foreground">
                    {myMillionCode}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-12">
            <Button size="lg" className="shadow-lg">
                Générer une grille
            </Button>
        </div>
      </main>

      <footer className="bg-secondary text-secondary-foreground py-4 px-4 md:px-6 mt-auto">
        <div className="container mx-auto text-center text-sm">
          <p>Jouer comporte des risques : endettement, isolement, dépendance.</p>
          <p>Pour être aidé, appelez le 09-74-75-13-13 (appel non surtaxé).</p>
        </div>
      </footer>
    </div>
  );
}
