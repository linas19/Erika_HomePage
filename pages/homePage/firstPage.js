import Image from "next/image.js";
import styles from "../../styles/FirstPage.module.scss";
import GetInTouchButton from '../components/getInTouchButton.js'

export default function FirstPage() {
  const onClick = () => {
    bottomRef.current.scrollIntoView();
  };
  return (
    <div className={styles.firstPage}>
      <div className={styles.firstPageLeft}>
        <div className={styles.firstImage}>
          <Image
            src="/example-scene-1.png"
            width={584}
            height={553}
            alt="Image1"
          />
        </div>
      </div>
      <div className={styles.firstPageRight}>
        <div className={styles.firstPageRightTitle}>
          Turn your tech idea into a product people love
        </div>
        <div className={styles.firstPageRightText}>
          Technology should work for you. I’m here to build your mobile or web
          app, so you can focus on what really matters - growing your business.
        </div>
        <div className={styles.getInTouchDiv}>
        {/* <button className={styles.getInTouchButton} onClick={onClick}>
          GET IN TOUCH
        </button> */}
        <GetInTouchButton />
        </div>

      </div>
    </div>
  );
}
