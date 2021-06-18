import React from "react"
import NavBar from './components/NavBar'
import {CartWidget} from './components/CartWidget'
import {ItemDetailContainer} from './components/ItemDetailContainer'

const App = props => {

  return <>

  <NavBar>
  <CartWidget/>
  </NavBar>
  <ItemDetailContainer/>
 
  </>
}

export default App;
