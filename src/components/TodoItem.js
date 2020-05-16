import React, { Component } from'react';
import { Spring } from 'react-spring/renderprops';

class TodoItem extends Component{
  // toggleItem =()=>{
  //   this.props.completedItem
  // }

  render(){
    const {item, text, deleteItem, editItem, completedItem} = this.props
    return(
      <Spring
        from={{ opacity: 0, marginTop: -50 }}
        to={{ opacity: 1, marginTop: 0 }}>
        {props => (
          <div style={props}>
            <li className="todo-item">
              <p onClick={completedItem}
                className={"todo-item-text" + (item.completed ? " completed-item" : "")}>{text}</p>
              <div className="todo-icon">
                {!item.completed ? (
                  <span className="edit-icon icon" onClick={editItem}>
                    <i className="fas fa-pen" />
                  </span>
                ) : null}
                
                <span className="delete-icon icon" onClick={deleteItem}>
                  <i className="fas fa-trash" />
                </span>
              </div>
            </li> 
          </div>
        )}
      </Spring>
    )
  }
}

export default TodoItem;