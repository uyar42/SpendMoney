import React from "react";

function Header() {
  return (
    <div className="w-10/12 m-auto ">
      <div className="flex bg-slate-200 flex-col justify-center items-center mt-2 p-8">
        <img
          className="rounded-full w-28 back hover:-scale-x-90 duration-500"
          alt="deneme"
          src="https://assets-global.website-files.com/5de98c06bb83ab1e27fc1c95/616170db2ebb56e0ea3f969b_5de98c06bb83abc80bfc22bf_BillGates.jpg"
        ></img>
        <h2 className="text-4xl font-ubuntu">Spend Bill Gates' Money</h2>
      </div>
    </div>
  );
}

export default Header;
