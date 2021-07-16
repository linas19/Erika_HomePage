import styles from "./BlogNavBar.module.scss";
import stylesButton from "../navBarLink/navBarLink.module.scss"

function BlogNavBar({ highlighted, onClick }) {
  const styleClass = highlighted
    ? stylesButton.navBarButtonHighlighted
    : stylesButton.navBarButton;
  return (
    <div className={styles.navBar}>
      <div className={styles.navBarContent}>
        <button className={styleClass} onClick={() => onClick('all')}>ALL</button>
        <button className={styleClass} onClick={() => onClick('techStartups')}>TECH STARTUPS</button>
        <button className={styleClass} onClick={() => onClick('gettingIntoTech')}>GETTING INTO TECH</button>
        <button className={styleClass} onClick={() => onClick('productivity')}>PRODUCTIVITY</button>
      </div>
    </div>
  );
}

export default BlogNavBar;
