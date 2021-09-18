import React from 'react'
import NavbarPacaembu from '../../components/NavBarPacaembu'
import ParqueUniversitarioBg from '../../images/parque-universitario.svg'

export default function ParqueUniversitario(props){
    return(<>
        <NavbarPacaembu/>
        <img src={ParqueUniversitarioBg} alt="Parque Universitário"/>
    </>)
}