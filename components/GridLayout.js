import style from "../styles/GridLayout.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

import {
  faArchway,
  faUserNinja,
  faExclamationTriangle,
  faUsers,
  faCogs,
  faBeer,
} from "@fortawesome/free-solid-svg-icons";
function GridLayout() {
  // function toggleMenu() {
  //   if (typeof window === "object") {
  //     let navigation = document.querySelector(style.navbar);
  //     navigation.classList.toggle("active");
  //   }
  // }
  const onClick = () => {
    navVisible ? setNavVisible(false) : setNavVisible(true);
  };
  const [navVisible, setNavVisible] = useState(false);

  return (
    <>
      <head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;500&display=swap');
        </style>
      </head>
      <body className={style.body}>
        <div className={style.toggle} onClick={onClick}></div>

        <nav
          className={
            navVisible ? `${style.navbar} ${style.active}` : style.navbar
          }
        >
          <ul className={style.navbarNav}>
            <li className={style.navLink}>
              <a href="" className={style.navA}>
                <span className={style.icon}>
                  <FontAwesomeIcon
                    className={style.fa}
                    icon={faArchway}
                    size="lg"
                  ></FontAwesomeIcon>
                </span>
                <span className={style.title}>Home</span>
              </a>
            </li>
            <li className={style.navLink}>
              <a href="" className={style.navA}>
                <span className={style.icon}>
                  <FontAwesomeIcon
                    className={style.fa}
                    icon={faUserNinja}
                    size="lg"
                  ></FontAwesomeIcon>
                </span>
                <span className={style.title}>Profile</span>
              </a>
            </li>
            <li className={style.navLink}>
              <a href="" className={style.navA}>
                <span className={style.icon}>
                  <FontAwesomeIcon
                    icon={faExclamationTriangle}
                    size="lg"
                  ></FontAwesomeIcon>
                </span>
                <span className={style.title}>Alerts</span>
              </a>
            </li>
            <li className={style.navLink}>
              <a href="" className={style.navA}>
                <span className={style.icon}>
                  <FontAwesomeIcon
                    className={style.fa}
                    icon={faUsers}
                    size="lg"
                  ></FontAwesomeIcon>
                </span>
                <span className={style.title}>Friends</span>
              </a>
            </li>
            <li className={style.navLink}>
              <a href="" className={style.navA}>
                <span className={style.icon}>
                  <FontAwesomeIcon
                    className={style.fa}
                    icon={faCogs}
                    size="lg"
                  ></FontAwesomeIcon>
                </span>
                <span className={style.title}>Settings</span>
              </a>
            </li>
            <li className={style.navLink}>
              <a href="" className={style.navA}>
                <span className={style.icon}>
                  <FontAwesomeIcon
                    className={style.fa}
                    icon={faBeer}
                    size="lg"
                  ></FontAwesomeIcon>
                </span>
                <span className={style.title}>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
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
