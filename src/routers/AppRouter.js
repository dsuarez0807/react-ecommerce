import React from 'react'
import { BrowserRouter, Router, Switch} from 'react-router-dom'
import  Home  from '../pages/Home'
import  About  from '../pages/About'
import  Products  from '../pages/Products'
import ItemDetailContainer from '../components/ItemDetailContainer'
import ItemsListcontainer from '../components/ItemDetailContainer'
import NavBar from '../components/NavBar'


function AppRouter() {
    return (
        <BrowserRouter>
            <NavBar/>
            <Switch>
                <Router exact path="/" component={Home}></Router>
                <Router path="/About" component={About}></Router>
                <Router path="/Products" component={Products}>Products</Router>
                <Router path="/category/:id"><ItemDetailContainer/></Router>
                <Router path="/category/:category"><ItemsListcontainer/></Router>
            </Switch>
        </BrowserRouter>
    );
}

export default AppRouter;