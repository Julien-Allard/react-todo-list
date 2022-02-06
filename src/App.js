import "./App.css";
import Header from "./components/Header";
import { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faListAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import NewTask from "./components/NewTask";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
library.add(faListAlt, faTrash);

function App() {
  const [todo, setTodo] = useState(""); //conserve ce qui est écrit dans l'input
  const [allTodos, setAllTodos] = useState([]); //conserve tous les inputs qui ont été submit pour les faire apparaître dans la todo list
  const [checkStatus, setCheckStatus] = useState([]); //conserve le statut de toutes les checkboxes pour vérifier laquelle est check (true) ou non (false)

  const handleTodo = (event) => {
    setTodo(event.target.value);
  };

  //pour créer les todos
  const handleAllTodos = (event) => {
    event.preventDefault(); //empêche le rafraîchissement de la page lors du clic sur le input submit

    //empêche d'envoyer un input vide
    if (todo !== "") {
      const newTab = [...allTodos];
      newTab.push(todo);
      setAllTodos(newTab);
      const newCheckStatus = [...checkStatus];
      newCheckStatus.push(false);
      setCheckStatus(newCheckStatus);
      document.querySelector(".submit-field").value = ""; //remet le input field et le state à zéro après chaque submit
      setTodo("");
    } else {
      alert("You didn't write any task !");
    }
  };

  //pour barrer les tâches dont la chexkbox est check
  const handleCheckStatus = (event) => {
    const position = event.target.value;
    const isChecked = event.target.checked;
    // console.log(position);
    const statusTab = [...checkStatus];
    for (let i = 0; i < statusTab.length; i++) {
      // console.log(statusTab[position]);
      // console.log(statusTab[i]);
      if (statusTab[position] !== isChecked) {
        statusTab[position] = isChecked;
        event.target.checked = isChecked;
      }
    }
    setCheckStatus(statusTab);
  };

  //pour supprimer une tâche en cliquant sur l'icône de suppression
  const deleteTodo = (event) => {
    const targetTodo = event.target.classList.value;
    // console.log(targetTodo);
    const todoToDelete = [...allTodos];
    const statusToDelete = [...checkStatus];
    for (let i = 0; i < todoToDelete.length; i++) {
      if (todoToDelete[i] === targetTodo.replace("trash ", "")) {
        // console.log(todoToDelete[i]);
        todoToDelete.splice(todoToDelete.indexOf(todoToDelete[i]), 1);
        statusToDelete.splice([i], 1);
        setAllTodos(todoToDelete);
        setCheckStatus(statusToDelete);
      }
    }
  };

  return (
    <>
      <Header />
      <NewTask
        todo={todo}
        handleTodo={handleTodo}
        handleAllTodos={handleAllTodos}
      />
      <TodoList
        allTodos={allTodos}
        checkStatus={checkStatus}
        handleCheckStatus={handleCheckStatus}
        deleteTodo={deleteTodo}
      />
      <Footer />
    </>
  );
}

export default App;
