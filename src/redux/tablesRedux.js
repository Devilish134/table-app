// selectors
export const getAllTables = ({ tables }) =>
  tables;

export const getTablesById = (
  { tables },
  tableId
) =>
  tables.find((table) => table.id === tableId);

//actions names
const createActionName = (actionName) =>
  'app/tables/${actionName)';
const UPDATE_TABLE = createActionName(
  'UPDATE_TABLE'
);
const EDIT_TABLE =
  createActionName('EDIT_TABLE');

//action creators
export const updateTable = (payload) => ({
  type: UPDATE_TABLE,
  payload,
});
export const editTable = (payload) => ({
  type: EDIT_TABLE,
  payload,
});

export const fetchTables = () => {
  return (dispatch) => {
    fetch('http://localhost:3131/api/tables')
      .then((res) => res.json())
      .then((tables) =>
        dispatch(updateTable(tables))
      );
  };
};

export const editTableRequest = (
  updatedTable
) => {
  return (dispatch) => {
    const options = {
      method: 'UPDATE',
      Headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedTable),
    };

    fetch(
      'http://localhost:3131/api/tables',
      options
    ).then(() =>
      dispatch(updateTable(updatedTable))
    );
  };
};

//reducer
const tablesReducer = (
  statePart = [],
  action
) => {
  switch (action.type) {
    case UPDATE_TABLE:
      return [...action.payload];
    case EDIT_TABLE:
      return [...statePart, ...action.payload];
    default:
      return statePart;
  }
};

export default tablesReducer;
