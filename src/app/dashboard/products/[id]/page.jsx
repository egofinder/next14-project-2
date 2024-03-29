import Image from "next/image";
import styles from "./singleProduct.module.css";
import { fetchProduct } from "@/lib/data";
import { updateProduct } from "@/lib/actions";

const SingleProductPage = async ({ params }) => {
  const { id } = params;
  const product = await fetchProduct(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image
            src={product.img || "/noproduct.jpg"}
            alt=""
            fill
            className={styles.userImage}
          />
        </div>
      </div>
      <div className={styles.formContainer}>
        <form action={updateProduct} className={styles.form}>
          <input type="hidden" name="id" value={product.id} />
          <label>Title</label>
          <input type="text" name="title" placeholder={product.title} />
          <label>Price</label>
          <input type="number" name="price" placeholder={product.price} />
          <label>Stock</label>
          <input type="number" name="stock" placeholder={product.stock} />
          <label>Color</label>
          <input type="text" name="color" placeholder={product.color} />
          <label>Size</label>
          <input type="text" name="size" placeholder={product.size} />
          <label>Category</label>
          <select name="category">
            <option value="kitchen">Kitchen</option>
            <option value="computer">Computer</option>
          </select>
          <label>Description</label>
          <textarea
            type="text"
            name="desc"
            rows={5}
            placeholder={product.desc}
          />
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
