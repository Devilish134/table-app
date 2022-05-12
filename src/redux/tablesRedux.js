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
