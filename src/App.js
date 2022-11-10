import './App.css';
import { Link } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      {/* <header className="App-header"> */}
        Main Page<br/><br/>
      {/* </header> */}
      <Link to='/PlantDetailsForm'>PlantDetailsForm</Link>
    </div>
  );
}

export default App;
