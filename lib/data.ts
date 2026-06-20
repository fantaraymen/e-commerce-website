import { Product } from "@/context/cart-context"
 
export const products: Product[] = [
  {
    id: 1,
    name: "Banquette moderne \"vert kaki foncé\"",
    price: 115,
    originalPrice: 150,
    image: "https://i.ibb.co/WN231Nhh/7f974662-c198-4934-a0c8-fd53ae289c04.png",
    category: "décoration",
    description: "Banquette moderne en velours vert kaki foncé avec pieds blancs"
  },
  {
    id: 2,
    name: "Banquette Rose",
    price: 115,
    originalPrice: 150,
    image: "https://i.ibb.co/j9DYsVNW/ed9dc697-5b3f-4328-bbe6-f81b41a2a183.png",
    category: "décoration",
    description: "Banquette moderne en velours rose avec pieds blancs"
  },
  {
    id: 3,
    name: "Verre Bleu Océan",
    price: 22,
    image: "https://i.ibb.co/FLVjJq4f/e6e84807-7d91-4c66-bc0b-3478b2409ff4.png",
    category: "Art de table",
    description: "Verre en verre strié bleu, élégant et raffiné pour sublimer vos boissons"
  },
  {
    id: 4,
    name: "Verre Ambre Violine",
    price: 22,
    image: "https://i.ibb.co/Wv9RmP0D/2b9e8b55-e4df-476a-8591-091176b8f941.png",
    category: "Art de table",
    description: "Verre en verre strié aux reflets ambrés et violets, parfait pour sublimer vos boissons"
  }
]
 
export const categories = [
  "Tous",
  "Salon",
  "décoration",
  "Art de table",
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