import { getByDisplayValue } from "@testing-library/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  moneySelector,
  producstSelector,
  sell,
  buy,
  buyPayload,
} from "../redux/productSlice";

function Main() {
  const dispatch = useDispatch();
  const money = useSelector(moneySelector);
  const products = useSelector(producstSelector);
  // const basket = useSelector(basketSelector);

  return (
    <div className="max-h-fit max-w-full flex flex-col justify-center items-center relative">
      <h3 className="bg-green-500 sticky top-0 text-center w-10/12 h-20 font-ubuntu text-4xl m-2 items-center justify-center flex text-white duration-1000">
        ${money}
      </h3>

      <div className=" justify-evenly w-10/12 flex flex-wrap border-4">
        {products.map((p) => (
          <div className="bg-white w-4/12 flex flex-wrap flex-col gap-2  border-2">
            <img
              className="p-4 w-56 h-52 m-auto"
              src={p.image}
              alt={p.productName}
            />
            <div className="text-center text-2xl">{p.productName}</div>
            <div className="text-center text-green-400 font-ubuntu text-2xl">
              {" "}
              {p.productPrice + "$"}
            </div>
            <div>
              <div className="space-x-6 mt-2 mb-2   flex justify-center font-ubuntu ">
                {p.count > 0 ? (
                  <button
                    className="bg-red-500 hover:bg-red-700 w-20 text-lg h-12 rounded-lg"
                    onClick={() => dispatch(sell(p.id))}
                  >
                    Sell
                  </button>
                ) : (
                  <button
                    className="bg-gray-200  w-20 text-lg  h-12  rounded-lg cursor-no-drop"
                    disabled
                  >
                    Sell
                  </button>
                )}

                <input
                  className="w-24 text-center bg-slate-100 rounded-lg hover:outline-offset-2 "
                  key={p.id}
                  value={p.count}
                  // type="number"
                  onChange={(e) =>
                    dispatch(buyPayload({ p, count: e.target.value }))
                  }
                />
                <button
                  className=" bg-green-500 w-20 h-12 text-white text-lg rounded-lg hover:bg-green-700"
                  disabled={p.productPrice > money}
                  onClick={() => dispatch(buy(p.id))}
                >
                  Buy
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    // </div>
  );
}

export default Main;
