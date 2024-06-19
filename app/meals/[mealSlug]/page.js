/*
 * @Author: Fangyu Kung
 * @Date: 2024-06-15 22:07:36
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-06-16 23:58:38
 * @FilePath: /foodies-project/app/meals/[mealSlug]/page.js
 */
import { getMeal } from "@/lib/meals";
import Image from "next/image";
import { notFound } from "next/navigation";
import classes from "./page.module.css";

export default function MealDetailsPage({ params }) {
  const meal = getMeal(params.mealSlug);

  if (!meal) {
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, "<br>");

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        ></p>
      </main>
    </>
  );
}
