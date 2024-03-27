import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchItemDetails } from "../../store/slices/AllProducts";
import { addProduct } from "../../store/slices/Cart";
import { useNavigate, useParams } from "react-router";
import Modal from "../Modal/Modal";
// import { StarIcon } from "@heroicons/react/20/solid";

const Detail = () => {
  const details = useSelector((state) => state.showProducts.details);
  const loginStatus = useSelector((state) => state.login.token);
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const [addProductCart, setAddProductCart] = useState(false);

  useEffect(() => {
    dispatch(fetchItemDetails(params.id));
  }, [dispatch, params.id]);

  const handleChosenProduct = (e) => {
    e.preventDefault();
    if (loginStatus) {
      dispatch(addProduct(details));
      setAddProductCart(true);
      // navigate("/Checkout");
    } else {
      navigate("/Login");
    }
  };

  const onClose = () => {
    setAddProductCart(false);
  };

  return (
    <div className="bg-white z-10">
      <div className="pt-8">
        {/* Image gallery */}
        <>
          <div className="mx-auto mt-28 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
            <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
              <img
                src={details.image}
                alt={details.image}
                className="h-full w-full object-fill object-center"
              />
            </div>
          </div>
          {/* Product info */}
          <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {details.title}
              </h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900">
                $ {details.price}
              </p>

              <form className="mt-10">
                <button
                  type="submit"
                  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  onClick={handleChosenProduct}
                >
                  Agrega al carrito
                </button>
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    {details.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      </div>
      {addProductCart && (
        <Modal
          isOpen={addProductCart}
          title="Producto Agregado"
          content="El producto ha sido agregado a tu carrito de compras con éxito"
          onClose={onClose}
          textButton="Entendido"
        />
      )}
    </div>
  );
};
export default Detail;
