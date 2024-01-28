import { createContext, useState, ReactNode } from 'react';
import config from 'src/config';

// Define the shape of the cart item
export interface CartItem {
  id: number | string;
  name: string,
  price: number | string;
  image?: string;
  image_path?: string;
  customNeonBuilder?: boolean;
  slug?: string;
  size: string;
  // Add other properties as needed
  // ...
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
  quantityhandler: (item: CartItem) => void;
  clearCart: () => void;
}

// Create the cart context
export const CartContext = createContext<CartContextType>({
  displayCart: false,
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  openCart: () => {},
  closeCart: () => {},
  quantityhandler: () => {},
  clearCart: () => {},
});

// Create the cart provider component
export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() =>
    JSON.parse(localStorage.getItem(config.cartKeyForLocalStorage) || '[]')
  );
  const [displayCart, setDisplayCart] = useState(false);

  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((prevItem) => prevItem.id === item.id);
      if (itemExists) {
        const newCartItems = prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
        updateLocalStorageWithCartState(newCartItems);
        return newCartItems;
      }
      const newCartItems = [...prevItems, { ...item, quantity: 1 }];
      updateLocalStorageWithCartState(newCartItems);
      return newCartItems;
    });
  };

  const removeFromCart = (itemId: number | string) => {
    const itemExists = cartItems;
    if (!itemExists) return;
    const newItems = cartItems.filter((item) => item.id !== itemId);
    updateLocalStorageWithCartState(newItems)
  };

  const quantityhandler = (item: CartItem) => {
    // handle case if the quantity is 0
    if (item.quantity === 0) return removeFromCart(item.id);
    const newCartItems = cartItems.map((cartItem) =>
      cartItem.id === item.id ? item : cartItem
    );
    updateLocalStorageWithCartState(newCartItems);
  };

  const clearCart = () => setCartItems([]);
  const openCart = () => setDisplayCart(true);
  const closeCart = () => setDisplayCart(false);

  function updateLocalStorageWithCartState(newCartItems: CartItem[]) {
    setCartItems(newCartItems);
    localStorage.setItem(config.cartKeyForLocalStorage, JSON.stringify(newCartItems));
  }

  const contextValue: CartContextType = {
    displayCart,
    cartItems,
    addToCart,
    removeFromCart,
    openCart,
    closeCart,
    quantityhandler,
    clearCart,
  };

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
};
