import React, { Component } from'react';
import TodoItem from './TodoItem';
import checklistImage from '../assets/checklist-icon.png';
class TodoList extends Component{
  render(){
    const {items, clearAll, deleteItem, editItem, completedItem}=this.props
    const listItems = items.length ? (items.map(item => {
      return(
        <TodoItem 
          item={item}
          key={item.id} 
          text={item.text}
          deleteItem= {() => deleteItem(item.id)}
          editItem= {() => editItem(item.id)}
          completedItem= {() => completedItem(item)}
        />
      )
    })
    ) : (
      <div style={{textAlign:"center"}}>
        <img src={checklistImage} alt="checklist icon" height="80px"></img>
        <h1 className="empty-todo-title">Add your first ToDo!</h1>
      </div>
      
    )

    const title = items.length ? (
      <h1 className="task-title">Your Tasks</h1>
    ) : null

    const clearBtn = items.length ? (
      <button className="btn-clear-all" onClick={clearAll}>Clear All</button>
    ) : null

    return(
      <ul className="todo-list-container">
          {title}
          {listItems}
          {clearBtn}
      </ul>
    )
  }
}

export default TodoList; 