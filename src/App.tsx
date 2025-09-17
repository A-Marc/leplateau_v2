import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Clock, Users, Star, Quote } from 'lucide-react';

interface Cocktail {
  id: number;
  name: string;
  category: string;
  difficulty: string;
  time: string;
  servings: number;
  rating: number;
  ingredients: string[];
  instructions: string[];
  description: string;
  image: string;
  movieTitle: string;
  movieImage: string;
  movieQuote: string;
  movieYear: number;
}

const cocktails: Cocktail[] = [
  {
    id: 1,
    name: "Le Petit Trianon",
    category: "Signature",
    difficulty: "Intermediate",
    time: "5 min",
    servings: 1,
    rating: 4.8,
    ingredients: ["7 framboises", "1,5 Cl de crème de framboise", "Glace pilée", "20 cl de Champagne", "1 pétale de rose","1 macaron framboise"],
    instructions: ["Mixer la crème de framboise, les framboises et la glace pilée", "Glacez le contour de la coupe en trempant le bord du verre dans 2cm d’eau puis dans une assiette parsemée de sucre cassonade", "Versez 3 à 5 cl du mélange obtenu au fonds de la coupe", "Versez délicatement le champagne jusqu’à 1-2 cm du haut de la coupe","Ajoutez les éléments de décoration autour du cocktail"],
    description: "Pour échapper aux colifichets de la Cour, Marie-Antoinette se retrouvait en cercles intimistes dans ses salons du petit Trianon pour y déguster son cocktail favori.",
    image: "https://divers-fpsb.s3.eu-north-1.amazonaws.com/le-petit-trianon.png?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
    movieTitle: "Marie-Antoinette",
    movieImage: "https://divers-fpsb.s3.eu-north-1.amazonaws.com/petit-trianon-film2.jpg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    movieQuote: `– Tout ceci est ridicule ! \n – Tout ceci Madame, c’est Versailles !`,
    movieYear: 2008
  },
  {
    id: 2,
    name: "Le Liane Folie",
    category: "Dark & Mysterious",
    difficulty: "Advanced",
    time: "8 min",
    servings: 1,
    rating: 4.9,
    ingredients: ["1/2 concombre", "1 jus de citron vert frais", "1 cl de sirop de sucre de canne", "Feuilles de menthe","1,5 cl de Charteuses","Eau pétillante"],
    instructions: ["Pelez le concombre avec un économe, afin d’en obtenir de fines lamelles", "Pressez le jus de citron et mettez-le au fond du verre avec le sirop de sucre de canne, quelques feuilles de menthe frappées, et quelques lamelles de concombre", "Pilonnez le fonds du verre avec la Chartreuse", "Remplir le reste du verre avec un mélange de morceaux de citrons verres, de lamelles de concombres et de glaçons","Ajoutez l’eau pétillante"],
    description: "Certes, Tarzan a grandit parmi les singes, néanmoins, à l’origine, ce petit d’homme est le fils d’anglais raffiné. Pour se retrouver à la jonction de ces univers …",
    image: "https://divers-fpsb.s3.eu-north-1.amazonaws.com/le-liane-folie.png?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
    movieTitle: "Tarzan",
    movieImage: "https://divers-fpsb.s3.eu-north-1.amazonaws.com/liane-folie-film.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    movieQuote: "– Tantor : Maman ! Es-tu sûre que cette eau est très hygiénique ?\n– Tok : Quelle sorte d’animal primitif est responsable de cette pagaille ?",
    movieYear: 1999
  },
  {
    id: 3,
    name: "Le High Noon",
    category: "Refreshing",
    difficulty: "Beginner",
    time: "3 min",
    servings: 1,
    rating: 4.7,
    ingredients: ["3 cl de sirop d’érable", "1 jus de citron jaune", "1 pincée de cannelle en poudre", "1,5 cl de Whisky ambré", "1 bâton de cannelle"],
    instructions: ["Dans le shaker, mélangez le whisky, le sirop d’érable légèrement dilué à l’eau et la cannelle, sans secouer, pour obtenir un tout homogène", "Pressez le jus de citron jaune et incorporez le au shaker avec des glaçons.", "Shakez !", "Remplir le verre de glaçons et versez le mélange shaké sur les glaçons","Déposez le bâton de cannelle sur le dessus pour la finition."],
    description: "Anxieux, Gary Cooper, au comptoir du Saloon, n’a plus qu’à attendre seul la bande de Franck Miller qui débarque du train le jour même à midi pile après les 3 sifflements de freinage…",
    image: "https://divers-fpsb.s3.eu-north-1.amazonaws.com/high-noon-2.png?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
    movieTitle: "Le Train sifflera trois fois",
    movieImage: "https://divers-fpsb.s3.eu-north-1.amazonaws.com/high-noon-film-3.jpg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    movieQuote: "– Vous avez accepté d’être volontaires pour combattre cette bande, la lutte continue\n– La situation était différente en ce temps là, vous étiez régulièrement six dans la police et vos hommes tiraient bien. Vous n’êtes plus que deux aujourd’hui…",
    movieYear: 1952
  },
  {
    id: 4,
    name: "Le Mambo",
    category: "Bold & Spicy",
    difficulty: "Intermediate",
    time: "6 min",
    servings: 1,
    rating: 4.6,
    ingredients: [" 3 cl de Rhum ambré", "1/2 jus de citron vert", "6 cl de jus de grenade frais", "1 c. à café de grains de grenade","Glaçons","1 mirabelle","Quelques zestes de citron vert"],
    instructions: ["Dans le shaker, mélangez le rhum et le jus de grenade sans secouer, pour obtenir un tout homogène", "Pressez le jus de citron vert et incorporez le au shaker avec des glaçons.", "Shakez !", "Déposez au fonds du verre quelques glaçons, une cuillère à café de grains de grenade et versez le mélange shaké sur les glaçons","Déposez la mirabelle sur le liseret du verre ainsi que les zestes de citron vert."],
    description: "West Side Story, version américaine de Roméo & Juliette : sur le ring s’affrontent un gang New Yorkais et un autre, Porto Ricain … La douceur de la romance, les effluves de Porto Rico et l’amertume de guerre des gangs se retrouvent dans ce cocktail…",
    image: "https://divers-fpsb.s3.eu-north-1.amazonaws.com/mambo.png?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
    movieTitle: "West Side Story",
    movieImage: "https://divers-fpsb.s3.eu-north-1.amazonaws.com/mambo-film.jpg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    movieQuote: "– I’m not one of them Maria\n– But you are not one of us, and I am not one of you …",
    movieYear: 1962
  },
  {
    id: 5,
    name: "Le Scaramanga",
    category: "Floral",
    difficulty: "Beginner",
    time: "4 min",
    servings: 1,
    rating: 4.5,
    ingredients: ["3 cl de Vodka", "6 cl de jus de litchi", "3 gouttes d’Angostura bitter", " 1 jus de citron vert","3 feuilles de menthe","1 goutte de colorant alimentaire bleu","1 goutte de colorant alimentaire rouge"],
    instructions: ["Dans le shaker, mélangez la vodka, le jus de litchi, le jus de citron, les gouttes d’Angostura bitter et les glaçons.", "Disposez des feuilles de menthe au fonds du verre ainsi que les glaçons puis versez la préparation.", "Ajoutez les gouttes de colorant alimentaire."],
    description: "",
    image: "https://divers-fpsb.s3.eu-north-1.amazonaws.com/scaramanga.png?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
    movieTitle: "L’homme au pistolet d’or",
    movieImage: "https://divers-fpsb.s3.eu-north-1.amazonaws.com/pistolet2.jpg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    movieQuote: "Scaramanga porta lentement la main à la ceinture et prit son revolver. La lumière du projecteur, qui éclairait la fille, fit briller l’or de l’arme. James Bond, qui tournait le dos à la piste, ramassa le revolver et le soupesa…",
    movieYear: 1974
  },
  {
    id: 6,
    name: "Le Solognot",
    category: "Tropical",
    difficulty: "Beginner",
    time: "3 min",
    servings: 1,
    rating: 4.4,
    ingredients: ["12 cl de vin rouge (rond et équilibré)", "4 cl de Cointreau", "4 cl de sirop de sucre de canne", "12 mûres des bois","3 gouttes d’Angostura bitter","1 jus de citron vert","1 pincée de cannelle en poudre","1 branche de feuillages"],
    instructions: ["Épépinez les mûres puis les pilonner dans un bol. Une fois le mélange homogène, le verser dans le fonds du verre et le mélanger avec le jus de citron vert pressé. Remuez.", "Ajoutez le sirop de sucre, les gouttes d’Angostura bitter, le Cointreau.", "Mélangez avec la cuillère le mélange, ajoutez les glaçons puis versez le vin rouge avant de saupoudrer avec une pincée de cannelle.", "Ajoutez une branche d’arbuste en guise de décoration."],
    description: "",
    image: "https://divers-fpsb.s3.eu-north-1.amazonaws.com/solognot.png?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
    movieTitle: "L'École buissonnière",
    movieImage: "https://divers-fpsb.s3.eu-north-1.amazonaws.com/ecole.jpg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    movieQuote: "Au bout de l’allée forestière, là où la brume avait avalé le monde, quelque chose émergeait lentement, une chimère grandissant comme dans un rêve. Un cerf immense déchira le brouillard, sa ramure était si ample que, pendant un instant, Paul crut que l’ombre l’avait décuplé.",
    movieYear: 2017
  },
  {
    id: 7,
    name: "Le Tiffany's",
    category: "Electric",
    difficulty: "Advanced",
    time: "7 min",
    servings: 1,
    rating: 4.7,
    ingredients: ["Prosecco", "3 cl de Saint Germain", "quelques gouttes de sirop de violette", "1 jus de citron vert", "1 fleur de chardon"],
    instructions: ["Pressez le jus de citron au fonds du verre.", "Ajoutez le St Germain puis remplissez la coupe de Prosecco", "Versez les quelques gouttes de sirop de violette au fonds du verre jusqu’à ce que le mélange soit à votre goût", "Ajoutez la fleur de chardon à la surface du cocktail"],
    description: "",
    image: "https://divers-fpsb.s3.eu-north-1.amazonaws.com/diamant-sur-canapé.png?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
    movieTitle: "Diamants sur canapé",
    movieImage: "https://divers-fpsb.s3.eu-north-1.amazonaws.com/diamants.jpg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    movieQuote: "– Holly Golightly : I’ll tell you one thing, Fred, darling… I’d marry you for your money in a minute. Would you marry me for my money? \n– Paul Varjak : In a minute.\n– Holly Golightly : I guess it’s pretty lucky neither of us is rich, huh?\n– Paul Varjak : Yeah."

,
    movieYear: 1961
  },
  {
    id: 8,
    name: "La Black Pearl",
    category: "Classic Twist",
    difficulty: "Intermediate",
    time: "5 min",
    servings: 1,
    rating: 4.8,
    ingredients: ["3 cl de Rhum ambré", "1,5 cl de sirop d’orgeat", "3 gouttes d’Angostura bitter", "1,5 cl d’eau de coco","1 jus de citron vert","Perles de tapioca noires"],
    instructions: ["Plongez les perles de tapioca dans de l’eau bouillante et laissez frémir jusqu’à ce que les perles remontent à la surface. Retirez du feu, égouttez les perles puis plongez les dans l’eau glacée 20 secondes avant de les mettre au sec dans un bol.", "Pressez le citron vert au fonds du shaker, ajoutez le rhum, le sirop d’orgeat, les gouttes d’Angostura bitter et l’eau de coco.", "Shakez avec les glaçons.", "Déposez 2 grandes cuillères de perles de tapioca au fonds du verre, couvrir d’une couche de glaçons, versez le cocktail par dessus."],
    description: "A sophisticated twist on the classic Manhattan with smoky undertones.",
    image: "https://divers-fpsb.s3.eu-north-1.amazonaws.com/pirate-des-caraibes.png?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
    movieTitle: "Pirates des Caraïbes",
    movieImage: "https://divers-fpsb.s3.eu-north-1.amazonaws.com/pirate2.jpg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    movieQuote: "– Le Black Pearl ? Je connais sa légende. Il bombarde navires et campements depuis près de dix ans. ll ne laisse jamais de survivant. \n– Pas de survivants ? Comment les légendes prendraient forme dans ce cas là ?\n–Soit c’est du génie, soit c’est de la folie.\n– Ce qui est le plus marrant, c’est que le plus souvent, ces deux choses vont ensemble.",
    movieYear: 2003
  },
  {
    id: 9,
    name: "Le Ballmeyer",
    category: "Tropical",
    difficulty: "Beginner",
    time: "4 min",
    servings: 1,
    rating: 4.3,
    ingredients: ["3 cl de Cointreau", "9 cl de jus de poire", "3 gouttes d’Angostura bitter", "1 jus de citron vert", "1 pincée de cannelle","3 gouttes de colorant alimentaire jaune","1 feuille d’automne"],
    instructions: ["Mélangez dans le shaker le citron pressé, le Cointreau, le jus de poire, la pincée de cannelle.", "Shakez avec les glaçons.", "Mélangez avec la cuillère le mélange et les 2 ou 3 gouttes de colorant alimentaire.", "Versez le mélange dans le verre contenant déjà quelques glaçons."],
    description: "",
    image: "https://divers-fpsb.s3.eu-north-1.amazonaws.com/balmeyer.png?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
    movieTitle: "Le mystère de la chambre jaune",
    movieImage: "https://divers-fpsb.s3.eu-north-1.amazonaws.com/chambre-jaune.gif?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    movieQuote: "– Je suis allé poser cette question à la chambre jaune, et la chambre jaune m’a répondu.\n– Il va de soi, euh, dorénavant, qu’en tout état de cause, après ces nouveaux faits relatés et en vertu des pouvoirs dont je dispose, c’est-à-dire dans l’immédiat, euh, vous allez, euh, être remis en liberté provisoire",
    movieYear: 2003
  },
  {
    id: 10,
    name: "Le Mille et une nuits",
    category: "Herbal",
    difficulty: "Advanced",
    time: "8 min",
    servings: 1,
    rating: 4.6,
    ingredients: ["1,5 cl de Cointreau", "6 cl cl de Disaronno", "18 cl de thé glacé à la menthe", "6 gouttes d’Angostura bitte", "1,5 jus de citron jaune", "3 gouttes de colorant alimentaire bleu"],
    instructions: ["Mélangez dans le shaker le citron pressé, le Cointreau, le Disaronno, le thé à la menthe et l’angostura bitter.", "Shakez avec les glaçons.", "Mélangez avec la cuillère le mélange et les 2 ou 3 gouttes de colorant alimentaire.", "Versez le mélange dans le verre contenant déjà quelques glaçons.","Pelez quelques zestes de citron jaune et déposez les sur le bord du verre."],
    description: "",
    image: "https://divers-fpsb.s3.eu-north-1.amazonaws.com/aladdin.png?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
    movieTitle: "Aladdin",
    movieImage: "https://divers-fpsb.s3.eu-north-1.amazonaws.com/aladdin3.jpg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    movieQuote: "– Maître Aladdin très cher je vous offre aujourd’hui, un dessert du tonnerre, un éclair, car je suis votre meilleur ami. \n– Je suis maître d’hôtel, au restaurant de la vie ! Passez commande au creu de mon oreille, je me coupe en quatre pour mes amis.",
    movieYear: 1992
  },
  {
    id: 11,
    name: "Le Riviera",
    category: "Dark & Mysterious",
    difficulty: "Advanced",
    time: "9 min",
    servings: 1,
    rating: 4.9,
    ingredients: ["1,5 cl de Vodka", "5 cl de Saint Germain", " 1 jus de citron", "Eau pétillante", "3 cerises confites"],
    instructions: ["Dans le shaker, mélangez la Vodka, le Saint Germain et le citron pour obtenir un tout homogène.", "Versez le mélange du shaker dans le verre et ajoutez l’eau pétillante", "Déposez les cerises sur le liseret du verre."],
    description: "Au delà des lumières des hôtels de la croisette, au lieu de monter la garde derrière le bar, le serveur s’endort dans un canapé en cuir dans l’espace salon. Réveillé par une croqueuse de diamants, il lui confectionne pour la séduire, le cocktail Riviera…",
    image: "https://divers-fpsb.s3.eu-north-1.amazonaws.com/hors-de-prix-2.png?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
    movieTitle: "Hors de Prix",
    movieImage: "https://divers-fpsb.s3.eu-north-1.amazonaws.com/hors-de-prix-crop.png?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    movieQuote: "",
    movieYear: 2006
  },
  {
    id: 12,
    name: "Le Ticket d'Or",
    category: "Signature",
    difficulty: "Intermediate",
    time: "6 min",
    servings: 1,
    rating: 4.7,
    ingredients: ["6 cl de Cointreau", "3cl de Kahlua", "9 cl de café glaçé (brut ou décaféiné)", "10 cl de lait froid","1 meringue enrobée de chocolat","Chocolat en poudre"],
    instructions: ["Dans le shaker, mélangez le Cointreau, le Kahlua et le café pour obtenir un tout homogène.", "Faire mousser le lait froid sans le chauffer dans une machine à cappuccino.", "Versez le mélange du shaker dans le verre et déposez la mousse de lait par dessus", "Saupoudrez de cacao en poudre","Déposez la meringue sur le liseret du verre."],
    description: "",
    image: "https://divers-fpsb.s3.eu-north-1.amazonaws.com/ticket-dor-3.png?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
    movieTitle: "Charlie et la Chocolaterie",
    movieImage: "https://divers-fpsb.s3.eu-north-1.amazonaws.com/tiquet-dor-film.jpg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    movieQuote: "– 5 Tickets d’Or ont été cachés dans 5 papiers d’emballages de 5 chocolats Wonka\n- Ce serait formidable Charlie d’ouvrir une tablette de chocolat et de trouver un ticket d’or - Mais je n’en reçois qu’une par an…",
    movieYear: 2005
  }
];

function App() {
  const [selectedCocktail, setSelectedCocktail] = useState<Cocktail | null>(null);
  const [scrollY, setScrollY] = useState(0);

  //
  
    useEffect(() => {
    if (selectedCocktail) {
      document.body.style.overflow = "hidden"; // désactive le scroll de la page principale
    } else {
      document.body.style.overflow = "auto"; // réactive le scroll
    }

    return () => {
      document.body.style.overflow = "auto"; // sécurité au démontage
    };
  }, [selectedCocktail]);

  //
  

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-amber-400 tracking-wider">
            LE PLATEAU
          </div>
        </div>
      </nav>

      {/* Hero Section with Cocktails Grid */}
      <section id="home" className="relative min-h-screen pt-20">
        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 py-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
            Le Plateau
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Trinquer au septième art avec des cocktails originaux inspirés des films cultes
          </p>
        </div>

        {/* Cocktails Grid */}
        <div className="max-w-7xl mx-auto px-6 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {cocktails.map((cocktail, index) => (
              <div
                key={cocktail.id}
                className="group cursor-pointer"
                onClick={() => setSelectedCocktail(cocktail)}
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="relative overflow-hidden rounded-2xl bg-gray-900 hover:bg-gray-800 transition-all duration-500 transform hover:scale-105 hover:rotate-1">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={cocktail.image}
                      alt={cocktail.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-amber-400 transition-colors">
                      {cocktail.name}
                    </h3>
                    {/* <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                      {cocktail.description}
                    </p> */}
                    <div className="text-sm text-amber-400 font-medium">
                      {cocktail.movieTitle} ({cocktail.movieYear})
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cocktail Detail Modal */}
      {selectedCocktail && (
        
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg overflow-y-auto">
          {/* Sticky Back Button */}
          <div className="sticky top-6 right-6 z-50 flex justify-end p-6">
            <button
              onClick={() => setSelectedCocktail(null)}
              className="text-white hover:text-amber-400 
                         bg-black/70 px-6 py-3 rounded-full text-2xl font-bold 
                         transition-colors shadow-lg backdrop-blur-md"
            >
              ← Retour
            </button>
          </div>
          
          <div className="min-h-screen -mt-24">
            {/* Movie Header */}
            <div className="relative h-96 overflow-hidden">
              <img
                src={selectedCocktail.movieImage}
                alt={selectedCocktail.movieTitle}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black" />


                <button
    onClick={() => setSelectedCocktail(null)}
    className="sticky top-6 right-6 float-right z-50 text-white hover:text-amber-400 
               bg-black/70 px-6 py-3 rounded-full text-2xl font-bold 
               transition-colors shadow-lg"
  >
    ← Retour
  </button>
              


              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="mb-4">
                  <span className="text-amber-400 font-medium bg-amber-400/20 px-4 py-2 rounded-full">
                    {selectedCocktail.movieTitle} ({selectedCocktail.movieYear})
                  </span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                  {selectedCocktail.name}
                </h1>
              </div>
            </div>

            {/* Content */}
            <div className="max-w-6xl mx-auto px-8 py-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left Column - Cocktail Image and Quote */}
                <div>
                  <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mb-8">
                    <img
                      src={selectedCocktail.image}
                      alt={selectedCocktail.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Movie Quote */}
                  <div className="bg-gradient-to-r from-amber-500/10 to-yellow-600/10 border border-amber-400/20 rounded-2xl p-8">
                    <Quote className="text-amber-400 mb-4" size={32} />
                    <blockquote className="text-xl text-gray-300 italic leading-relaxed mb-4">
  {selectedCocktail.movieQuote.split("\n").map((line, idx) => (
    <span key={idx}>
      {line}
      <br />
    </span>
  ))}
</blockquote>
                    <cite className="text-amber-400 font-semibold">
                      — {selectedCocktail.movieTitle} ({selectedCocktail.movieYear})
                    </cite>
                  </div>
                </div>

                {/* Right Column - Details */}
                <div>
                  <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                    {selectedCocktail.description}
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="text-2xl font-semibold mb-6 text-amber-400">Ingrédients</h4>
                    <ul className="space-y-3 text-gray-300">
                      {selectedCocktail.ingredients.map((ingredient, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                          {ingredient}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-2xl font-semibold mb-6 text-amber-400">Préparation</h4>
                    <ol className="space-y-4 text-gray-300">
                      {selectedCocktail.instructions.map((instruction, index) => (
                        <li key={index} className="flex gap-4">
                          <span className="flex-shrink-0 w-8 h-8 bg-amber-400 text-black rounded-full flex items-center justify-center text-sm font-semibold">
                            {index + 1}
                          </span>
                          <span className="pt-1">{instruction}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;