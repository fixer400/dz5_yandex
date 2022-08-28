//Компонент для отрисовки новостей

import '../Styles/News.css'
import List from "./List"

function News(){

  const data = [
    {
      "icon": 0,
      "text": "hac habitasse platea dictumst quisque",
      "link": ""
    },
    {
      "icon": 1,
      "text": "eleifend mi in nulla posuere",
      "link": ""
    },
    {
      "icon": 2,
      "text": "eleifend mi in nulla posuere",
      "link": ""
    },
    {
      "icon": 3,
      "text": "hac habitasse platea dictumst quisque",
      "link": ""
    }
  ]

  const NewsElement = (props) =>{
    return(
      <div className="NewsElement">
        <img src={props.icon}></img>
        <a href={props.link}>{props.text}</a>
      </div>
    )
  }
  
  return(
    <List>
       {data.map((e) => <li key={e.icon}><NewsElement icon = {e.icon} text = {e.text} link = {e.link}/></li>)}
    </List>
  )
}

export default News