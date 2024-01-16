"use client";

import { useFormState, useFormStatus } from "react-dom";
import styles from "./loginForm.module.css";
import { authenticate } from "@/lib/actions";
import { Suspense } from "react";
// import { useEffect } from "react";
// import { useRouter } from "next/navigation";

export function LoginButton() {
  const { pending } = useFormStatus();

  return <button disabled={pending}>{pending ? "Login..." : "Login"}</button>;
}

const LoginForm = () => {
  const [prevState, formAction] = useFormState(authenticate, undefined);

  return (
    <div className={styles.container}>
      <form action={formAction} className={styles.form}>
        <span>Try Id: admin@admin.com password: password</span>
        <h1 className={styles.title}>Login</h1>
        <input type="text" placeholder="email" name="email" />
        <input type="text" placeholder="password" name="password" />
        <LoginButton />
        {prevState ? prevState : null}
      </form>
    </div>
  );
};

export default LoginForm;
