import "./App.css"
import NavBar from './components/NavBar'
import ItemsListcontainer from './components/ItemsListcontainer'

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemsListcontainer greeting="Hola Test"/>
    </div>
  );
}

export default App;
