import React from 'react';
import './navbar.css'
import { useHistory } from 'react-router';

export default function NavBarVillaDiCapri(props) {

    const history = useHistory()

    return (
        <>
            <header>
                <a href="/" className="logo">Netão Imobiliária</a>
                <ul>
                    <li><button onClick={() => { history.goBack() }}>Voltar</button></li>
                    <li><button onClick={() => { history.push('/') }}>Início</button></li>
                    <li><button onClick={() => { history.push('/pacaembu/villa-di-capri/corretores') }}>Corretores</button></li>
                    <li><button onClick={() => { history.push('/pacaembu/villa-di-capri/financiamento') }}>Financiamento</button></li>
                    <li><button onClick={() => { history.push('/pacaembu/villa-di-capri/projetos-modelo') }}>Projetos Modelo</button></li>
                    <li><button onClick={() => { history.push('/pacaembu/villa-di-capri/investimento') }}>Investimento</button></li>
                </ul>
            </header>
        </>
    );
}
