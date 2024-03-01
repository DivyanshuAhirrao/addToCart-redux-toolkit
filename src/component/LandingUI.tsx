
import Cards from "./Cards";
import { useAppSelector } from "../redux/hooks";
import Cart from "./Cart";

const LandingUI = () => {
  
  const count = useAppSelector((state) => state.cart);

  return (
    <div className="w-[100%]">
      <aside className="sticky top-0 z-10 bg-slate-100 top-0 w-[100%] h-[11vh] sm:px-12 xs:px-8  flex justify-between items-center border-b border-gray-400">
        <div className="font-mono font-semibold sm:text-[20px] xs:text-[16px] text-teal-800 hover:underline transition-all duration-200 cursor-pointer">
          Add To Cart Project
        </div>
        <div>
          {count.items.length === 0 ? "" : (
          <div className="pl-[50px] opacity-100">
            <span className="font-mono font-semibold border-2 rounded-[50%] px-[5.7px] py-[1.7px] bg-green-500 text-[12px] absolute top-[1px] ">
              {count.items.length}
            </span>
          </div>
          )}

          <div className="xs:scale-[1.4]  sm:scale-[2] hover:text-gray-600 sm:hover:scale-[1.9] transition-all duration-200 cursor-pointer">
           <Cart />
          </div>
        </div>
      </aside>
      <aside className="w-[100%] pt-10 flex justify-center items-center">
        <Cards />
      </aside>
    </div>
  );
};

export default LandingUI;
