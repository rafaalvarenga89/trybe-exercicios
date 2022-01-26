import './App.css';
import React from 'react';

// function App() {
//   return (
//     <div className="App">
//       <section>
//         <section>
//           <h1>Hello,World, Turma 17</h1>
//         </section>
//         <section>
//           <h2>Outro Texto</h2>
//         </section>
//       </section>
//     </div>
//   );
// }

class App extends React.Component {
  render() {
    return (
      <>
        <section className='App'>
          <h1>Hello, World, Turma 17, da classe</h1>
        </section>
        <section>
          <h2>Outro Texto</h2>
        </section>
      </>
    )
  }
}

export default App;
