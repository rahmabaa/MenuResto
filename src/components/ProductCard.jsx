import ProductImage from './ProductImage.jsx'
import { formatPrice } from '../data/format.js'

export default function ProductCard({ item, currency, qty, onAdd, onRemove }) {
  return (
    <li className="product">
      <ProductImage item={item} />
      <div className="info">
        <h3>{item.name}</h3>
        {item.description && <p>{item.description}</p>}
        <div className="foot">
          <span className="price">{formatPrice(item.price, currency)}</span>
          
        </div>
      </div>
    </li>
  )
}
