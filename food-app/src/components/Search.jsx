import { useState, useEffect } from "react";
import styles from "./search.module.css";
const url = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "8963da096c0c4c67a39a5ec8d333a58b";
// const url = "https://www.themealdb.com/api/json/v1/1/search.php";
//api keys should be placed in env vairables
// const API_KEY = " f76eedfebfb14ad99fab9e4ec1d1ea61";
export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pizza");
  //useEffect helps sync a component with external data. It takes in the arguments callbackfn and dependency list (array)

  //pass in the useState viable into the dependency(it changes triggers the useEffect function to execute)
  //?query=${query}&apiKey=${API_KEY}
  useEffect(() => {
    async function fetchFood() {
      const response = await fetch(`${url}?query=${query}&apiKey=${API_KEY}`);
      const data = await response.json();
      console.log(data.results);
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);
  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.searchInput}
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        type="text"
      />
    </div>
  );
}
