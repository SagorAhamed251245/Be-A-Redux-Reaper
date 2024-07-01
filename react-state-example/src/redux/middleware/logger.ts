const middleware: Middleware = (api) => (next) => async (action) => {
  const response = next(action);

  // Do something after the action hits the reducer
  const afterState = api.getState();
  if (action.type === "some/action") {
    const data = await fetchData();
    api.dispatch(dataFetchedAction(data));
  }

  return response;
};
