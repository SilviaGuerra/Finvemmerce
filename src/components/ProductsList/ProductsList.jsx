import { useSelector } from "react-redux";
import Pagination from "../Pagination";
import { Link } from "react-router-dom";

const ProductsList = () => {
  const results = useSelector((state) => state);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Todos nuestros productos
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {results.showProducts.results.map((product) => (
            <Link to={`${product.id}`} key={product.id}>
              <div className="group relative mr-1.5">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-fill object-center lg:h-full lg:w-full "
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <span>{product.title}</span>
                    </h3>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    ${product.price}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <br />
        {/* <Pagination /> */}
      </div>
    </div>
  );
};

export default ProductsList;
