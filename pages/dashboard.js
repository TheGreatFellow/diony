import Head from "next/head";
// import styles from "../styles/Home.module.css";
import Background from "../components/Background";
import GlassLogin from "../components/GlassLogin";
import { useEffect } from "react";

const dashboard = () => {
  useEffect(() => {
    const url= new URL(window.location.href);
    var code = url.searchParams.get("code");
    fetch(`https://vaporing-jackal-9275.dataplicity.io/final?code=${code}`).then((res)=>console.log(res.data));
  }, []);

  return (
    <>
      <head>
        <style>
          @import
          url('https://fonts.googleapis.com/css?family=Nunito:400,700&display=swap');
          @import
          url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap');
          @import
          url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');
        </style>
        <Head>
          <title>Dashboard</title>
        </Head>
      </head>
      <body>
        <Background>
          <div class=" ">
            <GlassLogin
              prop={
                "absolute top-1/4  left-1/4 w-1/2   transform	 flex-col justify-center align-center"
              }
              lin={"/friends"}
            ></GlassLogin>
          </div>
        </Background>
      </body>
    </>
  );
};

export default dashboard;
