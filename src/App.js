import { useState, useEffect } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import axios from 'axios';
import { format } from 'timeago.js';
import { Boop } from './components/Animations/Boop';
// MUI ~ Imports
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';
import Register from './components/Register';
import Login from './components/Login';
// Styles ~ Import
import {
  StyledCard,
  StyledLabel,
  StyledTitle,
  StyledDesc,
  StyledStar,
  StyledUsername,
  StyledDate,
  StyledForm,
  StyledInput,
  StyledInputPlaceHolder,
  StyledTextArea,
  StyledSubmitButton,
  StyledButton,
  LogoutButton,
  LoginButton,
  RegisterButton
} from './styles';

function App() {
  const myStorage = window.localStorage;
  // States ~
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [currentUser, setCurrentUser] = useState(myStorage.getItem('user'));
  const [pins, setPins] = useState([]);
  const [currentPlaceId, setCurrentPlaceId] = useState(null);
  const [newPlace, setNewPlace] = useState(null);
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [rating, setRating] = useState(0);

  // Gloabal map viewport ~ useState
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 43.6532,
    longitude: -79.3832,
    zoom: 4
  });

  // Handler ~ (Functions)

  const handleMarkerClick = (id, lat, long) => {
    setCurrentPlaceId(id);
    setViewport({ ...viewport, latitude: lat, longitude: long });
  };

  const handleAddClick = (e) => {
    const [longitude, latitude] = e.lngLat;
    setNewPlace({
      lat: latitude,
      long: longitude
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPin = {
      username: currentUser,
      title,
      desc,
      rating,
      lat: newPlace.lat,
      long: newPlace.long
    };

    try {
      const res = await axios.post('/pins', newPin);
      setPins([...pins, res.data]);
      setNewPlace(null);
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    myStorage.removeItem('user');
  };

  // Async Await Get Request (UseEffect ~ Hook)
  useEffect(() => {
    const getPins = async () => {
      try {
        const res = await axios.get('/pins');
        setPins(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getPins();
  }, []);

  return (
    <div className="App">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1Ijoic2twZXNzb2EiLCJhIjoiY2t2OGxmc2plOXV6YTJ1bzg2Nzg4c2Y1YiJ9.eFzRYNz12Ij6L9g85YzgeA"
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        onDblClick={handleAddClick}
        mapStyle="mapbox://styles/skpessoa/ckvinfkgh80ui14pbizblzehw"
        /* transitionDuration="50" */
      >
        {pins.map((p) => (
          <>
            <Marker
              latitude={p.lat}
              longitude={p.long}
              offsetLeft={-viewport.zoom * 3.5}
              offsetTop={-viewport.zoom * 7}
            >
              <Boop x={0} y={-10}>
                <LocationOnIcon
                  style={{
                    fontSize: viewport.zoom * 4,
                    color: p.username === currentUser ? 'hsl(4, 96%, 64%)' : 'hsl(198, 96%, 37%)',
                    cursor: 'pointer'
                  }}
                  onClick={() => handleMarkerClick(p._id, p.lat, p.long)}
                />
              </Boop>
            </Marker>
            {p._id === currentPlaceId && (
              <Popup
                latitude={p.lat}
                longitude={p.long}
                closeButton={true}
                closeOnClick={false}
                anchor="left"
                onClose={() => setCurrentPlaceId(null)}
              >
                <StyledCard>
                  <StyledLabel>Place</StyledLabel>
                  <StyledTitle>{p.title}</StyledTitle>
                  <StyledLabel>Review</StyledLabel>
                  <StyledDesc>{p.desc}</StyledDesc>
                  <StyledLabel>Rating</StyledLabel>
                  <StyledStar>{Array(p.rating).fill(<StarIcon className="star" />)}</StyledStar>
                  <StyledLabel>Information</StyledLabel>
                  <StyledUsername>
                    Created by <b>{p.username}</b>
                  </StyledUsername>
                  <StyledDate class="date">{format(p.createdAt)}</StyledDate>
                </StyledCard>
              </Popup>
            )}
          </>
        ))}
        {newPlace && (
          <Popup
            longitude={newPlace.long}
            latitude={newPlace.lat}
            closeButton={true}
            closeOnClick={false}
            onClose={() => setNewPlace(null)}
            anchor="left"
          >
            <div>
              <StyledForm onSubmit={handleSubmit}>
                <StyledLabel>Title</StyledLabel>
                <StyledInputPlaceHolder>
                  <StyledInput
                    placeholder="Enter a title"
                    autoFocus
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </StyledInputPlaceHolder>
                <StyledLabel>Description</StyledLabel>
                <StyledInputPlaceHolder>
                  <StyledTextArea
                    placeholder="Say us something about this place."
                    onChange={(e) => setDesc(e.target.value)}
                  />
                </StyledInputPlaceHolder>
                <StyledLabel>Rating</StyledLabel>
                <select onChange={(e) => setRating(e.target.value)}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
                <StyledSubmitButton type="submit" className="submitButton">
                  Add Pin
                </StyledSubmitButton>
              </StyledForm>
            </div>
          </Popup>
        )}
        {currentUser ? (
          <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
        ) : (
          <StyledButton>
            <LoginButton onClick={() => setShowLogin(true)}>Login</LoginButton>
            <RegisterButton onClick={() => setShowRegister(true)}>Register</RegisterButton>
          </StyledButton>
        )}
      </ReactMapGL>
      {showRegister && <Register setShowRegister={setShowRegister} />}
      {showLogin && (
        <Login setShowLogin={setShowLogin} myStorage={myStorage} setCurrentUser={setCurrentUser} />
      )}
      {console.log(setShowRegister)};
    </div>
  );
}

export default App;
