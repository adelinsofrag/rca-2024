import React from "react";
import { useParams } from "react-router-dom";

export const MealPage = () => {
  let { idMeal } = useParams();
  // fetch via single meal (by id) + idMeal ^
  return <div>MealPage: {idMeal}</div>;
};
