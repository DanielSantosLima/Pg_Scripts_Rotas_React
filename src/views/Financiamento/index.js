import React from 'react'
import NavBarVillaDiCapri from '../../components/NavBarVillaDiCapri'
import FinanciamentoBg from '../../images/financiamento.svg'

export default function Financiamento(props) {
    return (<>
        <NavBarVillaDiCapri />
        <img src={FinanciamentoBg} alt="Financiamento"></img>
    </>)
}