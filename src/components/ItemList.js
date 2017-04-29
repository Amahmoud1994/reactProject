import React from 'react'
import {Link} from 'react-router-dom'

  function ItemList(props){
    return(
      <ul className="itemList">

        <div>
        {props.items.map((item, i) =>
          <li key={i}>
          <Link to={`/artist/${item.id}`}>
          <img  className="itemImage" src = {item.images[0].url}/>
          <p>{item.name}</p>
          </Link>

          </li>
        )}
        </div>

      </ul>
    )
  }

export default ItemList;
