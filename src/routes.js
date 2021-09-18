import React from 'react'
import { Switch, Route} from 'react-router-dom'
import Navbar from './components/NavBar'
import Home from './views/Home'
import Parra from './views/Parra'
import Projeto from './views/Projeto'
import Pacaembu from './views/Pacaembu'
import Perplan from './views/Perplan'
import Mrv from './views/Mrv'
import ParqueUniversitario from './views/ParqueUniversitario'
import VillaDiCapri from './views/VillaDiCapri'
import VittaResidencial from './views/VittaResidencial'
import QuintaDoeste from './views/QuintaDoeste'
import VivaReal from './views/VivaReal'
import Corretores from './views/Corretores'
import Financiamento from './views/Financiamento'
import ProjetosModelo from './views/ProjetosModelo'
import Investimento from './views/Investimento'
import Casas from './views/Casas'
import Apartamentos from './views/Apartamentos'
import Lazer from './views/Lazer'
import Ediculas from './views/Ediculas'
import Sobrados from './views/Sobrados'


const Routes = () => {
    return(
        <Switch>
            <Route exact path="/" component={() => <Home/>}/>
            <Route exact path="/parra" component={() => <Parra/>}/>
            <Route exact path="/projeto" component={() => <Projeto/>}/>
            <Route exact path="/pacaembu" component={() => <Pacaembu/>}/>
            <Route exact path="/perplan" component={() => <Perplan/>}/>
            <Route exact path="/mrv" component={() => <Mrv/>}/>
            <Route exact path="/pacaembu/parque-universitario" component={() => <ParqueUniversitario/>}/>
            <Route exact path="/pacaembu/villa-di-capri" component={() => <VillaDiCapri/>}/>
            <Route exact path="/pacaembu/vitta-residencial" component={() => <VittaResidencial/>}/>
            <Route exact path="/pacaembu/quinta-doeste" component={() => <QuintaDoeste/>}/>
            <Route exact path="/pacaembu/viva-real" component={() => <VivaReal/>}/>
            <Route exact path="/pacaembu/villa-di-capri/corretores" component={() => <Corretores/>}/>
            <Route exact path="/pacaembu/villa-di-capri/financiamento" component={() => <Financiamento/>}/>
            <Route exact path="/pacaembu/villa-di-capri/projetos-modelo" component={() => <ProjetosModelo/>}/>
            <Route exact path="/pacaembu/villa-di-capri/investimento" component={() => <Investimento/>}/>
            <Route exact path="/pacaembu/villa-di-capri/projetos-modelo/casas" component={() => <Casas/>}/>
            <Route exact path="/pacaembu/villa-di-capri/projetos-modelo/apartamentos" component={() => <Apartamentos/>}/>
            <Route exact path="/pacaembu/villa-di-capri/projetos-modelo/lazer" component={() => <Lazer/>}/>
            <Route exact path="/pacaembu/villa-di-capri/projetos-modelo/ediculas" component={() => <Ediculas/>}/>
            <Route exact path="/pacaembu/villa-di-capri/projetos-modelo/sobrados" component={() => <Sobrados/>}/>
            <Navbar/>
        </Switch>
    )
}

export default Routes