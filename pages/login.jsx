import React, { useEffect, useState } from "react"

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

//next
import Head from "next/head"
import Image from "next/image"

import { useRouter } from "next/router"



export default function Sair() {

    const router = useRouter()

    const labelForm = () => {
        document.querySelector('.form-group label').classList.add('label-form')
    }

    var [ cnpj, setCnpj ] = useState('')

    const schema = yup.object({
        cnpj: yup.string().required('O campo CNPJ é obrigatório').max(16, 'CNPJ não pode ser menor que 16 caracteres').min(16, 'CNPJ deve conter no mínimo 16 caracteres'),
    }).required()

    const { register, handleSubmit, formState: {errors}, } = useForm({ resolver: yupResolver(schema) })

    const Submit = async () => {

        window.localStorage.setItem('user', cnpj)
        router.push('/')
        // console.log(data.cnpj)

        // if(!data.cnpj || typeof data.cnpj == undefined || data.cnpj == null || data.cnpj == '') {
            
        // }
    }

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <meta name="description" content="Página de Login - V.Tal" />                
                <link rel="icon" href="/images/vtal-icon.png" />
            </Head>

            <section className="">
                <section className="container d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
                    <form className="border rounded-2 p-4" style={{maxWidth: '320px'}} onSubmit={handleSubmit(Submit)}>
                        <div className="text-center pt-3">
                            <Image src='/images/vtal-icon.png' width={25} height={25}></Image>
                        </div>
                        <div className="text-center py-3 ">
                            <p>Olá, seja bem-vindo!</p>
                            <small style={{fontSize: '11.5px', lineHeight: '11.5px'}}>No Portal Cliente V.tal, você garante agilidade, rapidez e eficiência para gerenciar seus serviços.</small>
                        </div>
                        <div className="form-group">
                            <label className="" htmlFor="cnpj">CNPJ</label>
                            <input {...register("cnpj")} onClick={labelForm} onChange={(e) => setCnpj(e.target.value)} className="form-control" type="tel" name="cnpj" id="cnpj" maxLength={16} />
                        </div>
                        <small style={{color: 'red', display: 'block', padding: '5px 0 0 5px', fontSize: '10px'}}>{errors.cnpj?.message}</small>
                        <button type="submit" className="btn w-100 my-3" style={{backgroundColor: '#454543', color: '#ffffff'}}>Acessar</button>
                    </form>
                </section>
            </section>
        </>
    )
}