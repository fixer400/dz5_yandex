//Компонент для отображения списка элементов

import '../Styles/List.css'
function List(props){

  return(
    <ul className={props.alignType === 'horizontal'?'List-horizontal':'List'}>
      {props.children}
    </ul>
  )
}

export default List