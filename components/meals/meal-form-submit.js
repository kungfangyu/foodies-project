/*
 * @Author: Fangyu Kung
 * @Date: 2024-06-17 18:17:35
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-06-19 01:34:47
 * @FilePath: /foodies-project/components/meals/meal-form-submit.js
 */
"use client";

import { useFormState } from "react-dom";

export default function MealsFormSubmit() {
  const { pending } = useFormState();

  return (
    <button disabled={pending}>{pending ? "Saving..." : "Save Meal"}</button>
  );
}
