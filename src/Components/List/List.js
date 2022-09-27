import React from 'react'
import { useSelector } from 'react-redux'
import Task from '../Task/Task'

const List = () => {
  const listt = useSelector((state) => state.todoReducer.todoList);

  return (
    <div>
      {listt.map(el=> <Task el={el} key={el.id}  />)}
    </div>
  )
}

export default List