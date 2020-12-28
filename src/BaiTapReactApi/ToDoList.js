import React, { useEffect, useState } from 'react'
import axios from 'axios'


export default function ToDoList() {



    const [toDoList, setToDoList] = useState({})

    const [task, setTask] = useState({
        taskName: ""
        // status: false
    })
    // let { taskName } = toDoList.Task


    useEffect(async () => {

        const dataToDoList = await axios({
            method: "GET",
            url: "http://svcy.myclass.vn/api/ToDoList/GetAllTask"
        })
        // console.log("dataToDoList", dataToDoList);
        setToDoList(dataToDoList.data)
        // console.log("Data list to do", dataToDoList.data);
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

    // const renderListToDo = () => {
    //     let newToDoList = toDoList?.filter(item => item.status === false)
    //     return newToDoList.map((item, index) => {
    //         return <li className='d-flex justify-content-between border p-3'>
    //             <div>{item.taskName}</div>
    //             <div>
    //                 <div>
    //                     <button className='bg-dark text-white mr-2'><i className="fa fa-edit" /></button>
    //                     <button className='bg-dark text-white mr-2'><i className="fa fa-check" /></button>
    //                     <button className='bg-dark text-white'> <i className="fa fa-trash-alt" /></button>
    //                 </div>

    //             </div>
    //         </li>
    //     })

    // }

    // const renderTaskComplete = () => {
    //     let newTaskComplete = toDoList?.filter(item => item.status !== false)
    //     return newTaskComplete.map((item, index) => {
    //         return <li className='d-flex justify-content-between border p-3'>
    //             <div>{item.taskName}</div>
    //             <div>
    //                 <div>
    //                     <button onClick={handleGetTaskByTaskName(item.taskName)} className='bg-dark text-white mr-2'><i className="fa fa-edit" /></button>
    //                     <button onClick className='bg-dark text-white mr-2'><i className="fa fa-check" /></button>
    //                     <button onClick={handleDeleteTask(item.taskName)} className='bg-dark text-white'> <i className="fa fa-trash-alt" /></button>
    //                 </div>

    //             </div>
    //         </li>
    //     })
    // }

    const handleAddTask = async (e) => {

        // let addTask = await axios({
        //     method: "POST",
        //     url: "http://svcy.myclass.vn/api/ToDoList/AddTask",
        //     data: task
        // })
        console.log("Submit ", task);
    }
    console.log("Task trước khi thêm ", task)
    const handleGetTaskByTaskName = (taskName) => {
        alert(taskName)
    }

    const handleDeleteTask = (taskName) => {
        alert(taskName)
    }

    const handleUpdateTask = () => {

    }

    const handleCheckDoneTask = () => {

    }


    return (

        <div div >
            <div className='border-bottom pb-5'>
                <h3 className='text-white'>To Do list</h3>
                <form>
                    <p>Task name</p>
                    <div className=' d-flex bg-dark '>
                        <input onChange={handleChange} value={task.taskName} name='taskName' className='form-control w-25' type='text' />
                        <button type='button' onClick={handleAddTask} className='btn btn-secondary ml-2'>Add task</button>
                        <button className='btn btn-secondary ml-2'>Update task</button>
                    </div>
                </form>

            </div>
            <div className='mt-2'>
                <h3 className='text-white'>Task To Do</h3>
                <ul style={{ listStyle: 'none' }} className='mx-0 pl-0'>
                    {/* {renderListToDo()} */}
                </ul>

            </div>
            <div className='mt-2'>
                <h3 className='text-white'>Task Completed</h3>
                <ul style={{ listStyle: 'none' }} className='mx-0 pl-0'>
                    {/* {renderTaskComplete()} */}
                </ul>

            </div>
        </div >
    )
}
