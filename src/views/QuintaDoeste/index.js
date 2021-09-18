import React from 'react'
import NavbarPacaembu from '../../components/NavBarPacaembu'
import QuintaDoesteBg from '../../images/quinta-doeste.svg'

export default function QuintaDoeste(props) {
    return (<>
        <NavbarPacaembu />
        <img src={QuintaDoesteBg} alt="Quinta D'Oeste"/>
    </>)
}