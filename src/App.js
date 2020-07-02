import React from 'react';
import logo from './logo.svg';
import './App.css';
import Reservation from './Reservation'
import EssayForm from "./EssayForm";


function App() {
    return (
        <div>
            <header className="App-header">
                <p>
                    Here's where you can put the number of people attending the event!
                </p>
            </header>
            <header className="App-reservation"><Reservation/></header>

            <header className="App-header">
                <p>Here's where you can upload a photo! </p>
            </header>

            <header className="App-text">
                <p>Please only upload a small icon as that's all we can handle atm. :)</p>
            </header>

            <header className="App-form">
                <p>
                    <EssayForm />
                </p>
            </header>

        </div>
    );
}

//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
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

export default App;
