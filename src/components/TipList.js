import CardList from "./CardList";
import Tip from "./Tip";
import { useQuery } from "@apollo/client";

function TipList(props) {
  const {query, variables, field = "tips"} = props
  const {loading, error, data} = useQuery(query, {variables: variables});

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  let tips = field.split('.').reduce((p, c) => p && p[c] || null, data)

  if (tips.length === 0) return "There is nothing";
  return (<CardList cards={tips} cardComponent={Tip}/>)
}

export default TipList;
