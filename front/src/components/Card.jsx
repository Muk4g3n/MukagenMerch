import React, { lazy } from "react";
import { useDelProductMutation } from "../app/endpoints/productEndpoints";
import { toast } from "react-toastify";
const CanvasModel = lazy(() => import("../canvas"));

const Card = ({ name, id, handleProdDel, color }) => {
  const [delProduct, { isloading, error }] = useDelProductMutation();

  const del = () => {
    delProduct({ productid: id })
      .unwrap()
      .then((message) => {
        handleProdDel(id);
        toast(message.data);
      })
      .catch((err) => toast.error(err.data.message));
  };

  return (
    <div className="bg-white w-[15rem] h-[20rem] rounded-lg shadow-lg p-4 flex flex-col gap-7">
      {/* <img
        src="vite.svg"
        alt="Card Image"
        className="w-32 h-32 object-cover object-center rounded-t-lg self-center"
      /> */}
      <CanvasModel defaultColor={color} />
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2">{name}</h2>
        <p className="text-gray-700 mb-2">$99.99</p>

        <button
          onClick={del}
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
