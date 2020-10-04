const initialState = {
  alerts: []
}

function alertReducer(state = initialState, action) {
  const {type, payload} = action;
  const {alerts} = state;

  switch (type) {
    case 'ADD_ALERT':
      return {...state, alerts: [...state.alerts, payload]};
    case 'REMOVE_ALERT':
      return {...state, alerts: alerts.filter(alert => alert.id !== payload) }

    default:
      return state;
  }
}

export default alertReducer;