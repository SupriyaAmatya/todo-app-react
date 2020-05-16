import React, { Component } from 'react';
import todoLogo from './todoLogo.svg';
import './styles/App.css';

import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import uuid from 'uuid';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      items:[{id: uuid(), text:"Testing", completed:false}],
      currentItem:{
        id: uuid(),
        text:'',
        completed: false
      }, 
      edit: false
    }
    
  }

  handleChange = (e) =>{
    this.setState({
      currentItem:{
        id: e.target.id,
        text: e.target.value,
        completed: false
      }
    })
  }

  handleSubmit = async (e) =>{
    e.preventDefault();

    const newItem = this.state.currentItem;
    // console.log(newItem);
    if(newItem.text !==""){
      const updatedItems = [...this.state.items, newItem];
      await this.setState({
        items: updatedItems,
        currentItem:{
          id:uuid(),
          text:'',
          completed: false
        },
        edit: false
      })

      localStorage.setItem('todos', JSON.stringify(this.state.items));
      console.log(localStorage.getItem('todos'));
    }
  }
 
  clearAll= async () =>{
    await this.setState({
      items:[]
    });
    localStorage.setItem('todos', JSON.stringify(this.state.items));
  }

  deleteItem = async (id) =>{
    const filteredItems = this.state.items.filter(item=>
      item.id !==id);
    await this.setState({
      items:filteredItems
    });
    localStorage.setItem('todos', JSON.stringify(this.state.items));
  }

  editItem = async (id) =>{
    const filteredItems = this.state.items.filter(item=>
      item.id !==id);
    const selectedItem = this.state.items.find(item => item.id === id);
    console.log(selectedItem);

    await this.setState({
      items:filteredItems,
      currentItem:{
        id: id,
        text: selectedItem.text,
        completed: false
      },
      edit: true
    });
    if(!this.state.edit)
      localStorage.setItem('todos', JSON.stringify(this.state.items));
  }

  completedItem = async (todo) =>{
    const newItems=this.state.items.map(item =>{
      if(todo.id === item.id){
        return{
          id: todo.id,
          text: todo.text,
          completed: !todo.completed
        }
      }else return item
    })
    
    await this.setState({
      items: newItems
    })
    localStorage.setItem('todos', JSON.stringify(this.state.items));
    // console.log(newItems);
  }

  componentDidMount = () =>{
    const todos = localStorage.getItem('todos');
    if(todos){
      const savedTodos = JSON.parse(todos);
      this.setState({
        items: savedTodos
      })
    }else{
      localStorage.setItem('todos', JSON.stringify(this.state.items));
      console.log('NO todos');
    }
  }


  render(){
    return (
      <div className="App">
        <Header todoLogo={todoLogo}/>
        <section className="container">
          <TodoForm
            currentItem={this.state.currentItem}
            handleChange={this.handleChange} 
            handleSubmit={this.handleSubmit}
            edit={this.state.edit} 
          />
          <TodoList 
            items={this.state.items} 
            clearAll={this.clearAll} 
            deleteItem={this.deleteItem}
            editItem={this.editItem}
            completedItem={this.completedItem}
          />
        </section>
      </div>
    );
  }
}

export default App;
