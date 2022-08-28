//Компонент для отображения поискового блока

import '../Styles/Search.css'
import List from "./List"

function SearchComponent (){

  const titles = [
    'Видео',
    'Картинки',
    'Новости',
    'Карты',
    'Маркет',
    'Переводчик',
    'Эфир'
  ]


  return(
    <div className="Search">
      <List className = "Search__list" alignType = 'horizontal'>
        {titles.map((e) => <li key={e}><h2>{e}</h2></li>)}
      </List>
      <div className="Search__action">
        <input className="Search__input"></input>
        <button>Найти</button>
      </div>
    </div>
  )
}

export default SearchComponent