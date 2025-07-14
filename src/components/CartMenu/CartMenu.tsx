import { useGlobal } from "../../contexts/GlobalContext";
import CartMenuItem from "../CartMenuItem.ts/CartMenuItem";
import OrderButton from "../OrderButton/OrderButton";

interface CartMenuProps {
  onClose: () => void;
}

export default function CartMenu({ onClose }: CartMenuProps) {
  const { cart } = useGlobal();
  const items = Object.values(cart);
  const isCartEmpty = items.length === 0;
  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center"
      onClick={onClose}
    >
      <div
        className={`w-full h-[60%] bg-white dark:bg-[#1c1c1e] p-4 shadow-inner border-t border-gray-200 dark:border-gray-700 rounded-t-lg ${
          !isCartEmpty ? "flex flex-col justify-between" : ""
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold text-center mb-6 text-black dark:text-white">
          Your Cart
        </h2>
        {isCartEmpty ? (
          <p className="text-center start text-gray-500 dark:text-gray-400 mt-8">
            Your cart is empty
          </p>
        ) : (
          <>
            <ul className="flex-1 space-y-4 overflow-y-auto max-h-[70%]">
              {items.map((item, idx) => (
                <CartMenuItem key={idx} {...item} />
              ))}
            </ul>
            <OrderButton items={items} />
          </>
        )}
      </div>
    </div>
  );
}
