// MENU DE DÉMONSTRATION : café (même structure que restaurant.js).
// `art` = illustration SVG provisoire (breakfast | coffee | tea | juice), `tile` = couleur de fond de la vignette.
const A = { breakfast: '#FFC857', coffee: '#5A3825', tea: '#2F7D5B', juice: '#C8431F' }
const it = (category, art, id, name, description, price) => ({ id, category, name, description, price, art, tile: A[art] })

export default {
    name: 'La jeconde café',
    tagline: 'Café',
    whatsapp: '',
    currency: 'DT',
    theme: { primary: '#3B2314', accent: '#FFC857' },
    categories: [
        { id: 'petit-dej', name: 'Petit-déj' },
        { id: 'cafe', name: 'Café' },
        { id: 'the', name: 'Thé' },
        { id: 'jus', name: 'Jus' },
    ],
    items: [
        it('petit-dej', 'breakfast', 'croissant', 'Croissant', 'Pur beurre, doré à souhait', 2),
        it('petit-dej', 'breakfast', 'pain-choco', 'Pain au chocolat', 'Feuilleté et fondant', 2.2),
        it('petit-dej', 'breakfast', 'formule', 'Formule petit-déj', 'Boisson chaude, jus et viennoiserie', 12),
        it('cafe', 'coffee', 'espresso', 'Espresso', 'Court, intense, serré', 3),
        it('cafe', 'coffee', 'capucin', 'Capucin', 'Espresso et une touche de lait', 3.5),
        it('cafe', 'coffee', 'cappuccino', 'Cappuccino', 'Mousse de lait onctueuse', 5),
        it('cafe', 'coffee', 'latte', 'Café latte', 'Doux et crémeux', 5.5),
        it('cafe', 'coffee', 'mocha', 'Mocha', 'Café, chocolat et chantilly', 6.5),
        it('the', 'tea', 'the-menthe', 'Thé à la menthe', 'Thé vert, menthe fraîche', 2.5),
        it('the', 'tea', 'the-pignons', 'Thé aux pignons', 'La spécialité tunisienne', 5),
        it('the', 'tea', 'verveine', 'Infusion verveine', 'Douce et apaisante', 2.5),
        it('jus', 'juice', 'orange', 'Orange pressée', 'Pressée minute', 5),
        it('jus', 'juice', 'citronnade', 'Citronnade', 'Citron, menthe, glace', 4),
        it('jus', 'juice', 'fraise', 'Jus de fraise', 'Fruits frais mixés', 6),
    ],
}