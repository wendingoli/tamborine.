// import React from 'react';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from 'react'
import Navigation from './components/navigation'

class App extends React.Component {
  render() {
    return (
      <div>
      <div>
        <h1>tamborine.</h1>
      </div>
      <div>
        <Navigation></Navigation>\
      </div>
      </div>
    )
  }
}
export default App
