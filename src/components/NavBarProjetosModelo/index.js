import React from 'react';
import './navbar.css'
import { useHistory } from 'react-router';

export default function NavBarProjetosModelo(props) {

    const history = useHistory()

    return (
        <>
            <header>
                <a href="/" className="logo">Netão Imobiliária</a>
                <ul>
                    <li><button onClick={() => { history.goBack() }}>Voltar</button></li>
                    <li><button onClick={() => { history.push('/') }}>Início</button></li>
                    <li><button onClick={() => { history.push('/pacaembu/villa-di-capri/projetos-modelo/casas') }}>Casas</button></li>
                    <li><button onClick={() => { history.push('/pacaembu/villa-di-capri/projetos-modelo/apartamentos') }}>Apartamentos</button></li>
                    <li><button onClick={() => { history.push('/pacaembu/villa-di-capri/projetos-modelo/lazer') }}>Lazer</button></li>
                    <li><button onClick={() => { history.push('/pacaembu/villa-di-capri/projetos-modelo/ediculas') }}>Edículas</button></li>
                    <li><button onClick={() => { history.push('/pacaembu/villa-di-capri/projetos-modelo/sobrados') }}>Sobrados</button></li>
                </ul>
            </header>
        </>
    );
}
