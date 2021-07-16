import styles from "./BlogNavBar.module.scss";
import stylesButton from "../navBarLink/navBarLink.module.scss"

function BlogNavBar({ highlighted, onClick }) {
  const allClass = highlighted === 'all'
    ? stylesButton.navBarButtonHighlighted
    : stylesButton.navBarButton;
  const techClass = highlighted === 'techStartups' ? stylesButton.navBarButtonHighlighted : stylesButton.navBarButton
  const getClass = highlighted === 'gettingIntoTech'
  ? stylesButton.navBarButtonHighlighted
  : stylesButton.navBarButton;
  const prodClass = highlighted === 'productivity'
  ? stylesButton.navBarButtonHighlighted
  : stylesButton.navBarButton;
  return (
    <div className={styles.navBar}>
      <div className={styles.navBarContent}>
        <button className={allClass} onClick={() => onClick('all')}>ALL</button>
        <button className={techClass} onClick={() => onClick('techStartups')}>TECH STARTUPS</button>
        <button className={getClass} onClick={() => onClick('gettingIntoTech')}>GETTING INTO TECH</button>
        <button className={prodClass} onClick={() => onClick('productivity')}>PRODUCTIVITY</button>
      </div>
    </div>
  );
}

export default BlogNavBar;
