import React from "react"
import NavBar from './components/NavBar'
import {ItemsListcontainer} from './components/ItemsListcontainer'
import {CartWidget} from './components/CartWidget'

const App = props => {

  return <>

  <NavBar>
  <CartWidget/>
  </NavBar>
  <ItemsListcontainer/>
 
  </>
}

export default App;
