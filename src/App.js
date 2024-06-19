
import './App.css';

//importig images
import Logo from '../src/assets/logo.png'

function App() {
  return (
    <div className="App">
       <div className='content'>
         <img className='logoimg' src={Logo} alt=''></img>
         <p>fuelflex gives you premium quality peanut butter</p>
         <h4>coming soon</h4>
       </div>
    </div>
  );
}

export default App;
