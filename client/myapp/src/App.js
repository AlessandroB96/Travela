import './App.css';
import Main from './components/Main';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import View from './components/View';
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import axios from "axios";
import { useState } from 'react';
import { useSearch } from './api';
import Header from './components/header';
import { ReactQueryDevtools } from "react-query/devtools";

const qc = new QueryClient();
const Wrapper = ({children}) => {

  return (
    <QueryClientProvider client={qc}>
      {children}
      </QueryClientProvider>
  )
} 
function App() {

  const [isLoggedin, setIsloggedIn] = useState(false); 
  const [lats, setLats] = useState([])
  return (
    <Wrapper>


    <div>
    <Header onSubmit={setLats} />

        <div className="main-container">
          {!isLoggedin && <Sidebar onLogin={setIsloggedIn}/>}
          <View lats={lats}/>
        </div>
        <Footer />

    </div>
    {/* <ReactQueryDevtools initialIsOpen /> */}

    </Wrapper>

  );
}

export default App;
