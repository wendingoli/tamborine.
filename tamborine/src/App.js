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
import React from "react";
import Navigation from "./components/navigation";

class App extends React.Component {
  render() {
    return (
      <div>
        <div id="header">
          <h1>tamborine.</h1>
          <h4 id="subheader">find out what works best for you</h4>
        </div>
        <div class="container">
          {/* NAVBAR */}
          <div class="tambo-nav">
            <Navigation />
          </div>
          {/* FORM */}
          <div class="tambo-form">
            <h4>add item.</h4>
            <form action="/action_page.php" method="get">
              <input
                type="text"
                name="productname"
                placeholder="product name"
              />
              <br />
              <input type="text" name="company" placeholder="company" />
              <br />
              <input
                type="text"
                name="ingredients"
                placeholder="ingredients, separated by commas"
              />
              <br />
              <input type="submit" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
