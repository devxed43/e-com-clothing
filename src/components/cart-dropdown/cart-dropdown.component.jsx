// Component
import CartItem from "../cart-item/cart-item.component";

// Navigate
import { useNavigate } from "react-router-dom";

// Contexts
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

// Styles
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles.jsx";

// Component
const CartDropdown = () => {
  // Context
  const { cartItems } = useContext(CartContext);

  // Navigate
  const navigate = useNavigate();

  // Event Handler
  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      {/* Cart Dropdown Window contains Cart Items */}
      {/* We map over Cart Items, to return a Cart Item */}
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage as="span">Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <button onClick={goToCheckoutHandler}>CHECKOUT</button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
