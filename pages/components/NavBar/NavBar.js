import styles from "./NavBar.module.scss";
import NavBarLink from '../NavBarLink/NavBarLink.js'

export default function NavBar() {
  return (
    <div>
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
            <NavBarLink link="../" name="GET IN TOUCH" highlighted={true}/>
          </div>
        </div>
      </body>
    </div>
  );
}
