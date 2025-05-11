import { useEffect, useState } from "react";
import styles from "./fooddetail.module.css";
import ItemList from "./ItemList";

export default function FoodDetail({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setLoading] = useState(true);
  const url = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;

  useEffect(() => {
    async function fetchFoodDetail() {
      const response = await fetch(`${url}?apiKey=${API_KEY}`);
      const data = await response.json();
      setFood(data);
      setLoading(false);
    }
    fetchFoodDetail();
  }, [foodId]);

  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img className={styles.recipeImage} src={food.image} alt="food image" />
        {/* time taken to cook */}
        <div className={styles.recipeDetails}>
          <span>
            <strong>🕰️{food.readyInMinutes} minutes</strong>
          </span>
          {/* vegetarian or non vegarian */}
          <span>
            <strong>
              {food.vegetarian ? " 🥕 Vegetarian" : " 🍗 Non vegetarian"}
            </strong>
          </span>
          {/*  number of people to be served */}
          <span>
            <strong> 👨‍👩‍👧‍👦 Serves {food.servings} people</strong>
          </span>
          {/* vegan */}
          <span>{food.vegan ? "Vegan" : ""}</span>
          {/* price per serving */}
        </div>
        <div>
          <span>
            <strong> $ {(food.pricePerServing * 100) / 100} Per Serving</strong>
          </span>
        </div>
        {/* acess the analyzedInstructions property of food => steps =>maps through each steps represented by step then you display the step(from food object) of  the step(the map parameter) */}
        <ItemList food={food} isLoading={isLoading} />

        <h2>Instructions</h2>
        <div className={styles.recipeInstructions}>
          <ol>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
