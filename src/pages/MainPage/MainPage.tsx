import { useState } from "react";
import CartMenu from "../../components/CartMenu/CartMenu";
import ProductList from "../../components/ProductList/ProductList";

export default function MainPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="min-h-screen pb-[100px] relative bg-[#f4f4f5] dark:bg-[#212121] px-4 py-6">
      <h1 className="text-2xl font-semibold text-center text-black dark:text-white mb-6">
        Durger Menu
      </h1>
      <div className="absolute bottom-10 right-10 h-[100px] text-white z-10">
        <div
          onClick={() => {
            setIsModalOpen(!isModalOpen);
          }}
          className="rounded-[50%] cursor-pointer bg-white p-4 hover:scale-110 duration-300"
        >
          <img
            className="max-h-[40px] max-w-[40px] flex items-center justify-center"
            src="https://cdn-icons-png.flaticon.com/512/107/107831.png"
          />
        </div>
      </div>
      {isModalOpen && (
        <CartMenu
          onClose={() => {
            setIsModalOpen(false);
          }}
        />
      )}
      <ProductList />
    </div>
  );
}
