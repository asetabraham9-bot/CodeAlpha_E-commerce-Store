import { Link } from 'react-router-dom';
import { Trash2, ShoppingBag } from 'lucide-react';
import { toast } from 'sonner';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/helpers';
import LoadingSpinner from '../components/LoadingSpinner';
import { QuantityControl } from '../components/ProductCard';

export default function Cart() {
  const { cart, loading, updateQuantity, removeFromCart, clearCart } = useCart();

  const handleUpdateQuantity = async (productId, quantity) => {
    try {
      await updateQuantity(productId, quantity);
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to update quantity');
    }
  };

  const handleRemove = async (productId) => {
    try {
      await removeFromCart(productId);
      toast.success('Product removed from cart');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to remove item');
    }
  };

  const handleClear = async () => {
    try {
      await clearCart();
      toast.success('Cart cleared');
    } catch (err) {
      toast.error('Failed to clear cart');
    }
  };

  if (loading) return <LoadingSpinner />;

  if (!cart.items?.length) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <ShoppingBag className="h-16 w-16 text-gray-300 mx-auto mb-4" />
        <h2 className="text-xl font-semibold text-gray-900">Your cart is empty</h2>
        <p className="text-gray-500 mt-2">Add some products to get started.</p>
        <Link
          to="/products"
          className="inline-block mt-6 bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
        <button onClick={handleClear} className="text-red-600 hover:text-red-700 text-sm font-medium">
          Clear Cart
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {cart.items.map((item) => (
            <div
              key={item.productId._id}
              className="bg-white rounded-xl border border-gray-100 p-4 flex gap-4 items-center"
            >
              <img
                src={item.productId.image}
                alt={item.productId.name}
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-900 truncate">{item.productId.name}</h3>
                <p className="text-primary-600 font-medium">{formatPrice(item.price)}</p>
              </div>
              <QuantityControl
                quantity={item.quantity}
                onIncrease={() => handleUpdateQuantity(item.productId._id, item.quantity + 1)}
                onDecrease={() => handleUpdateQuantity(item.productId._id, item.quantity - 1)}
                max={item.productId.stock}
              />
              <p className="font-semibold text-gray-900 w-20 text-right">
                {formatPrice(item.price * item.quantity)}
              </p>
              <button
                onClick={() => handleRemove(item.productId._id)}
                className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl border border-gray-100 p-6 h-fit">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h2>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">Subtotal</span>
              <span className="font-medium">{formatPrice(cart.totalPrice)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Shipping</span>
              <span className="font-medium">
                {cart.totalPrice >= 50 ? 'Free' : formatPrice(5)}
              </span>
            </div>
            <div className="border-t pt-3 flex justify-between text-base">
              <span className="font-semibold">Total</span>
              <span className="font-bold text-primary-600">
                {formatPrice(cart.totalPrice + (cart.totalPrice >= 50 ? 0 : 5))}
              </span>
            </div>
          </div>
          <Link
            to="/checkout"
            className="block w-full mt-6 bg-primary-600 text-white text-center py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}
