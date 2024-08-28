import { useRouter } from "next/navigation";

export const Navbar = () => {
  const router = useRouter();
  return (
    <nav>
      <button
        className="mx-[10px] my-[0] bg-transparent border-[3px] border-[solid] border-[#ccc] rounded-[20px] p-[10px] text-[#ccc] text-[1.2em] cursor-pointer hover:text-[#fff] hover:border-[#fff]"
        onClick={() => router.push("planets")}
      >
        Planets
      </button>
      <button
        className="mx-[10px] my-[0] bg-transparent border-[3px] border-[solid] border-[#ccc] rounded-[20px] p-[10px] text-[#ccc] text-[1.2em] cursor-pointer hover:text-[#fff] hover:border-[#fff]"
        onClick={() => router.push("people")}
      >
        People
      </button>
    </nav>
  );
};
