import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router';

export default function Home() {

  const router = useRouter()

  useEffect(() => {
    router.push('/login')
  }, [])

  var [ loading, setLoading ] = useState(false)

  const { register, handleSubmit, watch, formState: {errors} } = useForm()

  const onSubmit = (data) => {
    
  }

  // console.log(watch("name"));

  if(!loading) {
    return (
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/vtal-icon.png" />
        </Head>
  
        <section>
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <input  defaultValue="Nilton" {...register("name")} onChange={(e) => setTexto(e.target.value)} type="text" />
                </div>
                {errors.nameRequired && <span>O campo nome é obrigatório</span>}
                <div>
                  <button>Enviar</button>
                </div>
                <p>texto</p>
                <p>enviado</p>
              </form>
            </div>
        </section>
  
      </div>
    )
  }

  if(loading) {
    return (
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <section>
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <input  defaultValue="Nilton" {...register("name")} onChange={(e) => setTexto(e.target.value)} type="text" />
                </div>
                {errors.nameRequired && <span>This field is required</span>}
                <div>
                  <button>Enviar</button>
                </div>
                <p>texto</p>
                <p>enviado</p>
              </form>
            </div>
        </section>
  
      </div>
    )
  }
}
