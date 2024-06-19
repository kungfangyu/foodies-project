/*
 * @Author: Fangyu Kung
 * @Date: 2024-06-16 17:07:25
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-06-16 17:09:48
 * @FilePath: /foodies-project/app/loading.js
 */
import classes from "./loading.module.css";

export default function MealsLoadingPage() {
  return <p className={classes.loading}>Fetching meals...</p>;
}
