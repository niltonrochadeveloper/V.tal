import React, { useEffect, useState } from 'react';

//next
import { useRouter } from "next/navigation";
import Image from 'next/image'
import Link from 'next/link';

//components

export default function Header(props) {

    var router = useRouter()

    var [ loading, setLoading ] = useState(false)
    var [ user, setUser ] = useState(false)
    

    useEffect(() => {
        if(window.localStorage.user) {
          setUser(window.localStorage.user)
        } else {
          router.push('/login')
        }
      }, [])
    

    if(!user) {
        return (
            <>

            </>
        )

    } else {
        return (
            <>      
              <section>
                  <div className='grid grid-template-areas'>
                  <div className="logo text-center p-3">
                        <Image src="/images/vtal-icon.png" width={25} height={25} alt="ícone vtal"></Image>
                      </div>
                    <div className="sidenav">                
                      <div className='text-left p-3'>
                        <small>Olá, <b>nome</b>, <br /> seja bem-vindo!</small>
                      </div>
                      <div className='py-3 menu-list'>
                        <ul>
                          <Link href={'/'}><li className='px-3'>Home</li></Link>
                          <Link href={'/circuito-de-dados'}><li className='px-3'>Circuito de Dados</li></Link>
                          <Link href={'/arquivos'}><li className='px-3'>Arquivos para Solicitações</li></Link>
                          <Link href={'/solicitacao-de-fatura'}><li className='px-3'>Solicitaçao de Faturas</li></Link>
                          <Link href={'/sac'}><li className='px-3'>Sac</li></Link>
                        </ul>
                      </div>
                    </div>              
                    <div className="nav d-flex justify-content-between align-items-center">
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