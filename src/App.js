import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import { Container, Row } from "react-bootstrap";
import { Switch, Route, useLocation } from 'react-router-dom';
import SignIn from "./components/SignIn";
import Alerts from "./components/Alerts";
import { gql } from "@apollo/client";
import TipList from "./components/TipList";
import SearchTips from "./components/SearchTips";
import { AUTH_TOKEN } from "./constants";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const TIPS_QUERY = gql`
    query{
        tips{
            anonym
            description
            experience
            createdAt
            id
            title
        }
    }
`

const MY_TIPS_QUERY = gql`
    query{
        me{
            tips{
                anonym
                description
                experience
                createdAt
                id
                title
            }
        }
    }
`

function App() {
  let query = useQuery();

  return (
    <div className="App">
      <Header/>
      <Container className="mt-4">
        <Alerts/>
        <Row className="justify-content-md-center">
          <Switch>
            <Route path="/signin" component={SignIn}/>
            <Route path="/search">
              <SearchTips query={query.get("query")}/>
            </Route>
            <Route path="/my/tips">
              <TipList query={MY_TIPS_QUERY} field="me.tips"/>
            </Route>
            <Route path="/">
              <TipList query={TIPS_QUERY}/>
            </Route>
          </Switch>
        </Row>
      </Container>
    </div>
  );
}

export default App;
