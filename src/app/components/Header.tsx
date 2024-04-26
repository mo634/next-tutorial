
"use client"
import Link from 'next/link'
import React from 'react'
import "./style.css"
import { usePathname } from 'next/navigation'
const Header = () => {
    const links = [{
        name: "Home",
        href: "/"
    }
        , {
        name: "About",
        href: "/about"
    },

    {
        name: "Blog",
        href: "/blog"
    }

    ]

    const pathname = usePathname()
    console.log(pathname)
    return (
        <header>
            {
                links.map((link) => {
                    const isActive = link.href === pathname
                    return (
                        <Link className={isActive ? "text-[#0079ff]" : "text-[#000]"} key={link.name} href={link.href}>
                            {link.name}
                        </Link>
                    )
                })
            }
        </header>
    )
}

export default Header