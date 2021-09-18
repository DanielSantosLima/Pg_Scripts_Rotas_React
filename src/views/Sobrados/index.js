import React from 'react'
import NavBarProjetosModelo from '../../components/NavBarProjetosModelo'
import SobradosBg from '../../images/sobrados.svg'

export default function Sobrados(props) {
    return (<>
        <NavBarProjetosModelo />
        <img src={SobradosBg} alt="Sobrado"></img>
    </>)
}