import './App.css';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import View from './components/View';
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import axios from "axios";
import React, { useState, useEffect } from 'react';
import Header from './components/header';
import { ReactQueryDevtools } from "react-query/devtools";
import { usePlacesData } from './api';

const qc = new QueryClient();
const Wrapper = ({children}) => {

  return (
    <QueryClientProvider client={qc}>
      {children}
      </QueryClientProvider>
  )
} 
function App() {

  const [places, setPlaces] = useState([]);
  const [coordinate, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null);

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(({ coords: {latitude, longitude }}) => {
  //     setCoordinates({ lat: latitude, lng: longitude })
  //   })
  // }, [])


  const [isLoggedin, setIsloggedIn] = useState(false); 
  const [lats, setLats] = useState([])
  return (
    <Wrapper>


    <div>
    <Header onSubmit={setLats} />

        <div className="main-container">
          {!isLoggedin && <Sidebar onLogin={setIsloggedIn}/>}
          <View 
            lats={lats}
            // setCoordinates={setCoordinates}
            // setBounds={setBounds}
            // coordinates={coordinate}
            />
        </div>
        <Footer />

    </div>
    {/* <ReactQueryDevtools initialIsOpen /> */}

    </Wrapper>

  );
}

export default App;
