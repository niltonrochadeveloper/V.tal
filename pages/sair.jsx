import React, { useEffect } from "react"

import { useRouter } from "next/router"


export default function Sair() {

    const router = useRouter()

    useEffect(() => {
        window.localStorage.clear()
        router.replace('/')
    }, [router])

    return (
        <>
        </>
    )
}