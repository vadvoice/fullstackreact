export const apiMiddleware = store => next => action => {
  if (!action.meta || action.meta.type !== 'api') {
    return next(action);
  }
  const {url} = action.meta;
  const fetchOptions = Object.assign({}, action.meta);

  fetch(url, fetchOptions)
    .then(resp => resp.json())
    .then(json => {
      if (typeof action.meta.onSuccess === 'function') {
        action.meta.onSuccess(json);
      }
      return json;
    })
    .then(json => {
      let newAction = Object.assign({}, action, {
        payload: json.dateString
      });
      delete newAction.meta;
      store.dispatch(newAction);
    })
}