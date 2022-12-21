import Head from 'next/head'
import Image from 'next/image'

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Sidebar from '../components/shared/sidebard';

export default function Arquivos(props) {

  var [ loading, setLoading ] = useState(false)
  var [ arquivos, setArquivos ] = useState(false)
  var [ user, setUser ] = useState(false)

  const router = useRouter()

  if(!loading) {

    setTimeout(() => {
      setLoading(true)
      setArquivos(true)
    }, 1200)

    return (
      <>
        <Sidebar children={<section>
                <div className='grid grid-template-content'>
                  Carregando
                </div>
            </section>} />
          
      </>
    )
  }

  if(loading && arquivos) {
    return (
      <>
        <Sidebar children={<section>
                <div className='grid grid-template-content'>
                  Arquivos
                </div>
            </section>} />
          
      </>
    )
  }
}
