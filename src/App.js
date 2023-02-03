import './App.css';
import Box from './components/box';
import {useState, useEffect} from 'react';
import Login from './components/Login';

function App() {
  const [user, setUser] = useState("");
  const [photos, setPhotos] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {fetchImages()}, []);

  const myArray = [{name:"Harry"},{name:"George"}, {name:"Hermione"}, {name:"Mafalda"}];
  
  const fetchImages = async () => {
    const response = await fetch ("https://picsum.photos/v2/list");
    const data = await response.json();
    console.log(data);
    setPhotos(data);
    console.log(photos);
  }

  return (
    <div className="App">
      <Login setter={setUser}/>
      <h1>{user} is logged in</h1>

      {user ?
        photos.map((item, index) => {
          return (
            <div>
              <img src={item.download_url} width="300px" />
              <h2>{item.author}</h2>
            </div>
          )
      })
      :<h1> Please Login</h1>
    }

      <br></br>
      {/* <input onChange = {(event) => setUser(event.target.value)} />
      {user && <Box name={user}/>}
      {(user == "Harry") ? <Box name="Harry logged in" /> : <Box name="please log in"/>} */}

      {/* {myArray.map((item, index) => {return (
        <div>
          <Box name={item.name} />
        </div>
      )})} */}



    </div>

  );
}

export default App;
