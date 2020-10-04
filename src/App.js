import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import { Container, Row } from "react-bootstrap";
import { Switch, Route, Redirect } from 'react-router-dom';
import SignIn from "./components/SignIn";
import Alerts from "./components/Alerts";

function App() {
  return (
    <div className="App">
      <Header/>
      <Container className="mt-4">
        <Alerts />
        <Row className="justify-content-md-center">
          <Switch>
            <Route path="/signin" component={SignIn}/>
          </Switch>
        </Row>
      </Container>
    </div>
  );
}

export default App;
