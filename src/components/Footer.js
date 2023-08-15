import React from "react";
import { useSelector } from "react-redux";
import { producstSelector, totalSelector } from "../redux/productSlice";

function Footer() {
  const products = useSelector(producstSelector);

  const total = useSelector(totalSelector);
  // console.log(total);

  return (
    <div className="text-center mt-4 mb-4 bg-slate-200 h-full">
      {products.map((p) =>
        p.count > 0 ? (
          <div className="space-x-10">
            <strong className="text-lg">{p.productName}</strong>{" "}
            <strong className="text-lg">X {p.count} </strong>
            <strong className="text-lg text-green-500">
              {" "}
              ${p.count * p.productPrice}
            </strong>
          </div>
        ) : null
      )}
      <div className="font-ubuntu text-2xl text-orange-500 mt-4">
        <hr className=" bg-black w-3/12 border-0 border-solid h-1 m-auto"></hr>
        <div className="mt-3">
          {" "}
          {products.some((p) => p.count > 0) && "TOTAL " + "$" + total}
        </div>
      </div>
    </div>
  );
}

export default Footer;
