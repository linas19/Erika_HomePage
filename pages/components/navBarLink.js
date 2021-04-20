import styles from "../../styles/Navbar.module.scss";
import Link from "next/link";

const NavBarLink = ({highlighted, name, link}) => {
  const styleClass = highlighted
    ? styles.navBarRightButtonHighlighted
    : styles.navBarRightButton;
    console.log(styleClass)
  return (
    <button className={styleClass}>
      <Link href={link}>{name}</Link>
    </button>
  );
}

export default NavBarLink
