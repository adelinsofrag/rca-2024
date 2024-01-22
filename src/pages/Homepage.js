import React, { useEffect, useState } from "react";
import { MealsContainer } from "../containers/MealsContainer";

export const Homepage = () => {
  // const [searchValue, setSearchValue] = useState("beef");
  const searchValue = "Beef";
  const [meals, setMeals] = useState([]);

  const fetchData = (searchValue) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
      .then((response) => response.json())
      .then((responseJSON) => setMeals(responseJSON));
  };

  useEffect(
    // what secondary effect will do?
    () => {
      fetchData(searchValue);
    },
    // dependency
    [searchValue]
  );

  return (
    <div>
      <h1>Homepage</h1>
      <div>
        <MealsContainer responseData={meals} />
      </div>
    </div>
  );
};
