import style from "../styles/GridLayout.module.css";
import Image from "next/image";
import SideNav from "./SideNav.jsx";

function GridLayout() {
  // Important Comment DO NOT DELETE!!
  // function toggleMenu() {
  //   if (typeof window === "object") {
  //     let navigation = document.querySelector(style.navbar);
  //     navigation.classList.toggle("active");
  //   }
  // }
  // const onClick = () => {
  //   navVisible ? setNavVisible(false) : setNavVisible(true);
  // };
  // const [navVisible, setNavVisible] = useState(false);

  return (
    <>
      <head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;500&display=swap');
        </style>
      </head>
      <body className={style.body}>
        <SideNav />
        <main className={style.container}>
          <div className={style.cardContainer}>
            <div className={style.card}></div>
            <div className={`${style.card} ${style.medium}`}>
              <div className={style.imageContainer}>
                <Image
                  src="https://i.ytimg.com/vi/xaPepCVepCg/maxresdefault.jpg"
                  width="900px"
                  height="500px"
                />
              </div>
              <div className={style.text}> Alan!! Alaaan!</div>
            </div>
            <div className={style.card}>
              <div className={style.imageContainer}>
                <Image
                  src="https://i.ytimg.com/vi/xaPepCVepCg/maxresdefault.jpg"
                  width="900px"
                  height="500px"
                />
              </div>
              <div className={style.text}> Alan!! Alaaan!</div>
            </div>
            <div className={style.card}>
              <div className={style.imageContainer}>
                <Image
                  src="https://i.ytimg.com/vi/xaPepCVepCg/maxresdefault.jpg"
                  width="340px"
                  height="200px"
                />
              </div>
              <div className={style.text}> Alan!! Alaaan!</div>
            </div>
            <div className={style.card}>
              <div className={style.imageContainer}>
                <Image
                  src="https://i.ytimg.com/vi/Yzn0sRH_4Qc/maxresdefault.jpg"
                  width="900px"
                  height="500px"
                />
              </div>
              <div className={style.text}> Alan!! Alaaan!</div>
            </div>
            <div className={`${style.card} ${style.medium}`}>
              <div className={style.imageContainer}>
                <Image
                  src="https://i.ytimg.com/vi/Yzn0sRH_4Qc/maxresdefault.jpg"
                  width="900px"
                  height="500px"
                />
              </div>
              <div className={style.text}> Alan!! Alaaan!</div>
            </div>
            <div className={style.card}></div>
            <div className={style.card}>
              <div className={style.imageContainer}>
                <Image
                  src="https://i.ytimg.com/vi/Yzn0sRH_4Qc/maxresdefault.jpg"
                  width="900px"
                  height="500px"
                />
              </div>
              <div className={style.text}> Alan!! Alaaan!</div>
            </div>

            <div className={style.card}>
              <div className={style.imageContainer}>
                <Image
                  src="https://i.ytimg.com/vi/Yzn0sRH_4Qc/maxresdefault.jpg"
                  width="900px"
                  height="500px"
                />
              </div>
              <div className={style.text}> Alan!! Alaaan!</div>
            </div>
            <div className={style.card}></div>

            <div className={style.card}></div>
            <div className={style.card}>
              <div className={style.imageContainer}>
                <Image
                  src="https://i.ytimg.com/vi/qDsrlWpFNZQ/maxresdefault.jpg"
                  width="900px"
                  height="500px"
                />
              </div>
              <div className={style.text}> Alan!! Alaaan!</div>
            </div>
            <div className={`${style.card} ${style.medium}`}></div>
            <div className={`${style.card} ${style.medium}`}></div>
            <div className={style.card}></div>
            <div className={style.card}></div>
          </div>
        </main>
      </body>
    </>
  );
}

export default GridLayout;
