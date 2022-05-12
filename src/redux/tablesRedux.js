// selectors
export const getAllTables = ({ tables }) =>
  tables;

//actions names
const createActionName = (actionName) =>
  'app/tables/${actionName)';
const UPDATE_TABLE = createActionName(
  'UPDATE_TABLE'
);

//action creators
export const updateTable = (payload) => ({
  type: UPDATE_TABLE,
  payload,
});

export const fetchTables = (dispatch) => {
  fetch('http://localhost:3131/api/tables')
    .then((res) => res.json())
    .then((tables) =>
      dispatch(updateTable(tables))
    );
};

//reducer
const tablesReducer = (
  statePart = [],
  action
) => {
  switch (action.type) {
    case UPDATE_TABLE:
      return [...action.payload];
    default:
      return statePart;
  }
};

export default tablesReducer;
