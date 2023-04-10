import React, {useEffect, useState} from 'react';
import './App.css';
import './App.css';
import Tweet from './Tweet';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  const [data, setData] = useState([])

  const fetchData = async () =>{

    try {
      const response = await axios.get('https://coursera-twitter-api.herokuapp.com/tweets')
      setData(response.data)
    }
    catch(error) {
      console.error(error);


    }

    

  }

  useEffect (() => {
    console.log("here")
    fetchData()

  }
    
  )

  return (
   <div style={{background: '#111111' , padding: '30px'}}>
    {data.map(tweet => <Tweet key={tweet.id} {...tweet}/>)}
   </div>
   // <Tweet text='Text passed down' author ='john beg' date='2023-04-09'/>

  );
}
export default App;

