import axios from "axios";
import type { CartItem } from "../../../types/CartItem";

interface handleOrderI {
  cart: Record<string, CartItem>;
  setCart: React.Dispatch<React.SetStateAction<Record<string, CartItem>>>;
}

export const handleOrder = async ({ cart, setCart }: handleOrderI) => {
  const items = Object.values(cart);
  if (items.length === 0) {
    alert("Cart is empty");
    return;
  }
  window.Telegram.WebApp.sendData(JSON.stringify(items));
  try {
    await axios.post("/api/order", { items });
    alert("Order sent!");
    setCart({});
  } catch (err) {
    console.error(err);
    alert("Failed to send order");
  }
};
