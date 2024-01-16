import Navbar from "@/ui/components/dashboard/navbar/navbar";
import Sidebar from "@/ui/components/dashboard/sidebar/sidebar";
import styles from "./dashboard.module.css";
import Footer from "@/ui/components/dashboard/footer/footer";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
