"use client";
import { classNames } from "@/utils";
import { IconButton, Link } from "@radix-ui/themes";
import type { PropsWithChildren } from "react";
import { useState } from "react";
import style from './style.module.scss';
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

const additionalLinks = [
    {
        href: "/beer",
        text: "Beer",
    }
]

export default function MobileMenu(props: PropsWithChildren<{ links: { href: string; text: string }[] }>) {

    const [menuOpen, setMenuOpen] = useState(false);

    return <>
        <IconButton onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-white" aria-label="open menu">
            <HamburgerMenuIcon width={20} height={20} />
        </IconButton>


        {menuOpen && <div className={classNames(style.MobileMenu, "absolute top-16 left-0 flex flex-col w-full bg-[var(--gray-4)]")}>
            <div className="flex flex-col items-left justify-center gap-3 py-3 px-10 text-lg">
                {props.links.map((link, index) => (
                    <Link key={index} href={link.href}>{link.text}</Link>
                ))}
                {additionalLinks.map((link, index) => (
                    <Link key={index} href={link.href}>{link.text}</Link>
                ))}
            </div>
        </div>}
    </>
}
