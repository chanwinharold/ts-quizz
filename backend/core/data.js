const CATEGORIES = [
    {
        slug: "science",
        name: "Science",
        description: "Physique, chimie, biologie et découvertes scientifiques.",
    },
    {
        slug: "history",
        name: "History",
        description: "Grandes périodes, événements et personnages de l'histoire.",
    },
    {
        slug: "tech",
        name: "Tech",
        description: "Informatique, innovations et nouvelles technologies.",
    },
    {
        slug: "pop-culture",
        name: "Pop Culture",
        description: "Films, séries, musiques, jeux vidéo et tendances.",
    },
];

const DIFFICULTIES = ["Easy", "Medium", "Hard"];

const QUESTIONS = {
    science: {
        Easy: [
            ["Quelle planète est surnommée la planète rouge ?", ["Terre", "Mars", "Vénus", "Jupiter"], 1],
            ["Combien de pattes possède une araignée ?", ["6", "8", "10", "12"], 1],
            ["Quel gaz les plantes absorbent-elles de l'atmosphère ?", ["Oxygène", "Azote", "Dioxyde de carbone", "Hydrogène"], 2],
            ["Quel est le symbole chimique de l'eau ?", ["H2O", "CO2", "O2", "NaCl"], 0],
            ["Quel organite est la « centrale énergétique » de la cellule ?", ["Noyau", "Ribosome", "Mitochondrie", "Appareil de Golgi"], 2],
            ["Lequel de ces éléments est liquide à température ambiante ?", ["Fer", "Mercure", "Sel", "Bois"], 1],
        ],
        Medium: [
            ["Quelle est la vitesse de la lumière dans le vide (environ) ?", ["300 000 km/s", "150 000 km/s", "3 000 km/s", "30 000 km/s"], 0],
            ["Quelle planète a le jour le plus court du Système solaire ?", ["Mars", "Jupiter", "Saturne", "Vénus"], 1],
            ["Quelle est l'unité SI de la force ?", ["Joule", "Newton", "Pascal", "Watt"], 1],
            ["Quel processus permet aux plantes de produire leur nourriture ?", ["Respiration", "Photosynthèse", "Fermentation", "Digestion"], 1],
            ["Quelle particule subatomique possède une charge négative ?", ["Proton", "Neutron", "Électron", "Positron"], 2],
            ["Quel est le gaz le plus abondant de l'atmosphère terrestre ?", ["Oxygène", "Dioxyde de carbone", "Azote", "Argon"], 2],
        ],
        Hard: [
            ["Quel est l'isotope le plus courant de l'hydrogène ?", ["Deutérium", "Protium", "Tritium", "Hydron"], 1],
            ["Comment appelle-t-on la distance moyenne Terre-Soleil ?", ["Année-lumière", "Unité astronomique", "Parsec", "Heure-lumière"], 1],
            ["Quelle particule subatomique a été découverte par James Chadwick ?", ["Électron", "Proton", "Neutron", "Positron"], 2],
            ["Quel élément du tableau périodique a le numéro atomique 79 ?", ["Argent", "Or", "Platine", "Plomb"], 1],
            ["Quel gaz donne aux enseignes au néon leur éclat rouge-orangé ?", ["Argon", "Hélium", "Néon", "Xénon"], 2],
            ["Quel est le composant principal du gaz naturel ?", ["Propane", "Méthane", "Éthane", "Butane"], 1],
        ],
    },
    history: {
        Easy: [
            ["Qui fut le premier président des États-Unis ?", ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"], 1],
            ["En quelle année la Seconde Guerre mondiale s'est-elle terminée ?", ["1943", "1944", "1945", "1946"], 2],
            ["Dans quel pays se trouve la Grande Muraille ?", ["Japon", "Inde", "Chine", "Corée du Sud"], 2],
            ["Quelle civilisation antique a bâti les pyramides de Gizeh ?", ["Romains", "Grecs", "Égyptiens", "Mayas"], 2],
            ["En quelle année le Titanic a-t-il coulé ?", ["1905", "1912", "1920", "1925"], 1],
            ["Qui fut le premier homme à marcher sur la Lune ?", ["Buzz Aldrin", "Neil Armstrong", "Youri Gagarine", "Michael Collins"], 1],
        ],
        Medium: [
            ["En quelle année le mur de Berlin est-il tombé ?", ["1985", "1987", "1989", "1991"], 2],
            ["Quel empire a été dirigé par Jules César ?", ["Empire grec", "Empire romain", "Empire ottoman", "Empire perse"], 1],
            ["Dans quel pays la Renaissance a-t-elle commencé ?", ["France", "Italie", "Angleterre", "Espagne"], 1],
            ["Qui a peint la Joconde ?", ["Michel-Ange", "Raphaël", "Léonard de Vinci", "Donatello"], 2],
            ["Quelle guerre a opposé le Nord et le Sud des États-Unis ?", ["Guerre d'indépendance", "Guerre de Sécession", "Première Guerre mondiale", "Guerre du Vietnam"], 1],
            ["Qui fut la première Première ministre du Royaume-Uni ?", ["Margaret Thatcher", "Theresa May", "Reine Victoria", "Angela Merkel"], 0],
        ],
        Hard: [
            ["Le traité de Westphalie (1648) a mis fin à quelle guerre ?", ["Guerre de Cent Ans", "Guerre de Trente Ans", "Guerre des Deux Roses", "Guerres napoléoniennes"], 1],
            ["Qui fut le dernier empereur de Chine ?", ["Puyi", "Sun Yat-sen", "Mao Zedong", "Cixi"], 0],
            ["En quelle année la Magna Carta a-t-elle été signée ?", ["1066", "1215", "1492", "1789"], 1],
            ["Quel général a traversé les Alpes avec des éléphants ?", ["Alexandre le Grand", "Jules César", "Hannibal", "Napoléon"], 2],
            ["Dans quel pays la Révolution industrielle a-t-elle commencé ?", ["États-Unis", "Allemagne", "Royaume-Uni", "France"], 2],
            ["Quelle était la capitale de l'empire aztèque ?", ["Cusco", "Tenochtitlan", "Machu Picchu", "Chichen Itza"], 1],
        ],
    },
    tech: {
        Easy: [
            ["Que signifie l'acronyme « CPU » ?", ["Central Processing Unit", "Computer Personal Unit", "Central Program Utility", "Core Processing Unit"], 0],
            ["Quelle entreprise a créé l'iPhone ?", ["Google", "Samsung", "Apple", "Microsoft"], 2],
            ["Que signifie l'acronyme « HTML » ?", ["HyperText Markup Language", "HighText Machine Language", "Hyperlink Text Markup Language", "Home Tool Markup Language"], 0],
            ["Lequel de ces logiciels est un système d'exploitation ?", ["Photoshop", "Linux", "Excel", "Firefox"], 1],
            ["En binaire, que représente la valeur « 1 » ?", ["Éteint", "Allumé", "Nul", "Erreur"], 1],
            ["Quelle entreprise a développé Windows ?", ["Apple", "Microsoft", "IBM", "Intel"], 1],
        ],
        Medium: [
            ["Que signifie l'acronyme « URL » ?", ["Uniform Resource Locator", "Universal Reading Link", "Unified Resource Language", "Unique Reference Locator"], 0],
            ["Quel langage est utilisé pour le style des pages web ?", ["HTML", "CSS", "JavaScript", "Python"], 1],
            ["Quel protocole est utilisé pour envoyer des e-mails ?", ["HTTP", "SMTP", "FTP", "TCP"], 1],
            ["Que signifie l'acronyme « HTTP » ?", ["HyperText Transfer Protocol", "High Tech Transfer Process", "Hyper Terminal Transmission Protocol", "Host Transfer Transport Protocol"], 0],
            ["Quelle entreprise possède le système Android ?", ["Apple", "Google", "Samsung", "Microsoft"], 1],
            ["Comment s'appelle la carte principale d'un ordinateur ?", ["Carte mère", "Disque dur", "RAM", "Carte graphique"], 0],
        ],
        Hard: [
            ["Quelle structure de données utilise le principe FIFO (premier entré, premier sorti) ?", ["Pile", "File", "Arbre", "Graphe"], 1],
            ["Que signifie l'acronyme « SSH » ?", ["Secure Shell", "Secure Socket Host", "System Server Host", "Safe Shell"], 0],
            ["Quel code de statut HTTP signifie « Non trouvé » ?", ["200", "301", "404", "500"], 2],
            ["Quel algorithme de tri a la meilleure complexité moyenne ?", ["Tri à bulles", "Tri par insertion", "Tri fusion", "Tri par sélection"], 2],
            ["Que signifie l'acronyme « DNS » ?", ["Domain Name System", "Digital Network Service", "Data Name Server", "Distributed Node System"], 0],
            ["En quelle année le World Wide Web a-t-il été inventé ?", ["1985", "1989", "1993", "1999"], 1],
        ],
    },
    "pop-culture": {
        Easy: [
            ["Dans « Harry Potter », comment s'appelle le meilleur ami de Harry ?", ["Drago Malefoy", "Ron Weasley", "Neville Londubat", "Cédric Diggory"], 1],
            ["Qui joue Iron Man dans les films Marvel ?", ["Chris Evans", "Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"], 1],
            ["Quel film contient la réplique « I'll be back » ?", ["Rocky", "Terminator", "Rambo", "Die Hard"], 1],
            ["Dans « Star Wars », quelle est la couleur du sabre laser de Dark Vador ?", ["Vert", "Bleu", "Rouge", "Violet"], 2],
            ["Qui chante « Shape of You » ?", ["Justin Bieber", "Ed Sheeran", "Bruno Mars", "Shawn Mendes"], 1],
            ["Dans la série « Mario », comment s'appelle la princesse ?", ["Daisy", "Peach", "Zelda", "Rosalina"], 1],
        ],
        Medium: [
            ["Quelle série met en scène le personnage « Walter White » ?", ["Game of Thrones", "Breaking Bad", "Stranger Things", "The Office"], 1],
            ["Dans « Le Seigneur des anneaux », qui porte l'Anneau unique ?", ["Legolas", "Frodon", "Gandalf", "Aragorn"], 1],
            ["Quel artiste a sorti l'album « Thriller » ?", ["Prince", "Michael Jackson", "Madonna", "Whitney Houston"], 1],
            ["Dans « Friends », comment s'appelle la femme de Ross au début de la série ?", ["Rachel", "Monica", "Emily", "Carol"], 3],
            ["Quel jeu vidéo met en scène « Lara Croft » ?", ["Minecraft", "Tomb Raider", "Fortnite", "Zelda"], 1],
            ["Quel film a remporté l'Oscar du meilleur film en 2020 ?", ["1917", "Parasite", "Joker", "Once Upon a Time in Hollywood"], 1],
        ],
        Hard: [
            ["Dans le MCU, quel acteur joue Thanos ?", ["Josh Brolin", "Tom Hiddleston", "Benedict Cumberbatch", "Paul Bettany"], 0],
            ["Quel groupe a sorti l'album concept « The Dark Side of the Moon » ?", ["The Beatles", "Pink Floyd", "Led Zeppelin", "Queen"], 1],
            ["À la fin de « Game of Thrones », qui siège sur le Trône de Fer ?", ["Jon Snow", "Daenerys", "Bran Stark", "Tyrion"], 2],
            ["Comment s'appelle la ville fictive du film « Blade Runner » ?", ["Neo Tokyo", "Los Angeles", "Gotham", "Midgar"], 1],
            ["Dans « Inception », quel objet Cobb utilise-t-il pour distinguer le rêve de la réalité ?", ["Une toupie", "Une bague", "Une pièce", "Une montre"], 0],
            ["Quelle franchise de jeux vidéo met en scène « Master Chief » ?", ["Halo", "Call of Duty", "Doom", "Half-Life"], 0],
        ],
    },
};

let idCounter = 0;

function buildQuestions() {
    const list = [];
    for (const category of CATEGORIES) {
        for (const difficulty of DIFFICULTIES) {
            for (const [question, options, correctIndex] of QUESTIONS[category.slug][difficulty]) {
                list.push({
                    id: `q-${++idCounter}`,
                    category: category.slug,
                    difficulty,
                    question,
                    options,
                    correctIndex,
                });
            }
        }
    }
    return list;
}

const ALL_QUESTIONS = buildQuestions();

function getCategories() {
    return CATEGORIES.map((category) => {
        const counts = DIFFICULTIES.map((difficulty) => ({
            difficulty,
            count: ALL_QUESTIONS.filter(
                (q) => q.category === category.slug && q.difficulty === difficulty
            ).length,
        }));
        return {
            slug: category.slug,
            name: category.name,
            description: category.description,
            difficulties: counts,
            totalQuestions: counts.reduce((sum, c) => sum + c.count, 0),
        };
    });
}

function getQuestions({ category, difficulty, limit }) {
    if (!category || !QUESTIONS[category]) {
        return { error: `Category '${category}' not found` };
    }
    let questions = ALL_QUESTIONS.filter((q) => q.category === category);

    if (difficulty) {
        const normalized = difficulty.charAt(0).toUpperCase() + difficulty.slice(1).toLowerCase();
        if (!DIFFICULTIES.includes(normalized)) {
            return { error: `Difficulty must be one of: ${DIFFICULTIES.join(", ")}` };
        }
        questions = questions.filter((q) => q.difficulty === normalized);
    }

    const max = Number.isFinite(Number(limit)) ? Math.min(Math.max(Number(limit), 1), 50) : 10;
    return questions.slice(0, max);
}

module.exports = {
    CATEGORIES,
    DIFFICULTIES,
    getCategories,
    getQuestions,
};
