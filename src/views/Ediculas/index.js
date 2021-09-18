import React from 'react'
import NavBarProjetosModelo from '../../components/NavBarProjetosModelo'
import EdiculasBg from '../../images/edicula.svg'

export default function Ediculas(props) {
    return (<>
        <NavBarProjetosModelo />
        <img src={EdiculasBg} alt="Edícula"></img>
    </>)
}