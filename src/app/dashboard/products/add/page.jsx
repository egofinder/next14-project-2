import { addProduct } from "@/lib/actions";
import styles from "./addProduct.module.css";

const AddProductPage = () => {
  return (
    <div className={styles.container}>
      <form action={addProduct} className={styles.form}>
        <input type="text" name="title" placeholder="title" required />
        <select name="category">
          <option value="" disabled selected>
            Choose a Category
          </option>
          <option value="kitchen">Kitchen</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
        </select>
        <input type="number" name="price" placeholder="Price" />
        <input type="number" name="stock" placeholder="Stock" />
        <input type="text" name="color" placeholder="Color" />
        <input type="text" name="size" placeholder="Size" />
        <textarea name="desc" rows="15" placeholder="Description"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProductPage;
