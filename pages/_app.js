// import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    // <div class="bg-gradient-to-br from-pink-400 via-gray-400 to-blue-300 h-screen ">
    <div>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
