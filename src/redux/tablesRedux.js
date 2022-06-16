import { API_URL } from '../config';

// selectors
export const getAllTables = ({ tables }) => {
  return tables;
};

export const getTablesById = (
  { tables },
  tableId
) =>
  tables.find((table) => table.id === tableId);

//actions names
const createActionName = (actionName) =>
  `app/tables/${actionName}`;
const UPDATE_TABLE = createActionName(
  'UPDATE_TABLE'
);
const EDIT_TABLE =
  createActionName('EDIT_TABLE');
const SORT_TABLE =
  createActionName('SORT_TABLE');

//action creators
export const updateTable = (payload) => ({
  type: UPDATE_TABLE,
  payload,
});
export const editTable = (payload) => ({
  type: EDIT_TABLE,
  payload,
});
export const sortTable = (payload) => ({
  type: SORT_TABLE,
  payload,
});

export const fetchTables = () => {
  return (dispatch) => {
    fetch(`${API_URL}/tables/`)
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
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedTable),
    };

    fetch(
      `${API_URL}/tables/${updatedTable.id}`,
      options
    )
      .then((tables) =>
        dispatch(sortTable(tables))
      )
      .then(() =>
        dispatch(editTable(updatedTable))
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
    case SORT_TABLE: {
      return statePart
        .slice()
        .sort(function ({ id, table }) {
          const tableA = table.id,
            tableB = table.id;
          if (tableA < tableB) return -1;
          if (tableA > tableB) return 1;
          return 0;
        });
    }
    case EDIT_TABLE: {
      const filteredTables = statePart.filter(
        (table) => {
          return table.id !== action.payload.id;
        }
      );
      return [
        ...filteredTables,
        action.payload,
      ];
    }
    default:
      return statePart;
  }
};

export default tablesReducer;
