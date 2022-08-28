//Блок с оглавлением и рамкой

import '../Styles/BlockComponent.css'
function BlockComponent(props) {
  return (
    <div className="BlockComponent">
      <h1 className="BlockComponent__title">{props.title}</h1>
      {props.children}
    </div>
  );
}

export default BlockComponent;
