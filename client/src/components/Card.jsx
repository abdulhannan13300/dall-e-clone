import React from "react";

import { download } from "../assets";
import { downloadImage } from "../utils";

const Card = ({ _id, name, photo, prompt }) => {
  return (
    <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card">
      <img
        className="w-full h-auto object-cover rounded-lg"
        src={photo}
        alt={prompt}
      />
      <div className=" group-hover:flex  flex-col bg-[rgba(250,250,252,0.95)]  h-full w-full justify-between top-0 left-0 p-4 absolute rounded-lg group-hover:opacity-100 opacity-0  transition-opacity ease-in-out duration-400">
        <p className="text-black lg:text-lg sm:text-sm xs:text-xs overflow-y-auto  prompt">
          {prompt}
        </p>
        {/* Wrapper div for the avatar,name and download */}
        <div className="mt-5 flex justify-between items-center gap-2">
          {/* Wrapper div for just avatar and name */}
          <div className="flex items-center gap-2">
            {/* Div for the avatar */}
            <div className="w-7 h-7 rounded-full object-cover bg-black flex justify-center items-center text-white text-xs font-bold">
              {name[0]}
            </div>
            <p className="text-black text-sm">{name}</p>
          </div>
          <button
            type="button"
            className="outline-none bg-transparent border-none"
            onClick={() => downloadImage(_id, photo)}
          >
            <img
              src={download}
              alt="download"
              className="w-6 h-6 object-contain"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
