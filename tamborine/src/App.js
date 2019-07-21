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
import Items from "./components/items";
import AddItem from "./components/additem";

class App extends React.Component {
  render() {
    return (
      <div class="content">
        {/* <h1 id="header">tamborine.</h1>
        <h4 id="subheader">find out what works best for you</h4> */}
        <div class="container">
          {/* NAVBAR */}
          {/* <div class="tambo-nav">
            <Navigation />
          </div> */}

          {/* FORM 
            get values from form using:
            var nameValue = document.getElementById("productName").value;
          */}
          {/* <div class="tambo-form">
            <h4>add item.</h4>
            <AddItem />
          </div> */}
        </div>

        {/* <h4>my items.</h4>
        <br />
        <Items /> */}
      </div>
    );
  }
}
export default App;
