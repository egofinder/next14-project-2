import Search from "@/ui/components/dashboard/search/search";
import styles from "./users.module.css";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/ui/components/dashboard/pagination/pagination";
import { fetchUsers } from "@/lib/data";
import { deleteUser } from "@/lib/actions";

const UsersPage = async ({ searchParams }) => {
  const q = searchParams?.q ? searchParams.q : "";
  const page = searchParams?.page ? searchParams.page : 1;
  const { count, users } = await fetchUsers(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search className={styles.search} placeholder="Search for a user..." />
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Created At</th>
            <th>Role</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <div className={styles.user}>
                  <Image
                    src={user.img ? user.img : "/noavatar.png"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  {user.username}
                </div>
              </td>
              <td>{user.email}</td>
              <td>
                {user.createdAt?.toLocaleDateString(undefined, {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </td>
              <td>{user.isAdmin ? "Admin" : "Client"}</td>
              <td
                className={`${user.isActive ? styles.active : styles.inActive}`}
              >
                {user.isActive ? "Active" : "Inactive"}
              </td>

              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/users/${user.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deleteUser}>
                    <input type="hidden" name="id" value={user.id} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default UsersPage;
