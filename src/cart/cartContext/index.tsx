import { createContext, useState } from 'react';

// Define the shape of the cart item
interface CartItem {
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;
}

// Define the shape of the cart context
interface CartContextType {
  displayCart: boolean;
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: number) => void;
  openCart: () => void;
  closeCart: () => void;
}

// Create the cart context
export const CartContext = createContext<CartContextType>({
  displayCart: false,
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => { },
  openCart: () => { },
  closeCart: () => { },
});


// Create the cart provider component
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [displayCart, setDisplayCart] = useState(false);

  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (itemId: number) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== itemId)
    );
  };

  const openCart = () => setDisplayCart(true);
  const closeCart = () => setDisplayCart(false);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, displayCart, openCart, closeCart }}>
      {children}
    </CartContext.Provider>
  );
};
