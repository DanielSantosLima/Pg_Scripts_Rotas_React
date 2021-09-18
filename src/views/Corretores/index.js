import React from 'react'
import NavBarVillaDiCapri from '../../components/NavBarVillaDiCapri'
import CorretoresBg from '../../images/corretores.svg'

export default function Corretores(props) {
    return (<>
        <NavBarVillaDiCapri />
        <img src={CorretoresBg} alt="Corretores"></img>
    </>)
}