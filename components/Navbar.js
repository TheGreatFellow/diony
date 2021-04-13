import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <header class="z-50  flex justify-between text-white text-lg  bg-black bg-opacity-70 backdrop-filter backdrop-blur-sm  fixed top-12 inset-x-52  px-3 rounded-lg box shadow-cus3 border-t border-l border-white">
        <a href="/" class="p-3.5 font-bold text-xl">
          Diony
        </a>
        <ul class="flex justify-end ">
          <li class=" px-3 hover:bg-black transition-all duration-300  p-3.5 h-full">
            <a href="/dashboard">Dashboard</a>
          </li>
          <li class=" px-3 p-3.5 h-full  hover:bg-black transition-all duration-300">
            <a href="/friends">Friends</a>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Navbar;
