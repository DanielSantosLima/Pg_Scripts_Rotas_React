import React from 'react'
import NavbarPacaembu from '../../components/NavBarPacaembu'
import VivaRealBg from '../../images/viva-real.svg'

export default function VivaReal(props) {
    return (<>
        <NavbarPacaembu />
        <img src={VivaRealBg} alt="Viva Real"></img>
    </>)
}