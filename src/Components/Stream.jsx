//Компонент для отображения текущих стримов

import List from "./List"


function Stream(){

  const data = [
    {name:'Управление',channel:'Успех'},
    {name:'Ночь',channel:'earthTv'},
    {name:'TEXT',channel:'Совершенно Секретно'}
  ]

  const StreamElement = (props) =>{
    return(<div className="StreamElement">
      <img></img>
      <b>{props.name}</b>
      <span>{props.channel}</span>
    </div>)
  }

  return(
    <List>
      {data.map((e) => <li key = {e.name}><StreamElement name = {e.name} channel = {e.channel}/></li>)}
    </List>
  )
}

export default Stream