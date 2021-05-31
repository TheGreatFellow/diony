import style from "../styles/SideNav.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { Modal } from "react-responsive-modal"
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
  faBell,
  faUserAstronaut,
} from "@fortawesome/free-solid-svg-icons"

const SideNav = () => {
  const onOpenModal = () => setOpen(true)
  const onCloseModal = () => setOpen(false)
  const [frensVisible, setFrensVisible] = useState(false)
  const [open, setOpen] = useState(false)

  const [alertVisible, setAlertVisible] = useState(false)

  return (
    <div>
      <nav
        className={
          // navVisible ? `${style.navbar} ${style.active}` :
          style.navbar
        }
        style={alertVisible ? { width: "200px" } : {}}
      >
        <ul className={style.navbarNav}>
          <li className={style.navLink}>
            <a href='' className={style.navA}>
              <span className={style.icon}>
                <FontAwesomeIcon icon={faArchway} size='lg'></FontAwesomeIcon>
              </span>
              <span className={style.title}>Home</span>
            </a>
          </li>
          <li className={style.navLink}>
            <div className={style.navA} onClick={onOpenModal}>
              <span className={style.icon}>
                <FontAwesomeIcon icon={faSearch} size='lg'></FontAwesomeIcon>
              </span>
              <span className={style.title}>Search</span>
            </div>
          </li>
          <li
            className={style.navLink}
            onClick={() => setAlertVisible(!alertVisible)}
          >
            <div className={style.navA}>
              <span className={style.icon}>
                <FontAwesomeIcon icon={faBell} size='lg'></FontAwesomeIcon>
              </span>
              <span className={style.title}>Alerts</span>
            </div>
          </li>
          <li className={style.navLink}>
            <a href='' className={style.navA}>
              <span className={style.icon}>
                <FontAwesomeIcon
                  icon={faUserAstronaut}
                  size='lg'
                ></FontAwesomeIcon>
              </span>
              <span className={style.title}>Profile</span>
            </a>
          </li>
          <li
            className={style.navLink}
            onClick={() => setFrensVisible(!frensVisible)}
          >
            <div href='' className={style.navF}>
              <span className={style.icon}>
                <FontAwesomeIcon icon={faUsers} size='lg'></FontAwesomeIcon>
              </span>
              <span className={style.title}>Friends</span>
              <span className={style.icon} style={{}}>
                <FontAwesomeIcon
                  icon={faSortDown}
                  size='lg'
                  rotation={frensVisible ? 180 : 0}
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
                  <a href='' className={style.navA}>
                    <span className={style.iconfrens}>
                      <FontAwesomeIcon
                        icon={faUserSecret}
                        size='lg'
                      ></FontAwesomeIcon>
                    </span>
                    <span className={style.titlefrens}>Eren Yeagar</span>
                  </a>
                </li>
                <li className={style.navLink}>
                  <a href='' className={style.navA}>
                    <span className={style.iconfrens}>
                      <FontAwesomeIcon
                        icon={faUserSecret}
                        size='lg'
                      ></FontAwesomeIcon>
                    </span>
                    <span className={style.titlefrens}>Eren Yeagar</span>
                  </a>
                </li>
                <li className={style.navLink}>
                  <a href='' className={style.navA}>
                    <span className={style.iconfrens}>
                      <FontAwesomeIcon
                        icon={faUserSecret}
                        size='lg'
                      ></FontAwesomeIcon>
                    </span>
                    <span className={style.titlefrens}>Eren Yeagar</span>
                  </a>
                </li>
                <li className={style.navLink}>
                  <a href='' className={style.navA}>
                    <span className={style.iconfrens}>
                      <FontAwesomeIcon
                        icon={faUserSecret}
                        size='lg'
                      ></FontAwesomeIcon>
                    </span>
                    <span className={style.titlefrens}>Reiner Braun</span>
                  </a>
                </li>
                <li className={style.navLink}>
                  <a href='' className={style.navA}>
                    <span className={style.iconfrens}>
                      <FontAwesomeIcon
                        icon={faUserSecret}
                        size='lg'
                      ></FontAwesomeIcon>
                    </span>
                    <span className={style.titlefrens}>Levi Ackerman</span>
                  </a>
                </li>
                <li className={style.navLink}>
                  <a href='' className={style.navA}>
                    <span className={style.iconfrens}>
                      <FontAwesomeIcon
                        icon={faUserSecret}
                        size='lg'
                      ></FontAwesomeIcon>
                    </span>
                    <span className={style.titlefrens}>Connie</span>
                  </a>
                </li>
                <li className={style.navLink}>
                  <a href='' className={style.navA}>
                    <span className={style.iconfrens}>
                      <FontAwesomeIcon
                        icon={faUserSecret}
                        size='lg'
                      ></FontAwesomeIcon>
                    </span>
                    <span className={style.titlefrens}>Sasha Blouse</span>
                  </a>
                </li>
                <li className={style.navLink}>
                  <a href='' className={style.navA}>
                    <span className={style.iconfrens}>
                      <FontAwesomeIcon
                        icon={faUserSecret}
                        size='lg'
                      ></FontAwesomeIcon>
                    </span>
                    <span className={style.titlefrens}>Sasha Blouse</span>
                  </a>
                </li>
                <li className={style.navLink}>
                  <a href='' className={style.navA}>
                    <span className={style.iconfrens}>
                      <FontAwesomeIcon
                        icon={faUserSecret}
                        size='lg'
                      ></FontAwesomeIcon>
                    </span>
                    <span className={style.titlefrens}>Armin Arlert</span>
                  </a>
                </li>
                <li className={style.navLink}>
                  <a href='' className={style.navA}>
                    <span className={style.iconfrens}>
                      <FontAwesomeIcon
                        icon={faUserSecret}
                        size='lg'
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
            <a href='' className={style.navA}>
              <span className={style.icon}>
                <FontAwesomeIcon icon={faCogs} size='lg'></FontAwesomeIcon>
              </span>
              <span className={style.title}>Settings</span>
            </a>
          </li>
          <li className={style.navLink}>
            <a href='' className={style.navA}>
              <span className={style.icon}>
                <FontAwesomeIcon icon={faBeer} size='lg'></FontAwesomeIcon>
              </span>
              <span className={style.title}>Contact Us</span>
            </a>
          </li>
        </ul>
      </nav>
      <Modal open={open} onClose={onCloseModal} center styles={styles}>
        <svg className={style.svgIcon} viewBox='0 0 20 20'>
          <path
            stroke='#666'
            stroke-width='0.7'
            d='M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z'
          ></path>
        </svg>
        <input type='text' placeholder='Search' className={style.searchBar} />
      </Modal>
    </div>
  )
}

const styles = {
  modal: {
    background: "transparent",
    width: "400px",
    height: "250px",
    padding: "60px 35px 35px 35px",
    borderRadius: "40px",
    boxShadow: "8px 8px 13px #cbced1,  -8px -8px 13px #ffffff",
  },
  overlay: {
    background: "#ecf0f3",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  closeIcon: {
    stroke: "red",
    fill: "red",
    strokeWidth: "2",
    position: "absolute",
    top: "5px",
    right: "5px",
  },
}

export default SideNav
