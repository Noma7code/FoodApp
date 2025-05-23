import styles from "./item.module.css";

export default function Item({ item }) {
  return (
    <div>
      <div className={styles.itemContainer} key={item.id}>
        <div className={styles.imageContainer}>
          <img
            src={
              `https://spoonacular.com/cdn/ingredients_100x100/` + item.image
            }
          />
        </div>
        <div className={styles.quantityContainer}>
          <div className={styles.name}>{item.name}</div>
          <div className={styles.amount}>
            {item.amount}
            {item.unit}
          </div>
        </div>
      </div>
    </div>
  );
}
