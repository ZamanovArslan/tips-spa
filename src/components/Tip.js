import { Card, Button, Row } from "react-bootstrap";

function Tip(props) {
  const tip = props.data

  return (
    <Card style={{ width: '20rem', margin: '20px' }}>
      <Card.Body>
        <Card.Title>{tip.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{tip.createdAt}</Card.Subtitle>
        <Card.Text>{tip.description}</Card.Text>
        <Button variant="primary">Show</Button>
      </Card.Body>
    </Card>
  );
}

export default Tip;