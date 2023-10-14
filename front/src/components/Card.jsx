import React from "react";
import { useDelProductMutation } from "../app/endpoints/productEndpoints";
import { toast } from "react-toastify";
import { useColor } from "../hooks";

const Card = ({ name, id, handleProdDel, color }) => {
  const [delProduct, { isloading, error }] = useDelProductMutation();
  const { setColor } = useColor();

  const del = () => {
    delProduct({ productid: id })
      .unwrap()
      .then((message) => {
        handleProdDel(id);
        toast(message.data);
      })
      .catch((err) => toast.error(err.data.message));
  };

  const viewHandle = () => {
    setColor(color);
  };

  return (
    <div className="bg-white w-[15rem] h-[6rem] rounded-lg shadow-lg flex flex-col gap-1 mr-3 p-4">
      <div className="  w-full flex justify-between items-center">
        <h2 className=" text-xl font-bold mb-2">{name}</h2>
        <button onClick={del}>
          <img className="w-6 h-6" src="/trash.png" alt="trash" />
        </button>
      </div>

      <div className="  w-full flex justify-between items-center">
        <p className="text-gray-700 mb-2 font-bold">$99.99</p>

        <button
          onClick={viewHandle}
          className=" bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded font-thin"
        >
          View
        </button>
      </div>
    </div>
  );
};

export default Card;
