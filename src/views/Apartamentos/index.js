import React from 'react'
import NavBarProjetosModelo from '../../components/NavBarProjetosModelo'
import ApartamentosBg from '../../images/apartamento.svg'

export default function Apartamentos(props) {
    return (<>
        <NavBarProjetosModelo />
        <img src={ApartamentosBg} alt="Apartamentos"></img>
    </>)
}