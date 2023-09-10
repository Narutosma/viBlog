import { FC } from "react";
import styles from "./index.module.scss";
import avatar from "@/assets/images/avatar.png";

const AsideContent: FC = () => {
  return (
    <div className={styles.asideContent}>
      <div className={styles.info}>
        <div className={styles.avatar}>
          <img src={avatar} alt="" />
        </div>
        <h2>Akatsuki</h2>
        <p>记录生活，热爱生活，感恩生活</p>
        <div className={styles.statistics}>
          <div className={styles.tag}>
            <span>文章</span>
            <span>10</span>
          </div>
          <div className={styles.tag}>
            <span>分类</span>
            <span>5</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AsideContent;
