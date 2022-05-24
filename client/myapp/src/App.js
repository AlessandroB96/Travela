import './App.css';
// import Main from './components/Main';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import View from './components/View';
import Places from './components/Places';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { useState } from 'react';
import Header from './components/header';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [isLoggedin, setIsloggedIn] = useState(false); 
  const [lats, setLats] = useState([])
  const [toggleMap, setToggleMap] = useState(true);
  const [toggleItinerary, setToggleItinerary] = useState(false);

  const toggleMapVisible = () => {
    setToggleMap(true);
}

  const toggleItineraryVisible = () => {
    setToggleItinerary(true);
  }

  return (
    <div>


      <ApolloProvider client={client}>

            <Header onSubmit={setLats} toggleMapVisible={toggleMapVisible} toggleItineraryVisible={toggleItineraryVisible} />

              <div className="main-container">
                {!isLoggedin && <Sidebar onLogin={setIsloggedIn}/>}
                {toggleMap ? <View lats={lats}/> : null}
              </div>
            <Footer />
      </ApolloProvider>

    </div>
  );
}

export default App;
