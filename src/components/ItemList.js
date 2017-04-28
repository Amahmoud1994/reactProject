import React from 'react'

  function ItemList(props){
    return(
      <ul className="itemList">

        <div>
        {props.items.map((item, i) =>
          <li key={i}>
          <img  className="itemImage" src = {item.images[0].url}/>
          <p>{item.name}</p>
          </li>
        )}
        </div>

      </ul>
    )
  }

export default ItemList;
