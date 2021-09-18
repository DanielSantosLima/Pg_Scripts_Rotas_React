import React from 'react'
import NavBarVillaDiCapri from '../../components/NavBarVillaDiCapri'
import InvestimentoBg from '../../images/investimento.svg'

export default function Investimento(props) {
    return (<>
        <NavBarVillaDiCapri />
        <img src={InvestimentoBg} alt="Lazer"></img>
    </>)
}