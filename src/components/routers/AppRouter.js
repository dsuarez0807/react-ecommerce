import React from 'react'
import { BrowserRouter as Router, Route, Switch,} from 'react-router-dom';
import  Home  from '../../pages/Home'
import  About  from '../../pages/About'
import  Products  from '../../pages/Products'
//import ItemDetailContainer from '../ItemDetailContainer'
//import ItemsListcontainer from '../components/ItemsListcontainer'
import NavBar from '../NavBar'

function AppRouter() {
    return (
        <Router>
            <NavBar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/About" component={About}/>
                <Route path="/Products" component={Products}>Products</Route>
                {/* <Route path="/category/:id"><ItemDetailContainer/></Route> */}
                {/* <Route path="/category/:category"><ItemsListcontainer/></Route> */}
            </Switch>
        </Router>
    );
}

export default AppRouter;