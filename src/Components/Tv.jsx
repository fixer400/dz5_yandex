//Компонент для отображения тв каналов и программ, которые идут на данный момент

import '../Styles/Tv.css'
import List from "./List"


function Tv(){

  const data = [
    {time:'TTTT', programm:"ТНТ.BEST", channel:"ТНТ"},
    {time:'TTTT', programm:"Джинглики", channel:"Карусель"},
    {time:'TTTT', programm:"Наедине со всеми", channel:"Первый"},
  ]

  const TvElement = (props) =>{
    return(
      <div className="TvElement">
          <span>{props.time}</span>
          <span>{props.programm}</span>
          <span>{props.channel}</span>
      </div>
    )
  }


  return(
    <List>
      {data.map((e) =>  <li key={e.programm}><TvElement time = {e.time} programm = {e.programm} channel = {e.channel}/></li>)}
    </List>
  )
}

export default Tv