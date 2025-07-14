interface ButtonI {
  text: string;
  isNew: boolean;
  onClick: any;
}
export default function Button({ text, onClick, isNew = false }: ButtonI) {
  return (
    <div
      onClick={onClick}
      className={`${
        isNew ? "bg-green-400" : "bg-amber-300"
      } rounded-[10px] text-[14px] py-2 w-full flex items-center justify-center cursor-pointer font-bold`}
    >
      {text.toUpperCase()}
    </div>
  );
}
