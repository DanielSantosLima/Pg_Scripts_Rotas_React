import React from 'react'
import Navbar from '../../components/NavBar'
import ProjetoBg from '../../images/projeto.svg'

export default function Projeto(props){
    return(<>
        <Navbar title="Parra"/>
        <img src={ProjetoBg} alt="Projeto"></img>
    </>)
}