import styles from "./GetInTouchButton.module.scss";

export default function GetInTouchButton({onClick}) {
    return (
        <button className={styles.getInTouchButton} onClick={onClick}>GET IN TOUCH</button>
    )
}