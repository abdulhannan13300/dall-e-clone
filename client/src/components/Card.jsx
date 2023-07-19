import React from "react";

import { download } from "../assets";
import { downloadImage } from "../utils";

const Card = ({ _id, name, photo, prompt }) => {
   return (
      <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card">
         {/* <h1>Card</h1> */}
         <img
            className="w-full h-auto object-cover rounded-xl"
            src={photo}
            alt={prompt}
         />
         <div className="group-hover:flex hidden bg-[rgba(250,250,252,0.95)] flex-col h-full justify-between left-0 p-4 absolute top-0 transition-opacity ease-in-out duration-400">
            {/* <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[rgba(250,250,252,0.95)] m-2 p-4 rounded-md"> */}
            <p className="text-black text-md overflow-y-auto prompt">
               {prompt}
            </p>
            {/* Wrapper div for the avatar,name and download */}
            <div className="mt-5 flex justify-between items-center gap-2">
               {/* Wrapper div for just avatar and name */}
               <div className="flex items-center gap-2">
                  {/* Div for the avatar */}
                  <div className="w-7 h-7 rounded-full object-cover bg-green-700 flex justify-center items-center text-white text-xs font-bold">
                     {name[0]}
                  </div>
                  <p className="text-white text-sm">{name}</p>
               </div>
               <button
                  type="button"
                  className="outline-none bg-transparent border-none"
                  onClick={() => downloadImage(_id, photo)}
               >
                  <img
                     src={download}
                     alt="download"
                     className="w-6 h-6 object-contain invert"
                  />
               </button>
            </div>
         </div>
      </div>
   );
};

export default Card;
