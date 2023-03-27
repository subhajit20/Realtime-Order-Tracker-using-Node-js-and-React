import React from "react";

function Card({ prodimage, prodtitle }) {
  return (
      <div className="card grid grid-cols-2 justify-items-center w-fit gap-x-10 shadow-md shadow-slate-600 p-2 rounded-sm translate-y-10">
        <div className="row-span-2 justify-self-start max-w-xs w-3/6">
          <img
            src={prodimage}
            alt=""
            className="min-w-full w-64 h-28 xl:h-36"
          />
        </div>
        <div className="justify-self-start text-xl font-medium">{prodtitle}</div>
        <div className="justify-self-start">Okay</div>
        <div className="buy_button grid grid-cols-1 w-full col-span-2 py-2 px-1">
          <button className="bg-orange-600 text-white rounded-md py-1 text-xl font-medium">Buy</button>
        </div>
      </div>
  );
}

export default Card;
