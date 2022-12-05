import React from 'react';
import PropTypes from 'prop-types';
import styles from './Todoitem.module.css';

// eslint-disable-next-line react/prefer-stateless-function
class TodoItem extends React.Component {
  constructor() {
    super();
    this.state = {
      editing: false,
    };
  }

    handleEditing = () => {
      this.setState({
        editing: true,
      });
    };

    handleUpdatedDone = (e) => {
      if (e.key === 'Enter') {
        this.setState({ editing: false });
      }
    }

    render() {
      const viewMode = {};
      const editMode = {};
      const { editing } = this.state;
      if (editing) {
        viewMode.display = 'none';
      } else {
        editMode.display = 'none';
      }
      const {
        todo, handleChangeProps, delTodoProps, setUpdateProps,
      } = this.props;
      const completedStyle = {
        fontStyle: 'italic',
        color: '#595959',
        opacity: 0.4,
        textDecoration: 'line-through',
      };

      return (
        <li className={styles.item}>
          <div onDoubleClick={this.handleEditing}>
            <input
              type="checkbox"
              className={styles.checkbox}
              checked={todo.completed}
              onChange={() => handleChangeProps(todo.id)}
            />
            {' '}
            <span style={todo.completed ? completedStyle : null}>
              {todo.title}
            </span>
            <button type="button" onClick={() => delTodoProps(todo.id)}>Delete</button>
          </div>
          <input
            type="text"
            style={editMode}
            className={styles.textInput}
            value={todo.title}
            onChange={(e) => setUpdateProps(e.target.value, todo.id)}
            onKeyDown={this.handleUpdatedDone}
          />
        </li>
      );
    }
}
TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    completed: PropTypes.bool,
  }).isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  delTodoProps: PropTypes.func.isRequired,
  setUpdateProps: PropTypes.func.isRequired,
};
export default TodoItem;
