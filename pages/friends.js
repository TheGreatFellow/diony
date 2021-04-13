import React from "react";
import Head from "next/head";
// import styles from "../styles/Home.module.css";
import Link from "next/link";
import Background from "../components/Background";
import GlassContainer from "../components/GlassContainer";

const friends = () => {
  const [users, setUsers] = React.useState(null);

  const getServerSideProps = async (e) => {
    const res = await fetch(
      `http://somebullshit.dataplicity.io/${e.target.value}`
    );
    console.log(res);
    // const data = await res.json();
    // setUsers(data);
  };
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
                "absolute bottom-1/2 left-1/4 w-1/2   transform	translate-y-1/2 flex justify-center align-center"
              }
            >
              <h1 class="text-3xl font-josefin font-medium text-white text-shadow-1 mx-16 text-center">
                Search for Friends:
              </h1>
              <input
                type="text"
                placeholder="Name"
                class="w-72 m-20 mx-32  text-white font-josefin font-medium text-shadow-1  bg-transparent p-2 pl-4 mb-10 rounded-3xl placeholder-white placeholder-opacity-80 border-l border-t border-white  border-opacity-20 shadow-cus1 backdrop-filter backdrop-blur-sm hover:bg-black hover:bg-opacity-10  hover:shadow-cus2 focus:shadow-cus2 focus:bg-opacity-10  outline-none transition-all ease-in duration-200"
                onChange={getServerSideProps}
              />
              <br />
              <Link href="/dashboard">
                {/* <p class=" m-6">{users.Name}</p> */}

                <button class="p-2 px-4 mx-52  bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm text-xl font-josefin font-medium text-white text-shadow-1 rounded-md hover:bg-opacity-100 focus:outline-none">
                  Done
                </button>
              </Link>
            </GlassContainer>
          </div>
        </Background>
      </body>
    </>
  );
};

export default friends;
