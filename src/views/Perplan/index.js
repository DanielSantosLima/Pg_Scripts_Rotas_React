import React from 'react'
import Navbar from '../../components/NavBar'
import PerplanBg from '../../images/perplan.svg'

export default function Perplan(props){
    return(<>
       <Navbar title="Parra"/>
        <img src={PerplanBg} alt="Perplan"></img>
    </>)
}