import Head from 'next/head'
import Image from 'next/image'

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Sidebar from '../components/shared/sidebard';

export default function CircuitoDeDados(props) {

  var [ loading, setLoading ] = useState(false)
  var [ circuitoDeDados, setCircuitoDeDados ] = useState(false)
  var [ user, setUser ] = useState(false)

  const router = useRouter()

  if(!loading) {

    setTimeout(() => {
      setLoading(true)
      setCircuitoDeDados(true)
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

  if(loading && circuitoDeDados) {
    return (
      <>
        <Sidebar children={<section>
                <div className='grid grid-template-content'>
                  Circuito de Dados
                </div>
            </section>} />
          
      </>
    )
  }
}
