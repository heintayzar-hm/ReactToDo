import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './Todoitem';

// eslint-disable-next-line react/prefer-stateless-function
class TodosList extends React.Component {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    const {
      todos, handleChangeProps, delTodoProps, setUpdateProps,
    } = this.props;
    return (
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeProps={handleChangeProps}
            delTodoProps={delTodoProps}
            setUpdateProps={setUpdateProps}
          />
        ))}
      </ul>
    );
  }
}
TodosList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      completed: PropTypes.bool,
    }),
  ).isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  delTodoProps: PropTypes.func.isRequired,
  setUpdateProps: PropTypes.func.isRequired,
};

export default TodosList;
