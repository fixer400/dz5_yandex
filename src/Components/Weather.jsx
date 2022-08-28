//Компонент для отображения погоды
import '../Styles/Weather.css'
import List from "./List"


function Weather(){
  return(
    <div className="Weather">
      <img></img>
      <List>
        <li>Утром +17</li>
        <li>Вечером +20</li>
      </List>
    </div>
  )
}

export default Weather