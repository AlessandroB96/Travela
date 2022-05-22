import './App.css';
import Main from './components/Main';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import View from './components/View';
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import axios from "axios";
import { useState } from 'react';

const qc = new QueryClient();

function App() {

  const [isLoggedin, setIsloggedIn] = useState(false); 
  
  return (

    <QueryClientProvider client={qc}>

    <div>
        <Main />
        <div className="main-container">
          <Sidebar />
          <View />
        </div>
        <Footer />

    </div>
    </QueryClientProvider>
  );
}

export default App;
