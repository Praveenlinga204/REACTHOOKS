import React, { createContext } from 'react'
import TaskList from './TaskList';
export const TaskContext = createContext(); 
export const TaskReducer = (state,action)=>{
    switch(action.type){
        case 'ADD_TASK':
            return [ ...state]
    }
}

function TaskApp() {
    return <TaskContext.Provider>
        <div>
            <h1>Task App Managment</h1>
            <br />
            <TaskList/>
        </div>
    </TaskContext.Provider>
}

export default TaskApp
