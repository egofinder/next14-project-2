import styles from "./login.module.css";
import LoginForm from "@/ui/components/login/loginForm/loginForm";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
