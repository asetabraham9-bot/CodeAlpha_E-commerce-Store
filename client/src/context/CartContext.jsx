import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { cartAPI } from '../services/api';
import { useAuth } from './AuthContext';

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const { isCustomer, isAuthenticated } = useAuth();
  const [cart, setCart] = useState({ items: [], totalPrice: 0 });
  const [loading, setLoading] = useState(false);

  const fetchCart = useCallback(async () => {
    if (!isAuthenticated || !isCustomer) {
      setCart({ items: [], totalPrice: 0 });
      return;
    }
    try {
      setLoading(true);
      const { data } = await cartAPI.get();
      setCart(data);
    } catch {
      setCart({ items: [], totalPrice: 0 });
    } finally {
      setLoading(false);
    }
  }, [isAuthenticated, isCustomer]);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  const addToCart = async (productId, quantity = 1) => {
    const { data } = await cartAPI.add({ productId, quantity });
    setCart(data);
    return data;
  };

  const updateQuantity = async (productId, quantity) => {
    const { data } = await cartAPI.update(productId, { quantity });
    setCart(data);
    return data;
  };

  const removeFromCart = async (productId) => {
    const { data } = await cartAPI.remove(productId);
    setCart(data);
    return data;
  };

  const clearCart = async () => {
    const { data } = await cartAPI.clear();
    setCart(data);
    return data;
  };

  const cartCount = cart.items?.reduce((sum, item) => sum + item.quantity, 0) || 0;

  return (
    <CartContext.Provider
      value={{
        cart,
        loading,
        cartCount,
        fetchCart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
};
