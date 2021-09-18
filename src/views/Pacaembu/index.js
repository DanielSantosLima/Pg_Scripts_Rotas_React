import React from 'react'
import NavbarPacaembu from '../../components/NavBarPacaembu'
import PacaembuBg from '../../images/pacaembu.svg'


export default function Pacaembu(props){
    return(<>
        <NavbarPacaembu/>
        <img src={PacaembuBg} alt="Pacaembu"/>
    </>)
}