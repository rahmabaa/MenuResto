// Pour un nouveau client : changer name, theme, whatsapp, categories et items. Rien d'autre.
// Photos : mettre les fichiers dans /public/images et renseigner  image: '/images/salade.jpg'
export default {
    name: 'Le Bon Goût',
    tagline: 'Restaurant',
    whatsapp: '', // ex. '21620123456' (indicatif sans +). Vide = simple démo "Le serveur arrive"
    currency: 'DT',
    theme: { primary: '#0B1A33', accent: '#FFC21A' },
    categories: [
        { id: 'entrees', name: 'Entrées' },
        { id: 'plats', name: 'Plats' },
        { id: 'desserts', name: 'Desserts' },
    ],
    items: [
        { id: 'salade-cesar', category: 'entrees', name: 'Salade César', description: 'Poulet grillé, parmesan, croûtons', price: 12, image: '/images/images.webp' },
        { id: 'brik', category: 'entrees', name: 'Brik', description: 'Thon, câpres, persil', price: 5, image: '/images/brike.webp' },
        { id: 'pizza', category: 'plats', name: 'Pizza Margherita', description: 'Tomate, mozzarella, basilic', price: 18, image: '/images/pizza.jpg' },
        { id: 'burger', category: 'plats', name: 'Burger Maison', description: 'Bœuf, cheddar, frites', price: 20, image: '/images/Burger.webp' },
        { id: 'spaghetti', category: 'plats', name: 'Spaghetti bolognaise', description: 'Sauce maison mijotée', price: 16, image: '/images/Spaghetti.jpeg' },
        { id: 'tiramisu', category: 'desserts', name: 'Tiramisu', description: 'Mascarpone, café, cacao', price: 10, image: '/images/tiramisu.jpg' },
        { id: 'fondant', category: 'desserts', name: 'Fondant au chocolat', description: 'Cœur coulant', price: 9, image: '/images/fondant.png' },
    ],
}