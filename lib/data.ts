import { Product } from "@/context/cart-context"

export const products: Product[] = [
  {
    id: 1,
    name: "Canapé Moderne 3 Places",
    price: 1899,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=500&fit=crop",
    category: "Salon",
    description: "Canapé moderne en tissu gris avec pieds en bois massif"
  },
  {
    id: 2,
    name: "Table Basse Design",
    price: 459,
    image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=500&h=500&fit=crop",
    category: "Salon",
    description: "Table basse en bois de chêne avec plateau en verre"
  },
  {
    id: 3,
    name: "Lampe de Chevet Élégante",
    price: 189,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&h=500&fit=crop",
    category: "Chambre",
    description: "Lampe design avec abat-jour en lin naturel"
  },
  {
    id: 4,
    name: "Miroir Décoratif Rond",
    price: 329,
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=500&h=500&fit=crop",
    category: "Décoration",
    description: "Miroir rond avec cadre doré style Art Déco"
  },
  {
    id: 5,
    name: "Tapis Berbère Traditionnel",
    price: 789,
    image: "https://images.unsplash.com/photo-1600166898405-da9535204843?w=500&h=500&fit=crop",
    category: "Décoration",
    description: "Tapis fait main aux motifs traditionnels tunisiens"
  },
  {
    id: 6,
    name: "Coussin Velours Premium",
    price: 79,
    image: "https://images.unsplash.com/photo-1629949009710-0d904c1bea72?w=500&h=500&fit=crop",
    category: "Décoration",
    description: "Coussin en velours doux avec rembourrage moelleux"
  },
  {
    id: 7,
    name: "Étagère Murale Bois",
    price: 259,
    image: "https://images.unsplash.com/photo-1597072689227-8882273e8f6a?w=500&h=500&fit=crop",
    category: "Rangement",
    description: "Étagère flottante en bois massif style scandinave"
  },
  {
    id: 8,
    name: "Vase Céramique Artisanal",
    price: 149,
    image: "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=500&h=500&fit=crop",
    category: "Décoration",
    description: "Vase en céramique fait main par des artisans tunisiens"
  },
  {
    id: 9,
    name: "Lit King Size Moderne",
    price: 2499,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500&h=500&fit=crop",
    category: "Chambre",
    description: "Lit king size avec tête de lit rembourrée"
  },
  {
    id: 10,
    name: "Chaise Design Scandinave",
    price: 349,
    image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500&h=500&fit=crop",
    category: "Salon",
    description: "Chaise ergonomique au design épuré"
  },
  {
    id: 11,
    name: "Table à Manger 6 Places",
    price: 1599,
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=500&h=500&fit=crop",
    category: "Salle à Manger",
    description: "Table en bois massif pour 6 personnes"
  },
  {
    id: 12,
    name: "Armoire 3 Portes",
    price: 1899,
    image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=500&h=500&fit=crop",
    category: "Chambre",
    description: "Grande armoire avec miroir intégré"
  }
]

export const categories = [
  "Tous",
  "Salon",
  "Chambre",
  "Décoration",
  "Rangement",
  "Salle à Manger"
]

export const testimonials = [
  {
    id: 1,
    name: "Sonia Ben Ali",
    location: "Tunis",
    rating: 5,
    comment: "Service impeccable et produits de très haute qualité. Ma maison a été complètement transformée grâce à Casa Shop!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
  },
  {
    id: 2,
    name: "Mohamed Trabelsi",
    location: "Sousse",
    rating: 5,
    comment: "Livraison rapide et le canapé est exactement comme sur les photos. Je recommande vivement!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
  },
  {
    id: 3,
    name: "Amira Gharbi",
    location: "Sfax",
    rating: 5,
    comment: "Les meilleurs prix pour une qualité exceptionnelle. L'équipe est très professionnelle.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
  },
  {
    id: 4,
    name: "Youssef Mansour",
    location: "Bizerte",
    rating: 5,
    comment: "J'ai meublé tout mon appartement chez Casa Shop. Rapport qualité-prix imbattable!",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
  }
]
