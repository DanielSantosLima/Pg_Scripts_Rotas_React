import React from 'react';
import './navbar.css'
import { useHistory } from 'react-router';

export default function Navbar(props) {

    const history = useHistory()

    return (
        <>
            <header>
                <a href="/" className="logo">Netão Imobiliária</a>
                <ul>
                    <li><button onClick={() => { history.goBack() }}>Voltar</button></li>
                    <li><button onClick={() => { history.push('/') }}>Início</button></li>
                    <li><button onClick={() => { history.push('/parra') }}>Parra</button></li>
                    <li><button onClick={() => { history.push('/projeto') }}>Projeto</button></li>
                    <li><button onClick={() => { history.push('/pacaembu') }}>Pacaembu</button></li>
                    <li><button onClick={() => { history.push('/perplan') }}>Perplan</button></li>
                    <li><button onClick={() => { history.push('/mrv') }}>MRV</button></li>
                </ul>
            </header>
        </>
    );
}
