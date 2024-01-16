import Card from "@/ui/components/dashboard/card/card";
import styles from "./dashboard.module.css";
import Rightbar from "@/ui/components/dashboard/rightbar/rightbar";
import Transaction from "@/ui/components/dashboard/transaction/transaction";
import Chart from "@/ui/components/dashboard/chart/chart";

const DashboardPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>
        <Transaction />
        <Chart />
      </div>
      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  );
};

export default DashboardPage;
