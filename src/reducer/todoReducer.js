import ACTION_TYPES from "../actions/actionTypes";

const initialState = {
  tasks: [
    {
      id: 1,
      body: "test",
      isDone: false,
    },
  ],
  //filter:'all'
};
let serial = 2;
function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.CREATED_TASK: {
      const { tasks } = state;
      const { values } = action;
      return {
        ...state,
        tasks: [...tasks, { ...values, id: serial++ }],
      };
    }
    case ACTION_TYPES.UPDATE_TASK: {
      const { tasks } = state;
      const { id, values } = action;
      const newTasks = tasks.map((task) => {
        if (id === task.id) {
          return { ...task, ...values };
        }
        return task;
      });
      return {
        ...state,
        tasks: newTasks,
      };
    }
    case ACTION_TYPES.DELETE_TASK: {
      const { tasks } = state;
      const { id } = action;
      const newTasks = tasks.filter((task) => id !== task.id);
      return {
        ...state,
        tasks: newTasks,
      };
    }
    // case ACTION_TYPES.SET_FILTER_TASK:{
    //   return state
    // }
    default:
      return state;
  }
}

export default todoReducer;
