
export const gameData = {
  debutant: {
    vocab: [
      { question: "Que signifie 'rosa' ?", options: ["rose", "rouge", "rivière", "reine"], correct: 0 },
      { question: "Que signifie 'aqua' ?", options: ["air", "feu", "eau", "terre"], correct: 2 },
      { question: "Que signifie 'puella' ?", options: ["garçon", "fille", "homme", "femme"], correct: 1 },
      { question: "Que signifie 'liber' ?", options: ["liberté", "livre", "libre", "lierre"], correct: 1 },
      { question: "Que signifie 'mater' ?", options: ["père", "mère", "frère", "sœur"], correct: 1 },
      { question: "Que signifie 'pater' ?", options: ["père", "mère", "pain", "paix"], correct: 0 },
      { question: "Que signifie 'domus' ?", options: ["dôme", "maison", "domaine", "dormir"], correct: 1 },
      { question: "Que signifie 'via' ?", options: ["vie", "voie/route", "voir", "ville"], correct: 1 },
      { question: "Que signifie 'terra' ?", options: ["terreur", "terre", "terrasse", "territoire"], correct: 1 },
      { question: "Que signifie 'sol' ?", options: ["soleil", "sol", "soldat", "seul"], correct: 1 },
    ],
    conjugaison: [
      { question: "Conjuguez 'amare' à la 1ère personne du singulier (présent)", options: ["amo", "amas", "amat", "amamus"], correct: 0, temps: "present", voix: "actif" },
      { question: "Conjuguez 'esse' à la 3ème personne du singulier (présent)", options: ["sum", "es", "est", "sumus"], correct: 2, temps: "present", voix: "actif" },
      { question: "La forme passive de 'amo' est :", options: ["amans", "amor", "amatus", "amare"], correct: 1, temps: "present", voix: "passif" },
    ],
    temps: [
        { question: "Quel temps est 'amavi' ?", options: ["présent", "imparfait", "parfait", "futur"], correct: 2, temps: "parfait" },
        { question: "Quel temps est 'amabam' ?", options: ["présent", "imparfait", "parfait", "futur"], correct: 1, temps: "imparfait" },
        { question: "Quel temps est 'amo' ?", options: ["présent", "imparfait", "parfait", "futur"], correct: 0, temps: "present" },
        { question: "Quel temps est 'amabo' ?", options: ["présent", "imparfait", "parfait", "futur"], correct: 3, temps: "futur" },
        { question: "Quel temps est 'amaveram' ?", options: ["imparfait", "parfait", "plus-que-parfait", "futur"], correct: 2, temps: "plusqueparfait" },
    ],
    culture: [
      { question: "Qui était le premier empereur romain ?", options: ["Jules César", "Auguste", "Néron", "Tibère"], correct: 1 },
      { question: "Quelle ville a été détruite par le Vésuve en 79 ap. J.-C. ?", options: ["Rome", "Pompéi", "Athènes", "Carthage"], correct: 1 },
      { question: "Quel animal symbolisait Rome ?", options: ["Aigle", "Lion", "Louve", "Cheval"], correct: 2 },
    ],
    citations: [
      { question: "Qui a dit 'Veni, vidi, vici' ?", options: ["Cicéron", "Jules César", "Auguste", "Virgile"], correct: 1 },
      { question: "Que signifie 'Carpe diem' ?", options: ["Profite du jour", "La vie est belle", "Le temps passe", "Sois heureux"], correct: 0 },
    ],
    phrases: [
      { question: "Puella rosam amat", options: ["La fille aime la rose", "La rose aime la fille", "Les filles aiment les roses", "La fille a une rose"], correct: 0 },
      { question: "Aqua est bona", options: ["L'eau est mauvaise", "L'eau est bonne", "L'eau est chaude", "L'eau est froide"], correct: 1 },
    ],
    reconstitution: [
      { french: "La fille aime la rose", words: ["Puella", "rosam", "amat"], correct: ["Puella", "rosam", "amat"], declinaisons: ["nominatif", "accusatif"] },
      { french: "L'eau est bonne", words: ["Aqua", "est", "bona"], correct: ["Aqua", "est", "bona"], declinaisons: ["nominatif"] },
    ],
    vraifaux: [
      { latin: "Rosa", french: "Rose", correct: true },
      { latin: "Aqua", french: "Feu", correct: false },
      { latin: "Puella", french: "Fille", correct: true },
      { latin: "Liber", french: "Liberté", correct: false },
    ],
    declinaison: [
        { question: "Quelle est la terminaison du génitif singulier de la 1ère déclinaison ?", options: ["-a", "-ae", "-am", "-arum"], correct: 1, declinaison: "1ere" },
        { question: "Le mot 'rosa' (la rose) est à la 1ère déclinaison. Quel est son accusatif pluriel ?", options: ["rosas", "rosae", "rosis", "rosarum"], correct: 0, declinaison: "1ere" },
        { question: "Quelle est la terminaison du nominatif singulier pour les noms masculins de la 2ème déclinaison ?", options: ["-us", "-um", "-i", "-o"], correct: 0, declinaison: "2eme" },
        { question: "Le mot 'dominus' (le maître) est à la 2ème déclinaison. Quel est son datif singulier ?", options: ["domine", "dominum", "domino", "domini"], correct: 2, declinaison: "2eme" },
        { question: "La 3ème déclinaison a des modèles... ?", options: ["Uniquement masculins", "Uniquement féminins", "Masculins, féminins et neutres", "Uniquement neutres"], correct: 2, declinaison: "3eme" },
        { question: "Le mot 'rex' (le roi) est de la 3ème déclinaison. Quel est son génitif singulier ?", options: ["rex", "regis", "regi", "regem"], correct: 1, declinaison: "3eme" },
        { question: "Quelle est la terminaison du nominatif singulier de la 4ème déclinaison (masculin) ?", options: ["-us", "-u", "-um", "-ibus"], correct: 0, declinaison: "4eme" },
        { question: "Le mot 'manus' (la main) est à la 4ème déclinaison. Quel est son ablatif pluriel ?", options: ["manus", "manuum", "manibus", "manum"], correct: 2, declinaison: "4eme" },
        { question: "Quelle est la terminaison du génitif singulier de la 5ème déclinaison ?", options: ["-es", "-ei", "-em", "-e"], correct: 1, declinaison: "5eme" },
        { question: "Le mot 'res' (la chose) est à la 5ème déclinaison. Quel est son accusatif pluriel ?", options: ["res", "rerum", "rebus", "res"], correct: 3, declinaison: "5eme" }
    ]
  },
  intermediaire: {
    vocab: [
      { question: "Que signifie 'fortis' ?", options: ["faible", "fort", "rapide", "lent"], correct: 1 },
      { question: "Que signifie 'bellum' ?", options: ["beauté", "guerre", "paix", "belle"], correct: 1 },
    ],
    conjugaison: [
        { question: "Conjuguez 'capere' à la 3ème personne du pluriel (présent)", options: ["capio", "capis", "capit", "capiunt"], correct: 3, temps: "present", voix: "actif" },
        { question: "Quelle est la forme passive de 'amo' ?", options: ["amatur", "amor", "amans", "amatus"], correct: 1, temps: "present", voix: "passif" },
    ],
    temps: [
        { question: "Quel temps est 'amaveram' ?", options: ["imparfait", "parfait", "plus-que-parfait", "futur antérieur"], correct: 2, temps: "plusqueparfait" },
        { question: "Quel temps est 'amatus sum' ?", options: ["présent passif", "parfait passif", "futur passif", "imparfait passif"], correct: 1, temps: "parfait" },
    ],
    culture: [
        { question: "Combien de collines comptait Rome ?", options: ["5", "7", "9", "12"], correct: 1 },
        { question: "Qui a écrit l'Énéide ?", options: ["Homère", "Ovide", "Virgile", "Horace"], correct: 2 },
    ],
    citations: [
        { question: "Que signifie 'Alea iacta est' ?", options: ["Les dés sont jetés", "Le sort en est jeté", "C'est joué", "Toutes ces réponses"], correct: 3 },
        { question: "Que signifie 'Memento mori' ?", options: ["Souviens-toi de vivre", "Souviens-toi que tu mourras", "N'oublie pas la mort", "Carpe diem"], correct: 1 },
    ],
    phrases: [
        { question: "Miles fortis in bello pugnat", options: ["Le soldat fort combat dans la guerre", "Le soldat faible fuit la guerre", "Les soldats forts gagnent", "Le soldat revient de guerre"], correct: 0 },
        { question: "Urbs magna est Roma", options: ["Rome est une petite ville", "Rome est une grande ville", "Rome était une ville", "Rome sera une ville"], correct: 1 },
    ],
    reconstitution: [
        { french: "Le soldat combat", words: ["Miles", "pugnat"], correct: ["Miles", "pugnat"], declinaisons: ["nominatif"] },
        { french: "La loi est juste", words: ["Lex", "iusta", "est"], correct: ["Lex", "iusta", "est"], declinaisons: ["nominatif"] },
    ],
    vraifaux: [
        { latin: "Fortis", french: "Fort", correct: true },
        { latin: "Bellum", french: "Beauté", correct: false },
    ],
    declinaison: [
        { question: "Quelle est la terminaison du génitif singulier de la 1ère déclinaison ?", options: ["-a", "-ae", "-am", "-arum"], correct: 1, declinaison: "1ere" },
        { question: "Le mot 'rosa' (la rose) est à la 1ère déclinaison. Quel est son accusatif pluriel ?", options: ["rosas", "rosae", "rosis", "rosarum"], correct: 0, declinaison: "1ere" },
        { question: "Quelle est la terminaison du nominatif singulier pour les noms masculins de la 2ème déclinaison ?", options: ["-us", "-um", "-i", "-o"], correct: 0, declinaison: "2eme" },
        { question: "Le mot 'dominus' (le maître) est à la 2ème déclinaison. Quel est son datif singulier ?", options: ["domine", "dominum", "domino", "domini"], correct: 2, declinaison: "2eme" },
        { question: "La 3ème déclinaison a des modèles... ?", options: ["Uniquement masculins", "Uniquement féminins", "Masculins, féminins et neutres", "Uniquement neutres"], correct: 2, declinaison: "3eme" },
        { question: "Le mot 'rex' (le roi) est de la 3ème déclinaison. Quel est son génitif singulier ?", options: ["rex", "regis", "regi", "regem"], correct: 1, declinaison: "3eme" },
        { question: "Quelle est la terminaison du nominatif singulier de la 4ème déclinaison (masculin) ?", options: ["-us", "-u", "-um", "-ibus"], correct: 0, declinaison: "4eme" },
        { question: "Le mot 'manus' (la main) est à la 4ème déclinaison. Quel est son ablatif pluriel ?", options: ["manus", "manuum", "manibus", "manum"], correct: 2, declinaison: "4eme" },
        { question: "Quelle est la terminaison du génitif singulier de la 5ème déclinaison ?", options: ["-es", "-ei", "-em", "-e"], correct: 1, declinaison: "5eme" },
        { question: "Le mot 'res' (la chose) est à la 5ème déclinaison. Quel est son accusatif pluriel ?", options: ["res", "rerum", "rebus", "res"], correct: 3, declinaison: "5eme" }
    ]
  },
  avance: {
    vocab: [
      { question: "Que signifie 'virtus' ?", options: ["vertu", "vice", "vérité", "victoire"], correct: 0 },
      { question: "Que signifie 'sapientia' ?", options: ["science", "sagesse", "saveur", "salut"], correct: 1 },
    ],
    conjugaison: [
        { question: "Conjuguez 'ferre' au subjonctif présent, 1ère personne", options: ["fero", "feram", "tulerim", "ferrem"], correct: 1, temps: "present", voix: "actif" },
        { question: "Quel est le participe parfait passif de 'scribere' ?", options: ["scribens", "scriptus", "scriptor", "scribendum"], correct: 1, temps: "parfait", voix: "passif" },
    ],
    temps: [
        { question: "Dans 'cum vidissem', quel est le temps ?", options: ["subjonctif présent", "subjonctif imparfait", "subjonctif parfait", "subjonctif plus-que-parfait"], correct: 3, temps: "plusqueparfait" },
        { question: "Quel temps est 'amatus ero' ?", options: ["parfait passif", "futur passif", "futur antérieur passif", "plus-que-parfait passif"], correct: 2, temps: "futur" },
    ],
    culture: [
        { question: "Qui était le dernier roi de Rome ?", options: ["Romulus", "Numa Pompilius", "Tarquin le Superbe", "Servius Tullius"], correct: 2 },
        { question: "Que signifie SPQR ?", options: ["Senatus Populusque Romanus", "Senatus Populus Quirites Romani", "Salus Populi Quirites Romani", "Senatus Princeps Quirites Romani"], correct: 0 },
    ],
    citations: [
        { question: "Que signifie 'Cogito ergo sum' ?", options: ["Je pense donc je suis", "Je doute donc j'existe", "Je réfléchis donc je vis", "Je sais donc je suis"], correct: 0 },
        { question: "Qui a dit 'Homo homini lupus' ?", options: ["Plaute", "Cicéron", "Hobbes", "Sénèque"], correct: 0 },
    ],
    phrases: [
        { question: "Veni, vidi, vici", options: ["Je suis venu, j'ai vu, j'ai vaincu", "Viens, vois, vaincs", "Il vint, il vit, il vainquit", "Nous venons, voyons, vainquons"], correct: 0 },
        { question: "Philosophia ancilla theologiae", options: ["La philosophie servante de la théologie", "La philosophie aide la théologie", "La philosophie est sous la théologie", "Toutes ces réponses"], correct: 0 },
    ],
    reconstitution: [
        { french: "Je pense, donc je suis", words: ["Cogito", "ergo", "sum"], correct: ["Cogito", "ergo", "sum"], declinaisons: ["nominatif"] },
        { french: "L'homme est un loup pour l'homme", words: ["Homo", "homini", "lupus"], correct: ["Homo", "homini", "lupus"], declinaisons: ["nominatif", "datif"] },
    ],
    vraifaux: [
        { latin: "Virtus", french: "Vertu", correct: true },
        { latin: "Sapientia", french: "Science", correct: false },
    ],
    declinaison: [
        { question: "Quelle est la terminaison du génitif singulier de la 1ère déclinaison ?", options: ["-a", "-ae", "-am", "-arum"], correct: 1, declinaison: "1ere" },
        { question: "Le mot 'rosa' (la rose) est à la 1ère déclinaison. Quel est son accusatif pluriel ?", options: ["rosas", "rosae", "rosis", "rosarum"], correct: 0, declinaison: "1ere" },
        { question: "Quelle est la terminaison du nominatif singulier pour les noms masculins de la 2ème déclinaison ?", options: ["-us", "-um", "-i", "-o"], correct: 0, declinaison: "2eme" },
        { question: "Le mot 'dominus' (le maître) est à la 2ème déclinaison. Quel est son datif singulier ?", options: ["domine", "dominum", "domino", "domini"], correct: 2, declinaison: "2eme" },
        { question: "La 3ème déclinaison a des modèles... ?", options: ["Uniquement masculins", "Uniquement féminins", "Masculins, féminins et neutres", "Uniquement neutres"], correct: 2, declinaison: "3eme" },
        { question: "Le mot 'rex' (le roi) est de la 3ème déclinaison. Quel est son génitif singulier ?", options: ["rex", "regis", "regi", "regem"], correct: 1, declinaison: "3eme" },
        { question: "Quelle est la terminaison du nominatif singulier de la 4ème déclinaison (masculin) ?", options: ["-us", "-u", "-um", "-ibus"], correct: 0, declinaison: "4eme" },
        { question: "Le mot 'manus' (la main) est à la 4ème déclinaison. Quel est son ablatif pluriel ?", options: ["manus", "manuum", "manibus", "manum"], correct: 2, declinaison: "4eme" },
        { question: "Quelle est la terminaison du génitif singulier de la 5ème déclinaison ?", options: ["-es", "-ei", "-em", "-e"], correct: 1, declinaison: "5eme" },
        { question: "Le mot 'res' (la chose) est à la 5ème déclinaison. Quel est son accusatif pluriel ?", options: ["res", "rerum", "rebus", "res"], correct: 3, declinaison: "5eme" }
    ]
  }
};
