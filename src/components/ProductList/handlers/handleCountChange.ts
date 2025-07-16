import type { CartItem } from "../../../types/CartItem";
import type { Product } from "../../../types/Product";

export const handleCountChange = (
  { key, food, count }: { key: string; food: Product; count: number },
  setCart: React.Dispatch<React.SetStateAction<Record<string, CartItem>>>
) => {
  setCart((updated) => {
    if (count === 0) {
      delete updated[key];
    } else {
      updated[key] = { ...food, count };
    }
    return updated;
  });
};
