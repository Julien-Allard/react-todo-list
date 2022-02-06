import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TodoList = (props) => {
  return (
    <>
      {props.allTodos.map((todo, index) => {
        // console.log(todo);

        return (
          <div key={index} className="container">
            <div className="todo">
              <input
                type="checkbox"
                className="checkbox"
                value={index}
                onChange={props.handleCheckStatus}
              />
              <p className={props.checkStatus[index] ? "check" : null}>
                {todo}
              </p>
              <span className={`trash ${todo}`} onClick={props.deleteTodo}>
                <FontAwesomeIcon icon="trash" className="trash-icon" />
              </span>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TodoList;
