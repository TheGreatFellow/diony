export default ({ prop, children }) => (
  <div class={`${prop}`}>
    <form class="bg-white   bg-opacity-5 p-14  backdrop-filter backdrop-blur-md   h-auto rounded-3xl border-l border-t border-white  border-opacity-20 shadow-cus  relative transition-all ease-in duration-200 hover:m-1">
      {children}
    </form>
  </div>
);
