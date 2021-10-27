import { useState, useEffect } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import axios from 'axios';
import { format } from 'timeago.js';

// MUI ~ Imports
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';

// Styles ~ Import
import {
  StyledCard,
  StyledLabel,
  StyledDesc,
  StyledStar,
  StyledUsername,
  StyledDate
} from './styles';

function App() {
  // States ~
  const [pins, setPins] = useState([]);
  const [currentPlaceId, setCurrentPlaceId] = useState(null);
  const [newPlace, setNewPlace] = useState(null);
  const currentUser = 'Sarah';

  // Gloabal map viewport ~ useState
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 43.6532,
    longitude: -79.3832,
    zoom: 4
  });

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

  return (
    <div className="App">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1Ijoic2twZXNzb2EiLCJhIjoiY2t2OGxmc2plOXV6YTJ1bzg2Nzg4c2Y1YiJ9.eFzRYNz12Ij6L9g85YzgeA"
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        onDblClick={handleAddClick}
        /* mapStyle="" */
        /* transitionDuration="50" */
      >
        {pins.map((p) => (
          <>
            <Marker latitude={p.lat} longitude={p.long} offsetLeft={-20} offsetTop={-10}>
              <LocationOnIcon
                style={{
                  fontSize: viewport.zoom * 4,
                  color: p.username === currentUser ? 'tomato' : 'slateblue',
                  cursor: 'pointer'
                }}
                onClick={() => handleMarkerClick(p._id, p.lat, p.long)}
              />
            </Marker>
            {p._id === currentPlaceId && (
              <Popup
                latitude={p.lat}
                longitude={p.long}
                closeButton={true}
                closeOnClick={false}
                anchor="top"
                onClose={() => setCurrentPlaceId(null)}
              >
                <StyledCard>
                  <StyledLabel>Place</StyledLabel>
                  <h4>{p.title}</h4>
                  <StyledLabel>Review</StyledLabel>
                  <StyledDesc>{p.desc}</StyledDesc>
                  <StyledLabel>Rating</StyledLabel>
                  <StyledStar>
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </StyledStar>
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
            hello
          </Popup>
        )}
      </ReactMapGL>
    </div>
  );
}

export default App;
