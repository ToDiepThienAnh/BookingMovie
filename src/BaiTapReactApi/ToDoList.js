import React, { useEffect, useState } from 'react'
import axios from 'axios'


export default function ToDoList() {



    const [toDoList, setToDoList] = useState([])

    const [task, setTask] = useState({
        taskName: ""

    })

    // const [taskEdit, setTaskEdit] = useState({})
    // let { taskName } = toDoList.Task


    useEffect(async () => {

        const dataToDoList = await axios({
            method: "GET",
            url: "http://svcy.myclass.vn/api/ToDoList/GetAllTask"
        })
        // console.log("dataToDoList", dataToDoList);
        setToDoList(dataToDoList.data)
        console.log("Data list to do", dataToDoList.data);
        // console.log("status ToDolist", toDoList[0].status);

    }, [])

    const handleChange = (e) => {
        let { name, value } = e.target;


        console.log(name, value);


        setTask({
            [name]: value
        })
        // console.log("Task Name ở State", task);
    }

    let renderListToDo = () => {
        let newToDoList = toDoList?.filter(item => item.status === false)
        return newToDoList.map((item, index) => {
            return <li className='d-flex justify-content-between border p-3' key={index}>
                <div>{item.taskName}</div>
                <div>
                    <div>
                        <button onClick={() => handleGetTaskByTaskName(item.taskName)} className='bg-dark text-white mr-2'><i className="fa fa-edit" /></button>
                        <button onClick={() => handleCheckDoneTask(item.taskName)} className='bg-dark text-white mr-2'><i className="fa fa-check" /></button>
                        <button onClick={() => handleDeleteTask(item.taskName)} className='bg-dark text-white'> <i className="fa fa-trash-alt" /></button>
                    </div>

                </div>
            </li>
        })

    }

    let renderTaskComplete = () => {
        let newTaskComplete = toDoList?.filter(item => item.status !== false)
        return newTaskComplete.map((item, index) => {
            return <li className='d-flex justify-content-between border p-3' key={index}>
                <div>{item.taskName}</div>
                <div>
                    <form>

                        <button onClick={() => handleRejectTask(item.taskName)} className='bg-dark text-white'> <i className="fa fa-trash-alt" /></button>
                    </form>

                </div>
            </li>
        })
    }

    const handleAddTask = async (e) => {
        console.log("Submit ", task);
        let addTask = await axios({
            method: "POST",
            url: "http://svcy.myclass.vn/api/ToDoList/AddTask",
            data: task
        })
        console.log("add Task", addTask);

        setTask({ ...task, taskName: "" });


    }
    // console.log("Task trước khi thêm ", task)
    const handleGetTaskByTaskName = async (taskName) => {
        console.log("handleGetTaskByTaskName", taskName);
        const getTaskByTaskName = await axios({
            method: "GET",
            url: `http://svcy.myclass.vn/api/ToDoList/GetTask?taskName=${taskName}
            `
        })

        let newTaskName = getTaskByTaskName.data.taskName
        console.log("newTaskName khi get", newTaskName)
        setTask({
            task: { ...task, taskName: newTaskName }
        })
        console.log("Task sau khi get", task.taskName)
    }

    let handleDeleteTask = async (taskName) => {
        console.log("handleDeleteTask", taskName);
        const deleteTask = await axios({
            method: "DELETE",
            url: `http://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=${taskName}
            `
        })
        console.log("handleDeleteTask", deleteTask);
    }

    let handleRejectTask = async (taskName) => {
        console.log("handleRejectTask", taskName);
        const rejectTask = await axios({
            method: "PUT",
            url: `http://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=${taskName}
            `
        })
        console.log("handleRejectTask", rejectTask);
    }

    let handleCheckDoneTask = async (taskName) => {
        // console.log("handleCheckDoneTask", taskName);
        const doneTask = await axios({
            method: "PUT",
            url: `http://svcy.myclass.vn/api/ToDoList/doneTask?taskName=${taskName}
            `
        })

        console.log("handleCheckDoneTask", doneTask);
    }


    return (

        <div>
            <div className='border-bottom pb-5'>
                <h3 className='text-white'>To Do list</h3>
                <form>
                    <p>Task name</p>
                    <div className=' d-flex bg-dark '>
                        <input onChange={handleChange} value={task.taskName} name='taskName' className='form-control w-25' type='text' />
                        <button type='button' onClick={handleAddTask} className='btn btn-secondary ml-2'>Add task</button>
                        <button type='button' onClick={() => handleRejectTask(task.taskName)} className='btn btn-secondary ml-2'>Update task</button>
                    </div>
                </form>

            </div>
            <div className='mt-2'>
                <h3 className='text-white'>Task To Do</h3>
                <ul style={{ listStyle: 'none' }} className='mx-0 pl-0'>
                    {renderListToDo()}
                </ul>

            </div>
            <div className='mt-2'>
                <h3 className='text-white'>Task Completed</h3>
                <ul style={{ listStyle: 'none' }} className='mx-0 pl-0'>
                    {renderTaskComplete()}
                </ul>

            </div>
        </div >
    )
}
