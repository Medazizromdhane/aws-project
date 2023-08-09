import React, { useState, useEffect } from "react";
import { GrLogin, GrNotification, GrUser, GrSettingsOption, GrLogout } from "react-icons/gr";
import { FaShoppingBasket, FaBars } from "react-icons/fa";
import { HashLink, NavHashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import styles from "../styles/Navbar.module.css";


function Navbar() {
  const [connected, setConnected] = useState(false);

  const connect = useLocation().state?.connected;
  const [connect2, setConnect2] = useState(connect);

  useEffect(() => {
    if (connect2 === true || localStorage.getItem("user")) {
      setConnected(true);
    }
  }, [connect2]);

  const disconnect = function () {
    localStorage.removeItem("user");
    setConnected(false);
    setConnect2(false);
  };

  const resize = () => {
    const liste = document.querySelector("." + styles.itemss);
    if (window.innerWidth > 670) {
      liste.style.display = "";
    }
  };

  const burgerDisplay = () => {
    const liste = document.querySelector("." + styles.itemss);
    if (!liste.style.display) {
      liste.style.display = "flex";
    } else {
      liste.style.display = "";
    }
  };

  document.onclick = function (e) {
    const liste = document.querySelector("#liste");

    if (liste.style.display === "flex" && e.target.id !== "liste") {
      liste.style.display = "";
    } else if (liste.style.display === "" && e.target.id === "profilpic") {
      liste.style.display = "flex";
    } else if (liste.style.display === "flex" && e.target.id === "profilpic") {
      liste.style.display = "";
    }
  };

  const scrollWithOffset = (el, offset) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = offset;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <div className={styles.main}>
      <header className={styles.container}>
        <HashLink smooth to="/#">
          <h1 className='text-3xl font-bold ml-4 sm:text-2xl'>SAAS</h1>
          <h1 className='text-3xl font-bold mr-4 ml-10 sm:text-2xl'>Estimation</h1>
        </HashLink>


        <nav className={styles.items}>
          <NavHashLink className={styles.navBarItem} smooth to="/#">
            Home
          </NavHashLink>
          <NavHashLink className={styles.navBarItem} smooth to="/servicespage">
            Services
          </NavHashLink>
          <NavHashLink
            className={styles.navBarItem}
            smooth
            to="/contact"
            scroll={(e1) => scrollWithOffset(e1, 100)}
          >
            Contact Us
          </NavHashLink>
          <NavHashLink
            className={styles.navBarItem}
            smooth
            to="/about"
            scroll={(e1) => scrollWithOffset(e1, -160)}
          >
            About
          </NavHashLink>
        </nav>
        <div className={styles.actions}>
          <div className={styles.boss}>
            <GrUser className={styles.profilePic} id="profilpic" />
            <div className={styles.liste} id="liste">
              {connected && (
                <div className={styles.listeLine}>
                  <HashLink className={styles.ecriture} smooth to="/#">
                    Notifications
                  </HashLink>
                  <GrNotification className={styles.icon} />
                </div>
              )}
              {connected && (
                <div className={styles.listeLine}>
                  <a className={styles.ecriture} href="#">
                    Profile
                  </a>
                  <GrUser className={styles.icon} />
                </div>
              )}
              {connected && (
                <div className={styles.listeLine}>
                  <a className={styles.ecriture} href="#">
                    Paramètres
                  </a>
                  <GrSettingsOption className={styles.icon} />
                </div>
              )}
              {connected ? (
                <div className={styles.listeLine}>
                  <HashLink
                    className={styles.ecriture}
                    smooth
                    to="/authentification"
                    onClick={disconnect}
                  >
                    Se déconnecter
                  </HashLink>
                  <GrLogout className={styles.icon} />
                </div>
              ) : (
                <div className={styles.listeLine}>
                  <Link className={styles.ecriture} to="/authentification">
                    Se Connecter
                  </Link>
                  <GrLogin className={styles.icon} />
                </div>
              )}
            </div>
          </div>
          <div className={styles.panier}>
            <HashLink
              smooth
              to="/cart#cart"
              scroll={(e1) => scrollWithOffset(e1, -120)}
            >
              <FaShoppingBasket className={styles.icon} />
            </HashLink>
          </div>
          <div className={styles.burger} onClick={burgerDisplay}>
            <FaBars className={styles.icon} />
          </div>
        </div>
      </header>
      <nav className={styles.itemss}>
        <NavHashLink className={styles.navBarItem} smooth to="/#">
          Home
        </NavHashLink>
        <NavHashLink className={styles.navBarItem} smooth to="/servicespage">
          Services
        </NavHashLink>
        <NavHashLink
          className={styles.navBarItem}
          smooth
          to="/contact"
          scroll={(e1) => scrollWithOffset(e1, 100)}
        >
          Contact Us
        </NavHashLink>
        <NavHashLink
          className={styles.navBarItem}
          smooth
          to="/about"
          scroll={(e1) => scrollWithOffset(e1, -160)}
        >
          About
        </NavHashLink>
      </nav>
    </div>
  );
}

export default Navbar;




