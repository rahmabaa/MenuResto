import Illustration from './Illustration.jsx'

// Photo si `image` existe, sinon illustration provisoire, sinon l'initiale du produit.
export default function ProductImage({ item }) {
  if (item.image) return <img className="photo" src={item.image} alt={item.name} loading="lazy" />
  return (
    <div className="photo placeholder" style={item.tile ? { background: item.tile } : undefined}>
      {item.art ? <Illustration type={item.art} /> : <span>{item.name[0]}</span>}
    </div>
  )
}
