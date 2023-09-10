import { FC } from "react";
import styles from "./index.module.scss";
import avatar from "@/assets/images/avatar.png";
import { Zoom, Bounce } from "react-awesome-reveal";
import { ArrowDownOutlined } from "@ant-design/icons";

const toDown = () => {
  const $El = document.querySelector("#project");
  if ($El) {
    $El.scrollIntoView({ behavior: "smooth" });
  }
};

const Banner: FC = () => {
  return (
    <div id="home" className={styles.home}>
      <div className={styles.info}>
        <Zoom direction="down" cascade>
          <div className={styles.avatar}>
            <img src={avatar} alt="" />
          </div>
        </Zoom>
        <Bounce cascade damping={0.1}>
          <h2>Akatsuki</h2>
          <p>记录生活，热爱生活，感恩生活</p>
        </Bounce>
      </div>
      <ArrowDownOutlined className={styles.toDown} onClick={() => toDown()} />
    </div>
  );
};

export default Banner;
