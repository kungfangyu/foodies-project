/*
 * @Author: Fangyu Kung
 * @Date: 2023-12-05 07:32:51
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-06-19 00:50:44
 * @FilePath: /foodies-project/app/layout.js
 */
import "./globals.css";

import MainHeader from "@/components/main-header/main-header";

export const metadata = {
  title: "All Meals",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
