"use client";

import { useFormState } from "react-dom";
import styles from "./loginForm.module.css";
import { authenticate } from "@/lib/actions";
// import { useEffect } from "react";
// import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [prevState, formAction] = useFormState(authenticate, undefined);

  //   const router = useRouter();
  //   useEffect(() => {
  //     prevState === "NEXT_REDIRECT" ? router.push("/") : null;
  //   }, [prevState, router]);

  return (
    <div className={styles.container}>
      <form action={formAction} className={styles.form}>
        <h1 className={styles.title}>Login</h1>
        <input type="text" placeholder="email" name="email" />
        <input type="text" placeholder="password" name="password" />
        <button>Login</button>
        {prevState ? prevState : null}
      </form>
    </div>
  );
};

export default LoginForm;
