import { InputGroup, FormControl } from 'react-bootstrap'

function SearchInput() {
  return (
    <InputGroup className="mb-3">
      <InputGroup.Prepend>
        <InputGroup.Text id="basic-addon1">Tips</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        placeholder="How to travel with 10$"
        aria-label="Username"
        aria-describedby="basic-addon1"
      />
    </InputGroup>
  )
}

export default SearchInput;