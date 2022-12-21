



import Head from 'next/head'
import Image from 'next/image'

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Layout(props) {

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
        <Head>
                <title>Home - V.Tal</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <meta name="description" content="Home - V.Tal" />                
                <link rel="icon" href="/images/vtal-icon.png" />
        </Head>
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
        <Head>
                <title>Home - V.Tal</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <meta name="description" content="Home - V.Tal" />                
                <link rel="icon" href="/images/vtal-icon.png" />
        </Head>
  
        <section>
            <div className='grid grid-template-areas'>
            <div className="logo text-center p-3">
                  <Image src="/images/vtal-icon.png" width={25} height={25} alt="ícone vtal"></Image>
                </div>
              <div className="sidenav">                
                <div className='text-left p-3'>
                  <small>Olá, <b>nome</b>, <br /> seja bem-vindo!</small>
                </div>
                <div className=' py-3 menu-list'>
                  <ul>
                    <li className='px-3'>Home</li>
                    <li className='px-3'>Item 2</li>
                    <li className='px-3'>Item 3</li>
                    <li className='px-3'>Item 4</li>           
                  </ul>
                </div>
              </div>              
              <div className="nav border d-flex justify-content-between align-items-center">
                <div>
                  recolher
                </div>
                <div className='px-3'>
                  <Link href={'/sair'}>Sair</Link>
                </div>
              </div>              
              <div className="content">
                {props.children}
              </div>
            </div>
        </section>
  
      </>
    )
  }
}
