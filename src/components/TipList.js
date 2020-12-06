import CardList from "./CardList";
import Tip from "./Tip";
import { useQuery } from "@apollo/client";

function TipList(props) {
  const { query, variables } = props
  const {loading, error, data} = useQuery(query, {variables: variables});

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (<CardList cards={data.tips} cardComponent={Tip}/>)
}

export default TipList;