
import  React, {useState,useEffect} from 'react';
import TaskPopup from '../modals/Task';
import Card from './Card';
import SearchBox from './SearchBox';

const TodoList = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([])
    
    useEffect(() => {
        let arr = localStorage.getItem("taskList")
       
        if(arr){
            let obj = JSON.parse(arr)
            setTaskList(obj)
        }
    }, [])


   


    const deleteTask = (index) => {
        let tempList = taskList
        tempList.splice(index, 1)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const updateListArray = (obj, index) => {
        let tempList = taskList
        tempList[index] = obj
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const toggle = () => {
        setModal(!modal);
    }

    const saveTask = (taskObj) => {
        let tempList = taskList
        tempList.push(taskObj)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setModal(false)
        setTaskList(taskList)
    }
    


    return (
        <div className = "colors">
            <div className = "header text-center">
                <h3>Todo List</h3>
                <SearchBox  />
            <button className = "button" onClick = {() => setModal(true)} >Create Task</button>
            </div>
            <h4>All The Task</h4>
           
            <div className = "task-container">
            {taskList && taskList.map((obj , index) => <Card taskObj = {obj} index = {index} deleteTask = {deleteTask} updateListArray = {updateListArray}/> )}
            </div>
            
            <TaskPopup toggle = {toggle} modal = {modal} save = {saveTask}/>
            
        </div>
    );
};





export default TodoList;