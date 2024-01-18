import { createContext, useState } from 'react';

// Define the shape of the cart context
interface CartContextType {
  displayCart: boolean;
  cartItems: any[];
  addToCart: (item: any) => void;
  removeFromCart: (itemId: number) => void;
  openCart: () => void;
  closeCart: () => void;
  quantityhandler: (item: any) => void;
  clearCart: () => void;
}

// Create the cart context
export const CartContext = createContext<CartContextType>({
  displayCart: false,
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => { },
  openCart: () => { },
  closeCart: () => { },
  quantityhandler: () => { },
  clearCart: () => { },
});


// Create the cart provider component
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [displayCart, setDisplayCart] = useState(false);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((prevItem) => prevItem.id === item.id);
      if (itemExists) {
        const newCartItems = [...prevItems];
        const index = newCartItems.findIndex((cartItem) => cartItem.id === item.id);
        newCartItems[index] = { ...itemExists, quantity: itemExists.quantity + 1 };
        return newCartItems;
      }
      return [...prevItems, item];
    });
  };

  const removeFromCart = (itemId: number) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== itemId)
    );
  };


  const quantityhandler = (item) => {
    // handle case if the quantity is 0
    if (item.quantity === 0) return removeFromCart(item.id);
    const index = cartItems.findIndex((cartItem) => cartItem.id === item.id);
    const newCartItems = [...cartItems];
    newCartItems[index] = item;
    setCartItems(newCartItems);
  }

  const clearCart = () => setCartItems([]);
  const openCart = () => setDisplayCart(true);
  const closeCart = () => setDisplayCart(false);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, displayCart, openCart, closeCart,quantityhandler,clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
