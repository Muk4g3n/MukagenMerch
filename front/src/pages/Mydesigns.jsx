import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { useGetProductsMutation } from "../app/endpoints/productEndpoints";
import { toast } from "react-toastify";
import { useCanvas } from "../hooks";

const MyDesigns = () => {
  const [getProducts, { isLoading, error }] = useGetProductsMutation();
  const [products, SetProducts] = useState([]);
  const {
    setDarkOption,
    setPositionOption,
    setRotationOption,
    setEditableOption,
  } = useCanvas();

  useEffect(() => {
    setDarkOption(false);
    setEditableOption(true);
    setPositionOption([-0.5, -0.02, -1.65]);
    setRotationOption([0, 0.5, 0]);

    getProducts()
      .unwrap()
      .then((products) => {
        SetProducts(products.data);
      })
      .catch((err) => toast.error(err.data.message));
  }, [products]);

  const handleProdDel = (id) => {
    SetProducts(products.filter((prod) => prod._id !== id));
  };

  return (
    <div className="w-full h-full flex flex-col items-center gap-10  overflow-x-hidden">
      <div className="w-full h-[10%] mt-4 flex items-center ">
        <div className="w-[45%] h-[2px] rounded-full bg-black"></div>
        <h1 className="text-3xl text-center w-[14%]  font-bold">
          Your Designs
        </h1>
        <div className="w-[45%] h-[2px] rounded-full bg-black"></div>
      </div>
      <div className="w-full h-[81%] flex justify-end mb-6 ">
        <div className=" h-full grid  gap-6 flex-wrap overflow-y-scroll design-bar mr-1">
          {products.map((product, i) => (
            <Card
              key={i}
              name={product.name}
              id={product._id}
              color={product.color}
              handleProdDel={handleProdDel}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyDesigns;
