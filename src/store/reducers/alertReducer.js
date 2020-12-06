const initialState = {
  alerts: []
}

function alertReducer(state = initialState, action) {
  const {type, payload} = action;
  const {alerts} = state;

  switch (type) {
    case 'ADD_ALERT':
      if (alerts.filter(alert => alert.message === payload.message).length > 0) return state;

      return {...state, alerts: [...alerts, payload]};
    case 'REMOVE_ALERT':
      return {...state, alerts: alerts.filter(alert => alert.id !== payload.id) }

    default:
      return state;
  }
}

export default alertReducer;