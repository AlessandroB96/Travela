import './App.css';
// import Main from './components/Main';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import View from './components/View';
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
  return (
    <div>

      {/* <style>
        @import url('https://fonts.googleapis.com/css2?family=Abel&family=Lobster&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Zen+Loop&display=swap');
        <link rel="stylesheet" href="https://fonts.sandbox.google.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
        <link rel="stylesheet" href="https://fonts.sandbox.google.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      </style> */}
      <ApolloProvider client={client}>
        {/* <Main />
        <div className="main-container">
          <Sidebar />
          <View />
        </div>
        <Footer /> */}
            <Header onSubmit={setLats} />

              <div className="main-container">
                {!isLoggedin && <Sidebar onLogin={setIsloggedIn}/>}
                <View lats={lats}/>
              </div>
            <Footer />
      </ApolloProvider>

    </div>
  );
}

export default App;
