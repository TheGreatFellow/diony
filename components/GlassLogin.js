import GlassContainer from "./GlassContainer";
import Link from "next/link";

export default ({ prop, lin }) => (
  <div class={`${prop}`}>
    <GlassContainer prop={"text-center"}>
      <h1 class="font-josefin mt-0 mb-14  text-white text-center text-opacity-95 text-4xl text-shadow-1 tracking-wide">
        Enter some details before proceeding
      </h1>
      <input
        type="text"
        placeholder="Firstname"
        class="w-60 text-white font-rubrik font-medium text-shadow-1  bg-transparent p-2 pl-3 mb-10 rounded-3xl placeholder-white placeholder-opacity-80 border-l border-t border-white  border-opacity-20 shadow-cus1 backdrop-filter backdrop-blur-sm hover:bg-black hover:bg-opacity-10  hover:shadow-cus2 focus:shadow-cus2 focus:bg-opacity-10  outline-none transition-all ease-in duration-200"
      />
      <br />
      <input
        type="text"
        placeholder="Email"
        class="w-60 text-white font-rubrik font-medium text-shadow-1  bg-transparent p-2 pl-3 mb-10 rounded-3xl placeholder-white placeholder-opacity-80 border-l border-t border-white  border-opacity-20 shadow-cus1 backdrop-filter backdrop-blur-sm hover:bg-black hover:bg-opacity-10  hover:shadow-cus2 focus:shadow-cus2 focus:bg-opacity-10  outline-none transition-all ease-in duration-200"
      />
      <br />
      <Link href={`${lin}`}>
        <button
          type="button"
          href
          class="w-36 text-white font-rubrik font-medium text-shadow-1  bg-transparent p-2 mb-2 rounded-3xl border-l border-t border-white  border-opacity-20 shadow-cus1 backdrop-filter backdrop-blur-sm hover:bg-black hover:bg-opacity-10  hover:shadow-cus2 focus:outline-none transition-opacity transition-shadow transition-colors ease-in duration-200"
        >
          Done
        </button>
      </Link>
      <br />
      {/* <a
        href="#"
        class="text-white  text-sm font-rubik hover:text-shadow-2 active:text-shadow-none mb-8"
      >
        Forgot Password?
      </a> */}
    </GlassContainer>
    <div class=" ">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);
