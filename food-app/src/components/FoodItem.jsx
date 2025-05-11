import styles from "./fooditem.module.css";

export default function FoodItem({ food, setFoodId}) {
  function handleDetails(id){
    console.log(id)
    setFoodId(food.id);
    

  }
  return (
    <div className={styles.foodItemContainer}>
      <img className={styles.itemImage} src={food.image} alt="food image" />
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{food.title}</p>
      </div>
      <div className = {styles.buttonContainer}>
        <button onClick={()=>handleDetails(food.id)} className={styles.itemButton}>View recipe</button>
      </div>
     
    </div>
  );
}
