import { Product } from "@/context/cart-context"

export const products: Product[] = [
  {
   {
    id: 1,
    name: "Banquette moderne \"vert kaki foncé\"",
    price: 115,
    originalPrice: 150,
    image: "https://i.ibb.co/Q3XhpC92/Screenshot-2026-06-08-030757.png",
    category: "décoration",
    description: "Banquette moderne en velours vert kaki foncé avec pieds blancs"
  },
  },
  {
    id: 2,
    name: "Banquette moderne\"rose\"",
    price: 115,
    originalPrice: 150,
    image: "https://i.ibb.co/0R2FhXbp/Screenshot-2026-06-16-192940.png",
    category: "décoration",
    description: "Banquette moderne en velours rose avec pieds blancs"
  }
]

export const categories = [
  "Tous",
  "Salon",
  "décoration",
  "Cuisine",
  "Salle de bain"
]

export const testimonials = [
  {
    id: 1,
    name: "sonia Ben Ali",
    location: "Tunis",
    rating: 5,
    comment: "Lberah barka wesletli l banquette, ya3tikom l saha 3al service et surtout qualité du produit 💯",
    avatar: "https://i.ibb.co/ZRrWW5Jz/505058216-2839404319578329-4974240031999761051-n.jpg"
  },
  {
    id: 2,
    name: "Soumaya Nabli",
    location: "Sousse",
    rating: 5,
    comment: "السلام عليكم توا وصلتني الكوموند ربي يباركلكم ❤️",
    avatar: "https://i.ibb.co/DD394CF0/489286305-9407843442667828-4983514240517174301-n.jpg"
  },
  {
    id: 3,
    name: "Amira Gharbi",
    location: "Sfax",
    rating: 5,
    comment: "5dhit men aandkom l kisen w lahkika rapport qualité prix impéccable ❤️",
    avatar: "https://i.ibb.co/d4z3Z124/545196055-17988283814843996-1652015810091033581-n.jpg"
  },
  {
    id: 4,
    name: "Youssef Mansour",
    location: "Bizerte",
    rating: 5,
    comment: "ghalta le berasmi yaatikom l saha a khouya ❤️",
    avatar: "https://i.ibb.co/p6wM2Njq/download.jpg"
  }
]