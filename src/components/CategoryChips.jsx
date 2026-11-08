export default function CategoryChips({ categories, active, onSelect }) {
  const all = [{ id: 'all', name: 'Toutes' }, ...categories]
  return (
    <nav className="chips" aria-label="Catégories">
      {all.map((c) => (
        <button
          key={c.id}
          className={c.id === active ? 'chip active' : 'chip'}
          aria-pressed={c.id === active}
          onClick={() => onSelect(c.id)}
        >
          {c.name}
        </button>
      ))}
    </nav>
  )
}
