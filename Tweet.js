import React , {useState} from 'react'
import { card } from 'react-bootstrap'


const Tweet = (props) => {

    const [counter, setCounter] = useState(0)

    const increment = () => {
            setCounter( counter + 1)

    }
    const decrement = () => {
            setCounter( counter - 1)
    }

    const text = props.text
    const author = props.author
    const date = props.date
    return (

        import Card from 'react-bootstrap/Card';

function TextExample() {
  return (
    <Card style={{ width: '50rem' , margin: 'auto' , marginBottom: '30px'}}>
      <Card.Body>
        <Card.Title>{author}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        {text}
      </Card.Body>
    </Card>
  );
}

export default TextExample;

        /*
        <div>
            <h3>{text.toUpperCase()}</h3>
            <h6>by {author} on {date}</h6>
            <h1>counter: {counter}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            </div> */
    )
}
export default Tweet;
