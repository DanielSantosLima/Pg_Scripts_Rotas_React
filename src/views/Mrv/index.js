import React from 'react'
import Navbar from '../../components/NavBar'
import MrvBg from '../../images/mrv.svg'

export default function Mrv(props){
    return(<>
        <Navbar title="Parra"/>
        <img src={MrvBg} alt="Mrv"/>
    </>)
}