import type { CartItem } from "../../../contexts/GlobalContext";
import type { Product } from "../../../types/Product";

export const handleCountChange = (
  { key, food, count }: { key: string; food: Product; count: number },
  setCart: React.Dispatch<React.SetStateAction<Record<string, CartItem>>>
) => {
  setCart((prev) => {
    const updated = { ...prev };
    if (count === 0) {
      delete updated[key];
    } else {
      updated[key] = { ...food, count };
    }
    return updated;
  });
};
