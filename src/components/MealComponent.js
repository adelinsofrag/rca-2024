import React from "react";

export const MealComponent = (props) => {
  return (
    <div className="border-bottom">
      {/* Link - React router DOM */}

      <h2 className="text-primary">{props.title}</h2>
      <p className="text-secondary">{props.idMeal}</p>
    </div>
  );
};
