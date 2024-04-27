// Import Context Library
import { useContext } from "react";

// Contexts
import { CartContext } from "../../contexts/cart.context";

// Styles
import {
  ShoppingIcon,
  CartIconContainer,
  ItemCount,
} from "./cart-icon.styles.jsx";

// Component
const CartIcon = () => {
  // Context Function Imported
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  // Toggle Shopping Cart Open Close
  const toggleCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    // Cart Icon holds Shopping Icon and the number of cart items inside
    <CartIconContainer onClick={toggleCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
