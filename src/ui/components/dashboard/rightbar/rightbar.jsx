import Image from "next/image";
import styles from "./rigthbar.module.css";
import { MdPlayCircleFilled } from "react-icons/md";

const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src="/astronaut.png" alt="" fill className={styles.bg} />
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}>🔔 Open to Work</span>
          <h3 className={styles.title}>How to hire talented developer?</h3>
          <span className={styles.subtitle}> Take 1 minutes to learn</span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. A animi ex
            soluta dolore, adipisci quo voluptatibus possimus corporis odio,
            amet inventore repudiandae? Quis harum laboriosam earum molestias
            ipsum suscipit sunt.
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Learn
          </button>
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src="/astronaut.png" alt="" fill className={styles.bg} />
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}>📱Contant Right Now</span>
          <h3 className={styles.title}>Do you need more information?</h3>
          <span className={styles.subtitle}> Grap, Touch, Call</span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. A animi ex
            soluta dolore, adipisci.Quis harum laboriosam earum molestias ipsum
            suscipit sunt.
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Learn
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
