import Head from "next/head";
// import styles from "../styles/Home.module.css";
import Link from "next/link";
import Background from "../components/Background";
import GlassContainer from "../components/GlassContainer";

export default function Home() {
  return (
    <>
      <head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');
        </style>
        <Head>
          <title>Login</title>
        </Head>
      </head>
      <body>
        <Background>
          <div class="">
            <GlassContainer
              prop={
                "absolute bottom-1/2 left-1/4 w-1/2   transform	translate-y-1/2 flex-col justify-center align-center"
              }
            >
              <h1 class="text-5xl font-josefin font-medium text-white text-shadow-1 mx-16">
                Login To Continue,
              </h1>
              <Link href="https://vaporing-jackal-9275.dataplicity.io/login">
                <button class="p-4 m-10 mx-48 bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm text-2xl font-josefin font-medium text-white text-shadow-1 rounded-md hover:bg-opacity-100 focus:outline-none">
                  Sign in
                </button>
              </Link>
            </GlassContainer>
          </div>
        </Background>
      </body>
    </>
  );
}
