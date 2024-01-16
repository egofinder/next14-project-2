import { addUser } from "@/lib/actions";
import styles from "./addUser.module.css";

const AddUserPage = () => {
  return (
    <div className={styles.container}>
      <form action={addUser} className={styles.form}>
        <input type="text" name="username" placeholder="User Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="text" name="password" placeholder="Password" required />
        <input type="text" name="phone" placeholder="Phone Number" />
        <select name="isAdmin">
          <option value={false} disabled selected>
            Is Admin?
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select name="isActive">
          <option value={true} disabled selected>
            Is Active?
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <textarea name="address" rows="10" placeholder="Address"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddUserPage;
