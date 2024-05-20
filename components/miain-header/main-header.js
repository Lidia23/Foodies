import Link from "next/link";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css"
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import NavBar from "./nav-link";

export default function MainHeader(){
    return(
        <>
        <MainHeaderBackground />
        <header className={classes.header}>
            <Link href="/" className={classes.logo}>
                <Image src={logoImg} alt="A plate with food on it" />
                NextLevel Food
            </Link>
            <NavBar />
        </header>
        </>
    )
}