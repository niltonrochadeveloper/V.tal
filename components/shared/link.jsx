import React from "react";
import NextLink from "next/link"

export default function Linkar(href, children, ...props) {
    console.log(props)
    return (
        <NextLink href={href} passHref>
            {children}
        </NextLink>
    )
}