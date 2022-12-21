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

  if(!loading) {

    // fetch('https://www.vtal.com.br/portal-do-cliente/retirada-de-circuito', {
    //   headers: {
    //     // 'Access-Control-Allow-Origin': '*',
    //     // 'Content-Type': 'text/html; charset=iso-8859-1',
    //     // 'Location': 'http://www.vtal.com.br/portal-do-cliente/retirada-de-circuito/',
    //     // 'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Mobile Safari/537.36',
    //     // 'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    //     // 'DNT': 1,
    //     // 'Upgrade-Insecure-Requests': 1  

    //     headers: {
    //       'Content-Length': 270,
    //       'Content-Security-Policy': 'frame-ancestors https://vtal.com.br https://www.vtal.com.br http://vtal.com.br http://www.vtal.com.br https://www.youtube.com/ https://youtube.com/ https://www.google.com/ https://google.com/ https://www.googletagmanager.com/ https://googletagmanager.com/;',
    //       'Content-Type': 'text/html; charset=iso-8859-1',
    //       'Date': 'Sat, 17 Dec 2022 03:17:57 GMT',
    //       'Location': 'http://www.vtal.com.br/portal-do-cliente/retirada-de-circuito/',
    //       'Server': 'Vtal',
    //       'X-Frame-Options': 'SAMEORIGIN',
    //       'Access-Control-Allow-Origin': '*',
    //       'Location': 'http://www.vtal.com.br/portal-do-cliente/retirada-de-circuito/',
    //       'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Mobile Safari/537.36',
    //       'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    //     }
    //   }
    // }).then((res) => {
    //   console.log(res)
    // }).catch((error) => {
    //   console.log(error)
    // })


    // const api = fetch(`/api/cnpj/${cnpj}`, {

    // })

    setTimeout(() => {
      setLoading(true)
    }, 1200)

    return (
      <>
        <section>
            <div>
              <h1></h1>
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
