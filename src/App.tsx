import { useQuery } from "@tanstack/react-query";
import FoodCard from "./components/FoodCard/FoodCard";
import { handleCountChange } from "./components/ProductList/handlers/handleCountChange";
import { useGlobal } from "./contexts/GlobalContext";
import { fetchProducts } from "./services/Product.service";
import type { Product } from "./types/Product";

export default function App() {
  const {
    data: foods,
    isLoading,
    isError,
  } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const { cart, setCart } = useGlobal();

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
    <div className="min-h-screen pb-[100px] bg-[#f4f4f5] dark:bg-[#212121] px-4 py-6">
      <h1 className="text-2xl font-semibold text-center text-black dark:text-white mb-6">
        Durger Menu
      </h1>

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

      <div className="mt-6 text-black dark:text-white text-center">
        <h2 className="text-xl font-bold mb-2">Cart</h2>
        {Object.values(cart).length === 0 ? (
          <p>No items yet</p>
        ) : (
          <ul>
            {Object.values(cart).map((item, idx) => (
              <li key={idx}>
                {item.name} × {item.count}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="fixed bottom-4 left-0 right-0 px-4">
        <button
          className={`w-full bg-[#398b24] text-white py-3 rounded-xl font-semibold text-lg shadow-md duration-300  ${
            Object.values(cart).length === 0
              ? "cursor-not-allowed"
              : "hover:bg-[#45d61f] active:bg-[#3ac014]"
          }`}
          disabled={Object.values(cart).length === 0}
        >
          Order Now
        </button>
      </div>
    </div>
  );
}
