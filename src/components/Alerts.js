import { connect } from "react-redux";
import { Alert } from "react-bootstrap";
import { removeAlert } from "../store/actionCreators/alerts";

const Alerts = (props) => {
  const {alerts, dispatch} = props

  if (alerts != null) {
    return (
      alerts.map((alert) => {
          return (
            <Alert variant={alert.type} key={alert.id} dismissible onClick={() => dispatch(removeAlert(alert.id))}>
              {alert.message}
            </Alert>
          )
        }
      )
    )
  } else {
    return null
  }
}

const mapStateToProps = (state) => ({
  alerts: state.alerts
})

export default connect(mapStateToProps)(Alerts);