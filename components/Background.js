import React, { useEffect } from "react";

const Background = ({ children }) => {
  useEffect(() => {
    const gridItems = document.querySelectorAll(".grid-background > div");

    // loop over grid items and create a random duration + delay for each
    gridItems.forEach((item) => {
      // calculate random number for delay
      const delay = getRandomInt(0, 5);

      // calculate random number for duration
      const duration = getRandomInt(3, 6);

      // set both
      item.style.animationDelay = `${delay}s`;
      item.style.animationDuration = `${duration}s`;
    });
  }, []);

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <div>
      <div class="relative  bg-gradient-to-r bg-fixed from-gray-300 via-blue-600 to-pink-500 h-screen overflow-hidden  items-center justify-center ">
        {/*from-red-800  via-blueGray-700 */}
        <div class="grid-background absolute inset-0 p-2 grid grid-cols-12 gap-2 transform  scale-125 overflow-hidden max-w-full">
          {/* 1*/}
          <div class="col-span-2 bg-gray-800 rounded animate-pulse"></div>
          <div class="col-span-4 bg-gray-800 rounded animate-pulse"></div>
          <div class="col-span-1 bg-gray-800 rounded animate-pulse"></div>
          <div class="col-span-2 bg-gray-800 rounded animate-pulse"></div>
          <div class="col-span-3 bg-gray-800 rounded animate-pulse"></div>

          {/* 2*/}
          <div class="col-span-4 bg-gray-800 rounded animate-pulse"></div>
          <div class="col-span-3 bg-gray-800 rounded animate-pulse"></div>
          <div class="col-span-1 bg-gray-800 rounded animate-pulse"></div>
          <div class="col-span-2 bg-gray-800 rounded animate-pulse"></div>
          <div class="col-span-2 bg-gray-800 rounded animate-pulse"></div>

          {/* 3*/}
          <div class="col-span-3 bg-gray-800 rounded animate-pulse"></div>
          <div class="col-span-5 bg-gray-800 rounded animate-pulse"></div>
          <div class="col-span-3 bg-gray-800 rounded animate-pulse"></div>
          <div class="col-span-1 bg-gray-800 rounded animate-pulse"></div>

          {/* 4*/}
          <div class="col-span-2 bg-gray-800 rounded animate-pulse"></div>
          <div class="col-span-4 bg-gray-800 rounded animate-pulse"></div>
          <div class="col-span-3 bg-gray-800 rounded animate-pulse"></div>
          <div class="col-span-1 bg-gray-800 rounded animate-pulse"></div>
          <div class="col-span-2 bg-gray-800 rounded animate-pulse"></div>

          {/* 5*/}
          <div class="col-span-3 bg-gray-800 rounded animate-pulse"></div>
          <div class="col-span-1 bg-gray-800 rounded animate-pulse"></div>
          <div class="col-span-4 bg-gray-800 rounded animate-pulse"></div>
          <div class="col-span-2 bg-gray-800 rounded animate-pulse"></div>
          <div class="col-span-2 bg-gray-800 rounded animate-pulse"></div>

          {/* 6*/}
          <div class="col-span-2 bg-gray-800 rounded animate-pulse"></div>
          <div class="col-span-3 bg-gray-800 rounded animate-pulse"></div>
          <div class="col-span-3 bg-gray-800 rounded animate-pulse"></div>
          <div class="col-span-3 bg-gray-800 rounded animate-pulse"></div>
          <div class="col-span-1 bg-gray-800 rounded animate-pulse"></div>

          {/* 7*/}
          <div class="col-span-3 bg-gray-800 rounded animate-pulse"></div>
          <div class="col-span-3 bg-gray-800 rounded animate-pulse"></div>
          <div class="col-span-1 bg-gray-800 rounded animate-pulse"></div>
          <div class="col-span-2 bg-gray-800 rounded animate-pulse"></div>
          <div class="col-span-3 bg-gray-800 rounded animate-pulse"></div>
          {/* 7*/}
          <div class="col-span-4 bg-gray-800 rounded animate-pulse"></div>
          <div class="col-span-4 bg-gray-800 rounded animate-pulse"></div>
          <div class="col-span-2 bg-gray-800 rounded animate-pulse"></div>
          <div class="col-span-2 bg-gray-800 rounded animate-pulse"></div>
          {/* 7*/}
          <div class="col-span-2 bg-gray-800 rounded animate-pulse"></div>
          <div class="col-span-5 bg-gray-800 rounded animate-pulse"></div>
          <div class="col-span-1 bg-gray-800 rounded animate-pulse"></div>
          <div class="col-span-4 bg-gray-800 rounded animate-pulse"></div>
          {/* 7*/}
          <div class="col-span-3 bg-gray-800 rounded animate-pulse"></div>
          <div class="col-span-3 bg-gray-800 rounded animate-pulse"></div>
          <div class="col-span-3 bg-gray-800 rounded animate-pulse"></div>
          <div class="col-span-3 bg-gray-800 rounded animate-pulse"></div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Background;
