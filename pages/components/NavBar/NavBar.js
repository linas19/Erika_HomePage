import styles from "./NavBar.module.scss";
import NavBarLink from '../NavBarLink/NavBarLink.js'

export default function NavBar({apps, about, blog, getIn}) {
  return (
    <div>
      <body>
        <div className={styles.topLine}></div>
        <div className={styles.navBar}>
          <div className={styles.navBarLeft}>
            <div className={styles.navBarLeftTitle}>JONIKA</div>
          </div>
          <div className={styles.navBarRight}>
            <NavBarLink link="https//www.instagram.com/" name="APPS" highlighted={apps}/>
            <NavBarLink link="/blogDetail/blogDetail" name="ABOUT" highlighted={about}/>
            <NavBarLink link="/blog/blog" name="BLOG" highlighted={blog}/>
            <NavBarLink link="../" name="GET IN TOUCH" highlighted={getIn}/>
          </div>
        </div>
      </body>
    </div>
  );
}
