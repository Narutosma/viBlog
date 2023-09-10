/**
 * 导航栏
 */
import { FC, useState } from "react";
import styles from "./index.module.scss";
import { navItem } from "./constants";

export interface INavItem {
  text: string;
  left: number;
  toEl: string;
}

const Nav: FC = () => {
  const [activeItem, setActiveItem] = useState("#home");
  const [left, setLeft] = useState(0);

  const scroll = (toEl: string, left: number) => {
    // const $El = document.querySelector(toEl);
    // if ($El) {
    // $El.scrollIntoView({ behavior: "smooth" });
    setActiveItem(toEl);
    setLeft(left);
    // }
  };
  return (
    <div className={styles.navContainer}>
      <div className={styles.logo}>Akatsuki</div>
      <ul>
        {navItem.map((nav: INavItem) => (
          <li
            key={nav.toEl}
            className={nav.toEl === activeItem ? styles.active : ""}
            onClick={() => scroll(nav.toEl, nav.left)}
          >
            {nav.text}
          </li>
        ))}
        <div className={styles.slider} style={{ left }}></div>
      </ul>
    </div>
  );
};

export default Nav;
