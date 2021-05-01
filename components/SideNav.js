import style from "../styles/SideNav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

import {
  faArchway,
  faUserNinja,
  faSearch,
  faExclamationTriangle,
  faUsers,
  faCogs,
  faBeer,
  faSortDown,
  faUserSecret,
  faSortUp,
} from "@fortawesome/free-solid-svg-icons";

export const SideNav = () => {
  const [frensVisible, setFrensVisible] = useState(false);

  return (
    <div>
      <nav
        className={
          // navVisible ? `${style.navbar} ${style.active}` :
          style.navbar
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
                  icon={faSearch}
                  size="lg"
                ></FontAwesomeIcon>
              </span>
              <span className={style.title}>Search</span>
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
                <FontAwesomeIcon icon={faUserNinja} size="lg"></FontAwesomeIcon>
              </span>
              <span className={style.title}>Alerts</span>
            </a>
          </li>
          <li
            className={style.navLinknohover}
            onClick={() => setFrensVisible(!frensVisible)}
          >
            <div href="" className={style.navA}>
              <span className={style.icon}>
                <FontAwesomeIcon
                  className={style.fa}
                  icon={faUsers}
                  size="lg"
                ></FontAwesomeIcon>
              </span>
              <span className={style.title}>Friends</span>
              <span className={style.icon} style={{ minWidth: "45px" }}>
                <FontAwesomeIcon
                  icon={frensVisible ? faSortUp : faSortDown}
                  size="lg"
                ></FontAwesomeIcon>
              </span>
              {/*while making it dynamic watch this: https://youtu.be/IF6k0uZuypA*/}
              <ul
                className={
                  frensVisible
                    ? style.navbarNavFrens
                    : style.navbarNavFrensHidden
                }
              >
                <li className={style.navLink}>
                  <a href="" className={style.navA}>
                    <span className={style.iconfrens}>
                      <FontAwesomeIcon
                        icon={faUserSecret}
                        size="lg"
                      ></FontAwesomeIcon>
                    </span>
                    <span className={style.titlefrens}>Eren Yeagar</span>
                  </a>
                </li>
                <li className={style.navLink}>
                  <a href="" className={style.navA}>
                    <span className={style.iconfrens}>
                      <FontAwesomeIcon
                        icon={faUserSecret}
                        size="lg"
                      ></FontAwesomeIcon>
                    </span>
                    <span className={style.titlefrens}>Eren Yeagar</span>
                  </a>
                </li>
                <li className={style.navLink}>
                  <a href="" className={style.navA}>
                    <span className={style.iconfrens}>
                      <FontAwesomeIcon
                        icon={faUserSecret}
                        size="lg"
                      ></FontAwesomeIcon>
                    </span>
                    <span className={style.titlefrens}>Eren Yeagar</span>
                  </a>
                </li>
                <li className={style.navLink}>
                  <a href="" className={style.navA}>
                    <span className={style.iconfrens}>
                      <FontAwesomeIcon
                        icon={faUserSecret}
                        size="lg"
                      ></FontAwesomeIcon>
                    </span>
                    <span className={style.titlefrens}>Reiner Braun</span>
                  </a>
                </li>
                <li className={style.navLink}>
                  <a href="" className={style.navA}>
                    <span className={style.iconfrens}>
                      <FontAwesomeIcon
                        icon={faUserSecret}
                        size="lg"
                      ></FontAwesomeIcon>
                    </span>
                    <span className={style.titlefrens}>Levi Ackerman</span>
                  </a>
                </li>
                <li className={style.navLink}>
                  <a href="" className={style.navA}>
                    <span className={style.iconfrens}>
                      <FontAwesomeIcon
                        icon={faUserSecret}
                        size="lg"
                      ></FontAwesomeIcon>
                    </span>
                    <span className={style.titlefrens}>Connie</span>
                  </a>
                </li>
                <li className={style.navLink}>
                  <a href="" className={style.navA}>
                    <span className={style.iconfrens}>
                      <FontAwesomeIcon
                        icon={faUserSecret}
                        size="lg"
                      ></FontAwesomeIcon>
                    </span>
                    <span className={style.titlefrens}>Sasha Blouse</span>
                  </a>
                </li>
                <li className={style.navLink}>
                  <a href="" className={style.navA}>
                    <span className={style.iconfrens}>
                      <FontAwesomeIcon
                        icon={faUserSecret}
                        size="lg"
                      ></FontAwesomeIcon>
                    </span>
                    <span className={style.titlefrens}>Sasha Blouse</span>
                  </a>
                </li>
                <li className={style.navLink}>
                  <a href="" className={style.navA}>
                    <span className={style.iconfrens}>
                      <FontAwesomeIcon
                        icon={faUserSecret}
                        size="lg"
                      ></FontAwesomeIcon>
                    </span>
                    <span className={style.titlefrens}>Armin Arlert</span>
                  </a>
                </li>
                <li className={style.navLink}>
                  <a href="" className={style.navA}>
                    <span className={style.iconfrens}>
                      <FontAwesomeIcon
                        icon={faUserSecret}
                        size="lg"
                      ></FontAwesomeIcon>
                    </span>
                    <span className={style.titlefrens}>Mikasa Ackerman</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <ul className={style.navbarNavEnd}>
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
              <span className={style.title}>Contact Us</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideNav;
