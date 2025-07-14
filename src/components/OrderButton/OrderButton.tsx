interface OrderButtonProps {
  items: { name: string; count: number }[];
}
export default function OrderButton({ items }: OrderButtonProps) {
  return (
    <button
      className="w-full mt-4 h-[60px] bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg text-lg shadow transition-colors duration-300"
      onClick={() => window.Telegram.WebApp.sendData(JSON.stringify(items))}
    >
      🛒 Order ({items.reduce((sum, i) => sum + i.count, 0)})
    </button>
  );
}
