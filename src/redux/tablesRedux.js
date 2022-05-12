// selectors

//actions

const createActionName = (actionName) =>
  'app/tables/${actionName)';

//reducer

const tablesReducer = (
  statePart = [],
  action
) => {
  switch (action.type) {
    default:
      return [...statePart];
  }
};

export default tablesReducer;
