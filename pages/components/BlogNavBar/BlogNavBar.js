import NavBarLink from '../NavBarLink/NavBarLink.js'
import styles from "./BlogNavBar.module.scss";

function BlogNavBar() {
    return (
            <div className={styles.navBar}>
              <div className={styles.navBarContent}>
                <NavBarLink link="https//www.instagram.com/" name="All" highlighted={true}/>
                <NavBarLink link="https//www.instagram.com/" name="TECH STARTUPS"/>
                <NavBarLink link="/blog/blog" name="GETTING INTO TECH"/>
                <NavBarLink link="../" name="PRODUCTIVITY"/>
              </div>
            </div>
      );
}

export default BlogNavBar