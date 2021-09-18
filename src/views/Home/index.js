import React from 'react'
import Navbar from '../../components/NavBar'
import HomeBg from '../../images/home.svg'

export default function Home(props){
    return(<>
        <Navbar title="Home"/>
        <img src={HomeBg} alt="Home"/>
    </>)
}