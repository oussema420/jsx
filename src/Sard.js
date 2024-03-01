import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';


function Sard() {
  var firstnName="cap"
  return (
    <Card style={{ width: '100%' }}>
      <ListGroup variant="flush">
        <ListGroup.Item><Name/></ListGroup.Item>
        <ListGroup.Item><Price/></ListGroup.Item>
        <ListGroup.Item><Description/></ListGroup.Item>
        <ListGroup.Item>{firstnName?<Image/>:"Hallo there"}</ListGroup.Item>
      </ListGroup>
      
    </Card>
  );
}

export default Sard;