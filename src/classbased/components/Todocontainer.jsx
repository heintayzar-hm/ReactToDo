import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import InputTodo from './AddToDo';
import Header from './Header';
import TodosList from './Todolist';

// eslint-disable-next-line react/prefer-stateless-function
class TodoContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }

  componentDidMount() {
    const loadedTodos = JSON.parse(localStorage.getItem('todos'));
    if (loadedTodos) {
      this.setState({
        todos: loadedTodos,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { todos } = this.state;
    if (prevState.todos !== todos) {
      const temp = JSON.stringify(todos);
      localStorage.setItem('todos', temp);
    }
  }

  handleChange = (id) => {
    this.setState((prev) => ({
      todos: prev.todos.map((todo) => {
        if (todo.id === id) {
          const copy = { ...todo };
          copy.completed = !copy.completed;
          return copy;
        }
        return todo;
      }),
    }));
  };

  delTodo = (id) => {
    this.setState((prev) => ({
      todos: [
        ...prev.todos.filter((todo) => todo.id !== id),
      ],
    }));
  };

  addTodoItem = (title) => {
    const { todos } = this.state;
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    this.setState({
      todos: [...todos, newTodo],
    });
  };

  setUpdate = (updatedTitle, id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.map((todo) => {
        if (todo.id === id) {
          const update = { ...todo };
          update.title = updatedTitle;
          return update;
        }
        return todo;
      }),
    });
  }

  render() {
    const { todos } = this.state;
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo addTodoItemProps={this.addTodoItem} />
          {(todos.length > 0)
            && (
              <TodosList
                todos={todos}
                handleChangeProps={this.handleChange}
                delTodoProps={this.delTodo}
                setUpdateProps={this.setUpdate}
              />
            )}
        </div>
      </div>
    );
  }
}
export default TodoContainer;
