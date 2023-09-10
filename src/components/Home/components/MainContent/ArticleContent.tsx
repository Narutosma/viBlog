import { FC } from "react";
import styles from "./index.module.scss";

const ArticleContent: FC = () => {
  return (
    <div className={styles.articleContent}>
      <h4>发现</h4>
      <div className={styles.articleList}>
        <div className={styles.articleItem}>
          <h2>title: 标题栏，超出部分隐藏。。。</h2>
          <p className={styles.articleDirect}>
            direction今天天气真好今天天气真好今天天气真好今天天气真好今天天气真好今天天气真好今天天气真好今天天气真好今天天气真好今天天气真好今天天气真好
          </p>
          <div className={styles.articleTags}>
            <span>tag</span>
            <span>tag</span>
          </div>
        </div>
        <div className={styles.articleItem}>
          <h2>title: 标题栏，超出部分隐藏。。。</h2>
          <p className={styles.articleDirect}>
            direction今天天气真好今天天气真好今天天气真好今天天气真好今天天气真好今天天气真好今天天气真好今天天气真好今天天气真好今天天气真好今天天气真好
          </p>
          <div className={styles.articleTags}>
            <span>tag</span>
            <span>tag</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleContent;
