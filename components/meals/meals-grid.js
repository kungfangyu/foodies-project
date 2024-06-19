/*
 * @Author: Fangyu Kung
 * @Date: 2024-06-16 01:49:57
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-06-16 18:22:44
 * @FilePath: /foodies-project/components/meals/meals-grid.js
 */
import MealItem from "./meal-item";
import classes from "./meals-grid.module.css";

export default function MealsGrid({ meals }) {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
