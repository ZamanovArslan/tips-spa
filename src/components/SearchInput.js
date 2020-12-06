import { InputGroup, FormControl, Form } from 'react-bootstrap'
import { useEffect, useState } from "react";
import React from "react";
import { useHistory } from "react-router-dom";

function SearchInput() {
  const history = useHistory();
  const [query, setQuery] = useState("")

  return (
    <form onSubmit={(event) => handleSubmit(query, history, event)}>
      <InputGroup className="mb-3" onSubmit={(value) => history.push('/search?query=' + value)}>
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">Tips</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder="How to travel with 10$"
          aria-label="Search"
          aria-describedby="basic-addon1"
          onChange={(event) => setQuery(event.target.value)}
        />
      </InputGroup>
    </form>
  )
}

function handleSubmit(query, history, event){
  event.preventDefault();

  history.push('/search?query=' + query)
}

export default SearchInput;