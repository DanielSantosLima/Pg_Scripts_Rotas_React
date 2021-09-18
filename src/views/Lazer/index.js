import React from 'react'
import NavBarProjetosModelo from '../../components/NavBarProjetosModelo'
import LazerBg from '../../images/lazer.svg'

export default function Lazer(props) {
    return (<>
        <NavBarProjetosModelo />
        <img src={LazerBg} alt="Lazer"></img>
    </>)
}