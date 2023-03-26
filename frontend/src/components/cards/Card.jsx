import React from "react";

function Card({ prodimage, prodtitle }) {
  return (
    <div className="product_card">
      <div className="card_container grid grid-cols-2  justify-items-center w-fit backdrop-filter backdrop-blur-sm bg-opacity-10 gap-x-10 shadow-md shadow-slate-600 p-2 rounded-sm scale-[0.5]">
        <div className="row-span-2 justify-self-start max-w-xs w-3/6">
          <img
            src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
            alt=""
            className="min-w-full w-fullx"
          />
        </div>
        <div className="justify-self-start">Hello</div>
        <div className="justify-self-start">Okay</div>
      </div>
    </div>
  );
}

export default Card;
