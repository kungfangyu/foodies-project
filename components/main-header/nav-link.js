/*
 * @Author: Fangyu Kung
 * @Date: 2024-06-15 23:55:49
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-06-16 00:06:49
 * @FilePath: /foodies-project/components/main-header/nav-link.js
 */
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./nav-link.module.css";

export default function NavLink({ href, children }) {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={
        path.startsWith(href)
          ? `${classes.link} ${classes.active}`
          : classes.link
      }
    >
      {children}
    </Link>
  );
}
