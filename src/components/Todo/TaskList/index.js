import React from "react";
import { connect } from "react-redux";
import { updateTask, deleteTask } from "../../../actions/actionsTodo";

const TaskList = (props) => {
  const { tasks, updateTaskDispatch, deleteTaskDispatch } = props;
  const mapTasks = ({ id, body, isDone }) => (
    <li key={id}>
      <p style={{color: isDone?'teal':'pink'}}>{body}</p>
      <p>
        <input type="checkbox" checked={isDone}
          onChange={({ target: { checked } }) =>
            updateTaskDispatch({ id: id, values: { isDone: checked } })
          }
        />
        <button onClick={() => deleteTaskDispatch(id)}>delete</button>
      </p>
    </li>
  );
  return (
    <div>
      <h2>Tasks list: </h2>
      <ul>{tasks.map(mapTasks)}</ul>
    </div>
  );
};

const mapStateToProps = ({ tasks }) => ({ tasks });
const mapDispatchToProps = (dispatch) => ({
  updateTaskDispatch: ({ id, values }) => dispatch(updateTask({ id, values })),
  deleteTaskDispatch: (id) => dispatch(deleteTask(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
