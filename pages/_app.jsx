// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect, useState } from 'react'

import { useRouter } from 'next/navigation'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  var router = useRouter()

  useEffect(() => {
    if(window.localStorage.user) {
      router.push('/')

    } else {
      router.push('/login')
    }
  }, [])
  return (
    <Component {...pageProps} />
  )

}

export default MyApp
