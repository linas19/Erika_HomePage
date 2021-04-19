import styles from "../../styles/GetInTouchButton.module.scss";

export default function GetInTouchButton() {
    const onClick = () => {
        bottomRef.current.scrollIntoView();
        }
    return (
        <button className={styles.getInTouchButton} onClick={onClick}>GET IN TOUCH</button>
    )
}