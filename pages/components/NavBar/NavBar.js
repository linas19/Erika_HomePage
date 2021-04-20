import styles from "./NavBar.module.scss";
import Head from "next/head";
import Link from "next/link";
import NavBarLink from '../NavBarLink/NavBarLink.js'

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
            <NavBarLink link="https//www.instagram.com/" name="ABOUT"/>
            <NavBarLink link="/blog/blog" name="BLOG"/>
            <NavBarLink link="https//www.instagram.com/" name="GET IN TOUCH" highlighted={true}/>
          </div>
        </div>
      </body>
    </div>
  );
}
