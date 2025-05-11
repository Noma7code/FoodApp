import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Header from "./components/Header";
import Container from "./components/Container";
import "./App.css";
import InnerContainer from "./components/InnerContainer";
import FoodDetail from "./components/FoodDetail";

export default function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState(" 658920");
  return (
    <div className="App">
      <Header />
      <Search foodData={foodData} setFoodData={setFoodData} />
      {/* container wraps foodlist to flex them with the recipe instruction */}
      <Container>
        <InnerContainer>
          <FoodList setFoodId={setFoodId} foodData={foodData} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetail foodId={foodId}/>
        </InnerContainer>
      </Container>
    </div>
  );
}
