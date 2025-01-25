

// ye funtion based component hh ya functional component bhi bola ja sakhta h or kafi simple h 

import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
function App() {
  let todos = [
    {
      sno:1,
      task:"Go to saloon",
      desc:"Go to saloon to get a fresh haircut"
    },
    {
      sno:2,
      task:"Go to mall",
      desc:"Go to mall to get a fresh clothes"
    },{
      sno:3,
      task:"Go to market",
      desc:"Go to saloon to get a fresh vegetables"
    },
    
]
  return (
    <>

      <Header title="My Todos List" searchBar={true} />
      <Todos todos={todos}/>
      <Footer />

    </>
  );
}

export default App;
