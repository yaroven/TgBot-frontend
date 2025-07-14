import { useQuery } from "@tanstack/react-query";
import FoodCard from "../FoodCard/FoodCard";
import { handleCountChange } from "./handlers/handleCountChange";
import { useGlobal } from "../../contexts/GlobalContext";
import { fetchProducts } from "../../services/Product.service";
import type { Product } from "../../types/Product";

export default function ProductList() {
  const { setCart } = useGlobal();
  const {
    data: foods,
    isLoading,
    isError,
  } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
  if (isLoading) {
    return (
      <div className="min-h-screen pb-[100px] bg-[#f4f4f5] dark:bg-[#212121] px-4 py-6">
        <p className="text-center text-lg mt-10 text-black dark:text-white">
          Loading...
        </p>
      </div>
    );
  }

  if (isError || !foods) {
    return (
      <div className="min-h-screen pb-[100px] bg-[#f4f4f5] dark:bg-[#212121] px-4 py-6">
        <p className="text-center text-red-500 mt-10">
          Failed to load products
        </p>
      </div>
    );
  }
  return (
    <div className="flex flex-wrap gap-4 justify-center items-start no-scrollbar">
      {foods.map((food, index) => {
        const key = `${food.name}-${index}`;
        return (
          <FoodCard
            key={key}
            text={food.name}
            imageSrc={food.imageSrc}
            onCountChange={(count) =>
              handleCountChange({ key, food, count }, setCart)
            }
          />
        );
      })}
    </div>
  );
}
