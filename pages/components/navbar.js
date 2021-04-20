import styles from "../../styles/NavBar.module.scss";
import Head from "next/head";
import Link from "next/link";
import NavBarLink from './navBarLink.js'

export default function NavBar() {
  return (
    <div>
      <Head>
        <title>Erika pag</title>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
        </style>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
      </Head>
      <body>
        <div className={styles.topLine}></div>
        <div className={styles.navBar}>
          <div className={styles.navBarLeft}>
            <div className={styles.navBarLeftTitle}>JONIKA</div>
          </div>
          <div className={styles.navBarRight}>
            <NavBarLink link="https//www.instagram.com/" name="APPS"/>
            <button className={styles.navBarRightButton}>
              <Link href="https://www.instagram.com/">ABOUT</Link>
            </button>
            <button className={styles.navBarRightButton} id={styles.blogButton}>
              <Link href="/blog/blog">BLOG</Link>
            </button>
            <button className={styles.navBarRightButton}>
              <Link href="../">GET IN TOUCH</Link>
            </button>
          </div>
        </div>
      </body>
    </div>
  );
}
