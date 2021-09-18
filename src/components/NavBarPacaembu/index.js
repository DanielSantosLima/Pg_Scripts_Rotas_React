import React from 'react';
import './navbar.css'
import { useHistory } from 'react-router';

export default function NavbarPacaembu(props) {

    const history = useHistory()

    return (
        <>
            <header>
                <a href="/" className="logo">Netão Imobiliária</a>
                <ul>
                    <li><button onClick={() => { history.goBack() }}>Voltar</button></li>
                    <li><button onClick={() => { history.push('/') }}>Início</button></li>
                    <li><button onClick={() => { history.push('/pacaembu/parque-universitario') }}>Parque Universitário</button></li>
                    <li><button onClick={() => { history.push('/pacaembu/villa-di-capri') }}>Villa Di Capri</button></li>
                    <li><button onClick={() => { history.push('/pacaembu/vitta-residencial') }}>Vitta Residencial</button></li>
                    <li><button onClick={() => { history.push('/pacaembu/quinta-doeste') }}>Quinta D'Oeste</button></li>
                    <li><button onClick={() => { history.push('/pacaembu/viva-real') }}>Viva Real</button></li>
                </ul>
            </header>
        </>
    );
}
