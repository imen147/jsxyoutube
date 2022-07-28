
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigt from './components/Navigt';
import Mainvideo from './components/Vid';
import Suggestion,{Comments,Footery} from './components/suggestion';

function App() {
  return (
    <div className="App"> 
      <Navigt/>
      <div className='row'>
        <div className='col-8'></div>
      <Mainvideo/>
      <div className='col-4'> <Suggestion/></div>
      <Comments/>
      <footery/>

      
    </div>
  );
}

export default App ;
