import { Fragment } from "react/jsx-runtime";
import { increment, decrement } from "../redux/slices/counter";
import { addToCart } from '../redux/slices/cart/cartSlice'
import { useAppDispatch } from "../redux/hooks";

interface CardType {
  id: number;
  name: string;
  img_url: string;
  city: string;
}

const Card = ({ prop }: { prop: CardType }) => {

  const dispatch = useAppDispatch();
  
  function dispatcher (){
    dispatch(addToCart(prop))
    dispatch(increment());
    console.log(prop.name);
  }
  return (
    <Fragment key={prop.id}>
      <div className="h-[350px] w-[260px]  border-2 border-slate-800">
        <img src={prop.img_url} alt={prop.name} className="w-[100%] h-[80%]" />
        <h2 className="text-center text-black font-semibold">
          {prop.name} from {prop.city}
        </h2>
        <div className="w-[100%] h-[11%] flex justify-center gap-1 relative top-[3px]">
          <button
            onClick={dispatcher}
            className="w-[45%] h-[100%] bg-teal-700 hover:tracking-wider transition-all duration-200 cursor-pointer hover:brightness-125"
          >
            Add
          </button>
          <button
            onClick={() => dispatch(decrement())}
            className="w-[45%] h-[100%] bg-teal-700 hover:tracking-wider transition-all duration-200 cursor-pointer hover:brightness-125"
          >
            Remove
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Card;
