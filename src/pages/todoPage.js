import React from 'react';
import TaskForm from '../components/Todo/TaskForm/index';
import TaskList from '../components/Todo/TaskList/index';

const TodoPage = () => {
  return (
    <div>
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default TodoPage;
