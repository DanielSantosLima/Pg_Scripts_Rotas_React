import React from 'react'
import NavBarProjetosModelo from '../../components/NavBarProjetosModelo'
import ProjetosModeloBg from '../../images/projetos-modelo.svg'

export default function ProjetosModelo(props) {
    return (<>
        <NavBarProjetosModelo />
        <img src={ProjetosModeloBg} alt="Projetos Modelo"></img>
    </>)
}