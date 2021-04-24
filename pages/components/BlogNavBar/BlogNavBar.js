import NavBarLink from '../NavBarLink/NavBarLink.js'
import styles from "./BlogNavBar.module.scss";

function BlogNavBar({all, techStart, getInto, prod}) {
    return (
            <div className={styles.navBar}>
              <div className={styles.navBarContent}>
                <NavBarLink link="https//www.instagram.com/" name="All" highlighted={all}/>
                <NavBarLink link="https//www.instagram.com/" name="TECH STARTUPS" highlighted={techStart}/>
                <NavBarLink link="/blog/blog" name="GETTING INTO TECH" highlighted={getInto}/>
                <NavBarLink link="../" name="PRODUCTIVITY" highlighted={prod}/>
              </div>
            </div>
      );
}

export default BlogNavBar