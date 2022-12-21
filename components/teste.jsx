import Head from 'next/head'
import Image from 'next/image'

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

//components
import Layout from '../components/layouts/layout';

export default function Teste() {

  var [ loading, setLoading ] = useState(false)
  var [ user, setUser ] = useState(false)

  const router = useRouter()

  if(!loading) {

    setTimeout(() => {
      setLoading(true)
    }, 1200)

    return (
      <>
        <section>
            <div>
              <h1>Carregando Informações</h1>
            </div>
        </section>
  
      </>
    )
  }

  if(loading) {
    return (
      <>
        <section>
            <div className='grid grid-template-content'>
            content
            </div>
        </section>
      </>
    )
  }
}
