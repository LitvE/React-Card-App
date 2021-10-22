import './App.css';
import UserInfo from './Compomemts/UserInfo'
import Photo from './Compomemts/Photo';
import Tagline from './Compomemts/Tagline';
import AddButton from './Compomemts/AddButton';

function App() {
  
  return (
    <div class="userCard">
        <Photo />
        <UserInfo name={'Emma'} surname={'Watson'} address={'@EmWatson'}/>
        <AddButton/>
        <Tagline/>
    </div>
  );
}

export default App;
