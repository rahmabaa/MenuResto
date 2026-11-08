import { useState, useEffect } from 'react'
import { menu } from './data/index.js'
import Header from './components/Header.jsx'
import CategoryChips from './components/CategoryChips.jsx'
import ProductCard from './components/ProductCard.jsx'


// Un QR code par table : https://monmenu.tn/?table=5
const table = new URLSearchParams(window.location.search)

export default function App() {
  const [category, setCategory] = useState('all')
  // const [order, setOrder] = useState({}) // { idProduit: quantité }

  // Colore la barre du navigateur mobile avec la couleur du restaurant
  useEffect(() => {
    document.querySelector('meta[name=theme-color]')?.setAttribute('content', menu.theme.primary)
  }, [])

  
  const items = category === 'all' ? menu.items : menu.items.filter((i) => i.category === category)

  return (
    <div className="app" style={{ '--primary': menu.theme.primary, '--accent': menu.theme.accent }}>
      <Header name={menu.name} tagline={menu.tagline} table={table} />
      <main className="panel">
        <CategoryChips categories={menu.categories} active={category} onSelect={setCategory} />
        <ul className="products">
          {items.map((item) => (
            <ProductCard
              key={item.id}
              item={item}
              currency={menu.currency}
            />
          ))}
        </ul>
      </main>
      
    </div>
  )
}
