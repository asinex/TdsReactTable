import React, { Component } from 'react'
import initialData from './initialData';
import Column from './Column';

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            initialData :initialData
        }
    }
    
    render(){
        this.state.initialData.columnOrder.map(function(columnId,i){
            const column = this.state.initialData.columns[columnId];
            console.log(column)
            const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);
            const title =  column.title;
        });

        return(
            <Column key={column.id} column={column} tasks={tasks}/>
        );
       
    }
}


export default App;