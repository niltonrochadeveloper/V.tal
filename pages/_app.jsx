// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect, useState } from 'react'

import { useRouter } from 'next/navigation'

import '../styles/globals.css'
import Layout from '../components/layouts/layout'

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
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )

}

export default MyApp
