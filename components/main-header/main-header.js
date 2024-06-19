/*
 * @Author: Fangyu Kung
 * @Date: 2024-06-15 22:27:43
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-06-15 23:59:16
 * @FilePath: /foodies-project/components/main-header/main-header.js
 */
"use client";
import Image from "next/image";
import Link from "next/link";

import logoImg from "@/assets/logo.png";
import MainHeaderBackground from "./main-header-background";
import classes from "./main-header.module.css";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="A plate with food on it" priority />
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
              {/* <Link
                href="/community"
                className={path === "/community" ? classes.active : undefined}
              >
                Foodies Community
              </Link> */}
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
