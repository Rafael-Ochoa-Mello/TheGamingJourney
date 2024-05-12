import TaskArea, { TODO } from '../../components/TaskArea';
import Sidebar from '../../components/Sidebar';

import styles from './Home.module.css';
import { useState } from 'react';

export default function Home() {
  const [modal, setModal] = useState(false);
  const [todos, setTodos] = useState<TODO[]>([
    {
      id: 1,
      date: new Date().toLocaleString(),
      status: 1,
      title: 'Test',
    },
    {
      id: 2,
      date: new Date().toLocaleString(),
      status: 0,
      title: 'Test 2',
    },
  ]);
  const [edit, setEdit] = useState<TODO>();

  function onSave(todo: TODO) {
    const update = todos.find((el) => el.id === todo.id);
    if (update) {
      const updatedTodos = todos.map((el) => {
        if (el.id === todo.id) {
          return todo;
        }

        return el;
      });
      setTodos(updatedTodos);
    }

    setTodos([...todos, todo]);
    toggleModal();
  }

  const onCheck = (id: number) => {
    const newState = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          status: todo.status === 1 ? 0 : 1,
        };
      }

      return todo;
    });

    setTodos(newState);
  };

  function onDelete(id: number) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function onEdit(id: number) {
    const editTodo = todos.find((todo) => todo.id === id);
    if (editTodo) {
      setEdit(editTodo);
    }

    toggleModal();
  }

  function toggleModal() {
    if (modal) {
      setEdit(undefined);
    }

    setModal(!modal);
  }

  return (
    <div className={styles.container}>
      <Sidebar />
      <TaskArea
        todos={todos}
        onCheck={onCheck}
        onDelete={onDelete}
        onEdit={onEdit}
      />
    </div>
  );
}