import React from "react";

const ChromeLanding = () => {
  return (
    <div className="bg-black h-screen w-screen overflow-auto">
      <div className="top sticky top-0 bg-gray-600 p-2 flex justify-between items-center border-b">
        <div className="icons w-20 flex justify-between">
          <img
            className="w-3 h-3 md:h-4 md:w-4"
            src="https://cdn-icons-png.flaticon.com/512/507/507257.png"
          />
          <img
            className="w-3 h-3 md:h-4 md:w-4"
            src="https://cdn-icons-png.flaticon.com/512/271/271226.png"
          />
          <img
            className="w-3 h-3 md:h-4 md:w-4"
            src="https://cdn-icons-png.flaticon.com/512/159/159657.png"
          />
        </div>
        <input
          className="w-3/4 md:w-4/5 p-1 bg-gray-900 text-white px-4 mx-5 border-0 outline-0 rounded-full focus:outline-2 outline-blue-900"
          type="search"
          placeholder="Search Google or type a URL..."
        />
        <div className="icons w-20 flex justify-between">
          <img
            className="h-4 w-4 md:h-5 md:w-5"
            src="https://cdn-icons-png.flaticon.com/512/4120/4120911.png"
          />
          <img
            className="h-4 w-4 md:h-5 md:w-5"
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          />
          <img
            className="h-4 w-4 md:h-5 md:w-5"
            src="https://cdn-icons-png.flaticon.com/512/2311/2311524.png"
          />
        </div>
      </div>

      <div className="main mt-10 flex flex-col gap-4 justify-center items-center overflow-auto">
        <h1 className="text-3xl md:text-5xl font-bold  text-white">Google</h1>
        <input
          className="w-4/5 md:w-3/5 p-1 py-2 text-black px-4 mx-5 border-0 outline-0 rounded-full focus:outline-2"
          type="search"
          placeholder="Search google or type a URL..."
        />
        <div className="flex p-5 gap-10 justify-center flex-wrap w-4/5 md:w-3/5">
          <img
            className="h-14 w-14 md:h-16 md:w-16"
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          />
          <img
            className="h-14 w-14 md:h-16 md:w-16"
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          />
          <img
            className="h-14 w-14 md:h-16 md:w-16"
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          />
          <img
            className="h-14 w-14 md:h-16 md:w-16"
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          />
          <img
            className="h-14 w-14 md:h-16 md:w-16"
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          />
          <img
            className="h-14 w-14 md:h-16 md:w-16"
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          />
          <img
            className="h-14 w-14 md:h-16 md:w-16"
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          />
          <img
            className="h-14 w-14 md:h-16 md:w-16"
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          />
          <img
            className="h-14 w-14 md:h-16 md:w-16"
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          />
        </div>
      </div>
    </div>
  );
};

export default ChromeLanding;
