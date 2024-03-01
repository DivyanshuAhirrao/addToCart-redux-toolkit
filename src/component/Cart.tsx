import { IoMdCart } from "react-icons/io";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Button, Modal } from "flowbite-react";
import { Fragment, useState } from "react";
import { MdDeleteSweep } from "react-icons/md";
import { removeFromCart, clearCart } from "../redux/slices/cart/cartSlice";

function Cart() {
  const [openModal, setOpenModal] = useState(false);
  const cartDetails = useAppSelector((state) => state.cart);
  console.log(cartDetails);
  const dispatch = useAppDispatch();

  function removeProduct(ind: number) {
    const index = cartDetails.items.findIndex((item) => item.id === ind);
    if (index !== -1) {
      dispatch(removeFromCart(ind));
    }
  }

  function emptyCart() {
    dispatch(clearCart());
  }

  return (
    <>
      <Button
        onClick={() => setOpenModal(true)}
        className="h-[25px] w-[35px] opacity-80"
      >
        <IoMdCart />
      </Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body>
          <button
            onClick={emptyCart}
            className="absolute top-20 right-4 bg-teal-700 text-white px-2 py-1 rounded-md font-mono hover:bg-teal-900 hover:tracking-tight transition-all duration-200"
          >
            {" "}
            Clear Cart{" "}
          </button>
          <div className="w-[100%] h-[50vh]  flex flex-col gap-2 items-center">
            {cartDetails.items.map((e) => {
              return (
                <Fragment key={e.id}>
                <article className="flex h-[30vh] border-[1.5px] border-gray-900 w-[90%] gap-2">
                  <img src={e.img_url} alt="sample" width="35%" />
                  <div className="w-[65%] bg-slate-200 h-[100%] flex flex-col justify-between">
                    <aside>
                      <h2> Name : {e.name}</h2>
                      <h3> City : {e.city}</h3>
                    </aside>
                    <aside>
                      <button
                        onClick={() => removeProduct(e.id)}
                        className="bg-gray-700 py-1 px-4 relative bottom-2 left-1 rounded-md flex text-red-300 text-[17px] hover:scale-105 transition-all duration-200"
                      >
                        Remove
                        <MdDeleteSweep className="relative top-[5px] left-2 scale-110" />{" "}
                      </button>
                    </aside>
                  </div>
                </article>
                </Fragment>
              );
            })}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>I accept</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Cart;
