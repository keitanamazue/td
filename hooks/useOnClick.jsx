import { useState } from "react";

export const useOnClick = () => {

  const [todoText, setTodoText] = useState("");

  const [inCompletedTodos, setInCompletedTodos] = useState([]);

  const [inDoneTodos, setInDoneTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...inCompletedTodos, todoText];
    setInCompletedTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...inCompletedTodos];
    newTodos.splice(index, 1);
    setInCompletedTodos(newTodos);
  };

  const onClickDone = (index) => {
    const newTodos = [...inCompletedTodos];
    newTodos.splice(index, 1);
    const newDone = [...inDoneTodos, inCompletedTodos[index]];

    setInCompletedTodos(newTodos);
    setInDoneTodos(newDone);
  };

  const onClickDoneDelete = (index) => {
    const newDoneTodos = [...inDoneTodos];
    newDoneTodos.splice(index, 1);
    setInDoneTodos(newDoneTodos);
  };

  const onClickReturn = (index) => {
    const newDoneTodos = [...inDoneTodos];
    newDoneTodos.splice(index, 1);

    const newTodos = [...inCompletedTodos, inDoneTodos[index]];

    setInCompletedTodos(newTodos);
    setInDoneTodos(newDoneTodos);
  };

  return {
    todoText,
    inCompletedTodos,
    inDoneTodos,
    onChangeTodoText,
    onClickAdd,
    onClickDelete,
    onClickDone,
    onClickDoneDelete,
    onClickReturn,
  };
};
