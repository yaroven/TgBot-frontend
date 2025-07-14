// const cakeImage =
//   "https://static.vecteezy.com/system/resources/previews/036/053/451/non_2x/ai-generated-cartoon-birthday-cake-transparent-background-free-png.png";
// const pizzaImage =
//   "https://images.vexels.com/media/users/3/249523/isolated/preview/02783f79ece2cffaf68f8921f2c978be-pizza-color-stroke.png";
// const foods = [
//   { text: "Cake", imageSrc: cakeImage },
//   { text: "Pizza", imageSrc: pizzaImage },
// ];
import { useState } from "react";
import FoodCard from "./components/FoodCard";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "./services/Product.service";

type Product = {
  name: string;
  imageSrc: string;
};

function App() {
  const {
    data: foods,
    isLoading,
    isError,
  } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const [cart, setCart] = useState<
    Record<string, { name: string; imageSrc: string; count: number }>
  >({});

  const handleCountChange = (key: string, food: Product, count: number) => {
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

  const handleOrder = async () => {
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
              onCountChange={(count) => handleCountChange(key, food, count)}
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
          className="w-full bg-[#51ee2a] text-white py-3 rounded-xl font-semibold text-lg shadow-md"
          onClick={handleOrder}
          disabled={Object.values(cart).length === 0}
        >
          Order Now
        </button>
      </div>
    </div>
  );
}

export default App;
