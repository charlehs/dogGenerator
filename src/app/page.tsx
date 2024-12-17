import DogGenerator from "@/components/DogGenerator/DogGenerator";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.pageLayout}>
        <header className={styles.pageHeader}>DogLogo</header>
        <div className={styles.body}>
          <h1 className={styles.pageTitle}>
            Dog Photo
            <br /> Generator
          </h1>
          <h3 className={styles.pageSubTitle}>What to expect:</h3>
          <ul className={styles.pageBulletList}>
            <li className={styles.pageBulletPoint}>
              Zero-pressure, technical demo of the Acme platform
            </li>
            <li className={styles.pageBulletPoint}>
              Walkthrough of a relevant use case
            </li>
            <li className={styles.pageBulletPoint}>
              Overview of products and plans
            </li>
            <li className={styles.pageBulletPoint}>
              Insight into API and integration capabilities
            </li>
          </ul>
        </div>

        <div className={styles.dogGenerator}>
          <DogGenerator />
        </div>
        <div className={styles.illustration}>
          {/* <DemoPageIllustration /> */}
        </div>
        <div className={styles.copyright}>{/* <p>© acme corp</p> */}</div>
      </div>
    </div>
  );
}
