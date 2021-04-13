const newpage = () => {
  return (
    <>
      <head></head>
      <div class="bg-gradient-to-br from-pink-400 via-gray-400 to-blue-300 h-screen overflow-hidden justify-center flex">
        <header class="flex justify-between text-white text-lg  bg-white bg-opacity-40 fixed top-14 inset-x-52  px-3 rounded-lg box shadow-cus3 border-t border-l border-white">
          <a href="/" class="p-2.5 font-bold text-xl">
            Diony
          </a>
          <ul class="flex justify-end p-2.5">
            <li class=" px-3">
              <a href="/dashboard">Dashboard</a>
            </li>
            <li class=" px-3">
              <a href="/friends">Friends</a>
            </li>
          </ul>
        </header>
      </div>
    </>
  );
};

export default newpage;
