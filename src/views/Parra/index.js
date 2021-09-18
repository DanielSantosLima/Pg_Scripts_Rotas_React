import React from 'react'
import Navbar from '../../components/NavBar'
import './parra.css'
import ParraBg from '../../images/parra.svg'

export default function Parra(props){
    
    return(<>
        <Navbar title="Parra"/>
        <img src={ParraBg} alt="Parra"></img>
    </>)
}