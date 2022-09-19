import React, { useState, useEffect } from 'react'
import './App.css';
import SpaceMission from './components/graphql';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBContainer, MDBRow } from 'mdb-react-ui-kit';

function App() {

  const [data, setData] = useState([]);
  const loadSpaceMission = async () => {
    const spaceMissions = await SpaceMission.getSpaceMission(10);
    setData(spaceMissions);
  };

  useEffect(() => {
    loadSpaceMission();
  }, [])

  console.log("data", data);

  return (
    <MDBContainer style={{
      margin: 'auto',
      padding: '15px',
      maxWidth: '720px',
      alignContent: 'center',
      minWidth: '20px',
    }}>
      <MDBRow>
        <h2>SpaceX GraphQL API With React</h2>
        {data.map((item, index) => (
          <>
            <MDBCard key={index} style={{ maxWidth: '22rem', maxHeight: '24rem' }}>
              <MDBCardImage src={
                item && item.ships[0] && item.ships[0].image
                  ? item.ships[0].image
                  : "https://i.imgur.com/MtEgYbY.jpg"
              } 
              position='top'
              alt={item.mission_name}
              />
              <MDBCardBody style={{backgroundColor:'black'}}>
                <MDBCardTitle>{item.mission_name}</MDBCardTitle>
                <MDBCardText>{item.launch_site.site_name_long}</MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </>
        ))}
      </MDBRow>
    </MDBContainer>
  );
}

export default App;
