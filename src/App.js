import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RiHospitalFill} from "react-icons/ri";
import Home from './pages/Home';
function App() {
  return (
    <div>
      <h1 className="text-danger "> APPOINTMENT</h1>

<RiHospitalFill className="text-danger fs-10"/>
   <Home/>
    </div>
  )
}

export default App;
