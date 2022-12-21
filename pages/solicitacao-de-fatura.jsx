import Head from 'next/head'
import Image from 'next/image'

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Sidebar from '../components/shared/sidebard';

export default function SolicitacaoDeFatura(props) {

  var [ loading, setLoading ] = useState(false)
  var [ solicitacaoDeFatura, setSolicitacaoDeFatura ] = useState(false)
  var [ user, setUser ] = useState(false)

  const router = useRouter()

  if(!loading) {

    setTimeout(() => {
      setLoading(true)
      setSolicitacaoDeFatura(true)
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

  if(loading && solicitacaoDeFatura) {
    return (
      <>
        <Sidebar children={<section>
                <div className='grid grid-template-content'>
                  Solicitação de Fatura
                </div>
            </section>} />
          
      </>
    )
  }
}
