
import './App.css';

import Itemserie from './components/Itemserie';
import data from './data';

function App() {
  console.table(data);
  return (
    <>
      <h1> 🍿Continue a assistir Séries🍿 </h1>
      <article>
        
      <Itemserie data={data} />

      </article>
    </>
    );
}

export default App;
