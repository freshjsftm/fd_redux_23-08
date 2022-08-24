import React from "react";
import { connect } from "react-redux";
import Task from "../Task";

const TaskList = (props) => {
  const { tasks } = props; //filter
  const mapTasks = (task) => (
    // if(filter==='done')
    <Task key={task.id} task={task}/>
  );
  return (
    <div>
      <h2>Tasks list: </h2>
      <ul>{tasks.map(mapTasks)}</ul>
      {/* <select value={filter} onChange={setFilterTask}></select> */}
    </div>
  );
};

const mapStateToProps = ({ todo }) => todo ;


export default connect(mapStateToProps)(TaskList);
