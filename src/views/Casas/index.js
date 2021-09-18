import React from 'react'
import NavBarProjetosModelo from '../../components/NavBarProjetosModelo'
import CasasBg from '../../images/casas.svg'

export default function Casas(props) {
    return (<>
        <NavBarProjetosModelo />
        <img src={CasasBg} alt="Casa"></img>
    </>)
}