import React from 'react'
import NavbarPacaembu from '../../components/NavBarPacaembu'
import VittaResidencialBg from '../../images/vitta-residencial.svg'

export default function VittaResidencial(props) {
    return (<>
        <NavbarPacaembu />
        <img src={VittaResidencialBg} alt="Vitta Residencial"/>
    </>)
}