import React, { Component } from'react';

class TodoForm extends Component{
  render(){
    const {currentItem, handleChange, handleSubmit, edit} =this.props
    return(
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="input-field">
          <input type="text"
            required
            id={currentItem.id}
            value={currentItem.text}
            onChange={handleChange} 
          />
          <label htmlFor="name" className="label-name">
            <span className="content-name">Enter Task</span>
          </label>
        </div>
        <button type="submit"
         className={
           edit ?
           "btn-edit btn" : "btn-add btn"
          } >
          {edit ? 'Edit' : 'Add'}
        </button>
      </form>

    )
  }
}

export default TodoForm;