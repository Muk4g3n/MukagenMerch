import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { useGetProductsMutation } from "../app/endpoints/productEndpoints";
import { toast } from "react-toastify";

const MyDesigns = () => {
  const [getProducts, { isLoading, error }] = useGetProductsMutation();
  const [products, SetProducts] = useState([]);
  useEffect(() => {
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
    <div className="w-[100%] h-[90vh] flex flex-col items-center gap-10 overflow-x-hidden">
      <div className="w-full h-[10%] mt-4 flex items-center">
        <div className="w-[45%] h-[2px] rounded-full bg-black"></div>
        <h1 className="text-3xl text-center w-[14%]  font-bold">
          Your Designs
        </h1>
        <div className="w-[45%] h-[2px] rounded-full bg-black"></div>
      </div>
      <div className="w-[92%] flex justify-center gap-6 flex-wrap mb-6">
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
  );
};

export default MyDesigns;
