import './App.css';
import BlockComponent from './Components/BlockComponent';
import GermanyMap from './Components/GermanyMap';
import News from './Components/News';
import SearchComponent from './Components/SearchComponent';
import Stream from './Components/Stream';
import Tv from './Components/Tv';
import Visited from './Components/Visited';
import Weather from './Components/Weather';

function App() {
  return (
    <div className="App">

      <div className='App__header'>
        <BlockComponent title = {"Сейчас в СМИ"}>
          <News/>
        </BlockComponent>
        <BlockComponent title = {"Работа над ошибками"}/>
      </div>
      
      <SearchComponent/>

      <div className='App__footer'>
        <BlockComponent title = {"Погода"}>
          <Weather/>
        </BlockComponent>

        <BlockComponent title = {"Посещаемое"}>
          <Visited/>
        </BlockComponent>
        
        <BlockComponent title = {"Карта Германии"}>
          <GermanyMap/>
        </BlockComponent>

        <BlockComponent title = {"Телепрограмма"}>
          <Tv/>
        </BlockComponent>

        <BlockComponent title = {"Эфир"}>
          <Stream/>
        </BlockComponent>
      </div>
      
    </div>
  );
}

export default App;
