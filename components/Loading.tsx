import Image from "next/image";
import React from "react";
import PropagateLoader from "react-spinners/PropagateLoader";

function Loading() {
  return (
    <div className="bg-[#091B18] h-screen flex flex-col items-center justify-center">
      <div className="flex items-center space-x -2 mb-10 ">
        <Image
          src="/profile.png"
          alt="banner image"
          width={80}
          height={80}
          className="rounded-full mr-2"
        />
        <h1 className="text-lg text-white font-bold">Loading the LUCKY DRAW</h1>
      </div>
      <PropagateLoader color="white" size={30} />
    </div>
  );
}

export default Loading;
