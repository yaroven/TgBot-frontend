import { useGlobal } from "../../contexts/GlobalContext";

export default function Cart() {
  const { cart } = useGlobal();
  const items = Object.values(cart);

  return (
    <div className="text-black dark:text-white text-center w-full">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

      {items.length === 0 ? (
        <p className="text-gray-500">No items yet</p>
      ) : (
        <ul className="space-y-4">
          {items.map((item, idx) => (
            <li
              key={idx}
              className="flex items-center gap-4 bg-gray-100 dark:bg-[#2a2a2e] p-4 rounded-lg shadow"
            >
              <img
                src={item.imageSrc}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div className="flex-1 text-left">
                <p className="text-lg font-semibold">{item.name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Quantity: {item.count}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
