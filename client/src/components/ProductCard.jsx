import { Link } from 'react-router-dom';
import { ShoppingCart, Plus, Minus } from 'lucide-react';
import { formatPrice } from '../utils/helpers';

export default function ProductCard({ product, onAddToCart, showAddButton = true }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow group">
      <Link to={`/products/${product._id}`}>
        <div className="aspect-square overflow-hidden bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      <div className="p-4">
        <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded-full">
          {product.category}
        </span>
        <Link to={`/products/${product._id}`}>
          <h3 className="font-semibold text-gray-900 mt-2 hover:text-primary-600 transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-gray-500 mt-1 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between mt-4">
          <div>
            <span className="text-lg font-bold text-gray-900">{formatPrice(product.price)}</span>
            <p className="text-xs text-gray-400">{product.stock} in stock</p>
          </div>
          {showAddButton && onAddToCart && (
            <button
              onClick={() => onAddToCart(product._id)}
              disabled={product.stock === 0}
              className="flex items-center gap-1 bg-primary-600 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ShoppingCart className="h-4 w-4" />
              Add
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export function QuantityControl({ quantity, onIncrease, onDecrease, max = 99 }) {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={onDecrease}
        disabled={quantity <= 1}
        className="p-1 rounded-md border border-gray-300 hover:bg-gray-50 disabled:opacity-50"
      >
        <Minus className="h-4 w-4" />
      </button>
      <span className="w-8 text-center font-medium">{quantity}</span>
      <button
        onClick={onIncrease}
        disabled={quantity >= max}
        className="p-1 rounded-md border border-gray-300 hover:bg-gray-50 disabled:opacity-50"
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  );
}
