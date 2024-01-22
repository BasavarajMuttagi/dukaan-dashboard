import { twMerge } from "tailwind-merge";

function Badge({ text = "" ,color=""}: any) {
  return (
    <div className={twMerge(`w-fit px-3 py-2  text-white rounded-full text-sm`,color)}>
      {text}
    </div>
  );
}

export default Badge;
