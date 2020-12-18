import { gql } from "@apollo/client";
import TipList from "./TipList";

const SEARCH_QUERY = gql`
    query Tips($query: String!){
        tips(keyword: $query){
            anonym
            description
            experience
            createdAt
            id
            title
        }
    }
`

function SearchTips({query}) {
  return (<TipList query={SEARCH_QUERY} variables={{query}}/>)
}

export default SearchTips;
