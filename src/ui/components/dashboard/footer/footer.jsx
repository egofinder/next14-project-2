import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Egofinder</div>
      <div className={styles.text}>© Right all reserved</div>
    </div>
  );
};

export default Footer;
