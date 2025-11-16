'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, Ticket } from 'lucide-react';

export default function Home() {
  const [numbers, setNumbers] = useState([4, 8, 15, 16, 23]);
  const [stars, setStars] = useState([4, 8]);
  const [myMillion, setMyMillion] = useState('BC 123 4567');

  const generateGrid = () => {
    const newNumbers = new Set<number>();
    while (newNumbers.size < 5) {
      newNumbers.add(Math.floor(Math.random() * 50) + 1);
    }

    const newStars = new Set<number>();
    while (newStars.size < 2) {
      newStars.add(Math.floor(Math.random() * 12) + 1);
    }
    
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const newMyMillion = `${letters.charAt(Math.floor(Math.random() * letters.length))}${letters.charAt(Math.floor(Math.random() * letters.length))} ${Math.floor(Math.random() * 900 + 100)} ${Math.floor(Math.random() * 9000 + 1000)}`;

    setNumbers(Array.from(newNumbers).sort((a, b) => a - b));
    setStars(Array.from(newStars).sort((a, b) => a - b));
    setMyMillion(newMyMillion);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 md:p-12 lg:p-24 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary">
          EuroMillions & My Million
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Consultez les derniers résultats et générez votre grille.
        </p>
      </div>

      <Card className="w-full max-w-2xl shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Dernier Tirage</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-muted-foreground">
              Numéros gagnants
            </h3>
            <div className="flex justify-center gap-2 sm:gap-4 mt-2">
              {numbers.map((num) => (
                <div
                  key={num}
                  className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-primary text-primary-foreground rounded-full text-xl sm:text-2xl font-bold"
                >
                  {num}
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-lg font-semibold text-muted-foreground">Étoiles</h3>
            <div className="flex justify-center gap-2 sm:gap-4 mt-2">
              {stars.map((star) => (
                <div
                  key={star}
                  className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-accent text-accent-foreground rounded-full text-xl sm:text-2xl font-bold"
                >
                  <Star className="w-6 h-6 sm:w-8 sm:h-8 fill-current text-yellow-300" />
                   <span className="absolute text-black font-bold text-sm">{star}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center">
             <h3 className="text-lg font-semibold text-muted-foreground">
              My Million
            </h3>
            <div className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-gray-100 dark:bg-gray-700 px-4 py-2">
                <Ticket className="w-6 h-6 text-muted-foreground" />
                <p className="font-mono text-xl sm:text-2xl font-bold tracking-widest">{myMillion}</p>
            </div>
          </div>


          <Button onClick={generateGrid} size="lg" className="mt-6">
            <Ticket className="mr-2 h-5 w-5" /> Générer une grille
          </Button>
        </CardContent>
      </Card>
       <footer className="mt-12 text-center text-sm text-muted-foreground">
        <p>Jouer comporte des risques : endettement, isolement, dépendance.</p>
        <p>Pour être aidé, appelez le 09-74-75-13-13 (appel non surtaxé).</p>
      </footer>
    </main>
  );
}
