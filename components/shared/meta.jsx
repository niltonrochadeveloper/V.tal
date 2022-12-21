import Head from 'next/head'

import { useRouter } from 'next/router'
import React, { useEffec, useState } from 'react'

export default function Meta({title, keywords, description}) {

    const router = useRouter()

    var [ canonical ] = useState(router.asPath)

    return (
        <Head>
            <meta charSet='UTF-8' />
            <meta httpEquiv='X-UA-Compatible' content='IE=edge' />            
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            <title>Home - V.Tal</title>
            <link rel='canonical' href={`${router.basePath}${canonical}`} />
            <link rel="icon" href="./images/vtal-icon.png" />
            <meta name="description" content="Home - V.Tal" /> 

            <meta property='og:type' content='website' />   
            <meta property='og:url' content={`${router.basePath}`} />   
            <meta property='og:title' content='V.tal o seu portal' />   
            <meta property='og:description' content='Portal V.tal' />   
            {/* <meta property='og:image' content='/images/thumb.png' /> */}
            
        </Head>
    )
}