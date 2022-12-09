import Head from 'next/head'
import Image from 'next/image'

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

//components
import Layout from '../components/layouts/layout';
import Teste from '../components/teste';

export default function Home() {

  var [ loading, setLoading ] = useState(false)
  var [ user, setUser ] = useState(false)

  const router = useRouter()

  useEffect(() => {
    if(window.localStorage.user) {
      setUser(window.localStorage.user)
    } else {
      router.push('/login')
    }
  }, [])

  if(!loading) {

    setTimeout(() => {
      setLoading(true)
    }, 1200)

    return (
      <>
        <section>
            <div>
              <h1>Loading</h1>
            </div>
        </section>
  
      </>
    )
  }

  if(loading) {
    return (
      <>
        <Layout>
          <section>
                <div className='grid grid-template-content'>
                <Teste />
                </div>
            </section>
        </Layout>
      </>
    )
  }
}
