export default function Header({ name, tagline, table }) {
  return (
    <header className="header">
      <h1>{name}</h1>
      <p>{tagline}{table ? ` · Table ${table}` : ''}</p>
    </header>
  )
}
