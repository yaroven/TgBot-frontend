interface CartMenuItemProps {
  count: number;
  imageSrc: string;
  name: string;
}

export default function CartMenuItem({
  count,
  imageSrc,
  name,
}: CartMenuItemProps) {
  return (
    <li className="flex items-center gap-4 bg-gray-100 dark:bg-[#2a2a2e] p-3 rounded-lg shadow-sm">
      <img
        src={imageSrc}
        alt={name}
        className="w-16 h-16 object-cover rounded-md"
      />
      <div className="flex-1 text-left">
        <p className="font-semibold text-black dark:text-white">{name}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">{count}x</p>
      </div>
    </li>
  );
}
