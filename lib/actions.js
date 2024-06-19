/*
 * @Author: Fangyu Kung
 * @Date: 2024-06-17 01:01:43
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-06-18 00:48:35
 * @FilePath: /foodies-project/lib/actions.js
 */
"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

const isInvalidText = (text) => {
  return !text || text.trim() === "";
  //驗證是否為空值
};

export async function shareMeal(prevState, formData) {
  const meal = {
    title: formData.get("title"),
    image: formData.get("image"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: "Invalid input",
    };
  }

  await saveMeal(meal);
  revalidatePath("/meals"); // 會重新佈局,可以确保内容尽可能地保持最新，同时仍然享受静态页面的性能优势
  redirect("/meals");
}
