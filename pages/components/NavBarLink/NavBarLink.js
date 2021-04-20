import styles from "./NavBarLink.module.scss";
import Link from "next/link";

const NavBarLink = ({highlighted, name, link}) => {
  const styleClass = highlighted
    ? styles.navBarButtonHighlighted
    : styles.navBarButton;
    console.log(styleClass)
  return (
    <button className={styleClass}>
      <Link href={link} highlighted={false}>{name}</Link>
    </button>
  );
}

export default NavBarLink
