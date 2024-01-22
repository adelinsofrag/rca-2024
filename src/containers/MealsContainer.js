import React from "react";
import { MealComponent } from "../components/MealComponent";

export const MealsContainer = (props) => {
  return (
    <div>
    {/* Link - React router DOM */}
      <h1>MealsContainer</h1>
      <div>
        {props.responseData.meals &&
          props.responseData.meals.map((meal) => (
            <MealComponent idMeal={meal.idMeal} title={meal.strMeal} />
          ))}
      </div>
    </div>
  );
};
