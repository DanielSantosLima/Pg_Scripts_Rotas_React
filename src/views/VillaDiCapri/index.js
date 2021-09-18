import React from 'react'
import NavBarVillaDiCapri from '../../components/NavBarVillaDiCapri'
import VillaDiCapriBg from '../../images/villa-di-capri.svg'

export default function VillaDiCapri(props) {
    return (<>
        <NavBarVillaDiCapri />
        <img src={VillaDiCapriBg} alt="Villa Di Capri"></img>
    </>)
}