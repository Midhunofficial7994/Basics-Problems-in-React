import React, { Component } from 'react'
import "./Todo.css"

export default class Todo extends Component {
    
    state={
        input:"",
        items:[]
        
    }; 

    myFunction=event=>{
        event.preventDefault(); 
        this.setState({
            input:event.target.value
        });

    };



     storeItems=(event)=>{
        event.preventDefault();
        const {input}=this.state;
        
    
        this.setState({
            items:[...this.state.items, input],
            input:""
            
        });

     };


  deleteItem=key=>{
    const allItems=this.state.items;
    allItems.splice(key,1);
    this.setState({
        items:allItems  

    })

  }


  render() {
    const {input,items}=this.state;
    console.log(items);
    
    return (
      <div className='todo-container'>
        {/* <h1>Todo App</h1> */}

        <form className='input-section'  onSubmit={this.storeItems}>
        <h1>Todo App</h1>
            <input type='text' value={input} onChange={this.myFunction} placeholder="Enter Items..."/>
        </form>   
        

        <ul>
            {items.map((data,index)=>(
                <li key={index}>
                    {data} <i className="fas fa-trash-alt" onClick={()=>this.deleteItem(index)}></i></li>
            ))}
      
        </ul>
      </div>
    )
  }
}


