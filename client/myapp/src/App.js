import './App.css';
import Main from './components/Main';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div>

      <style>
        @import url('https://fonts.googleapis.com/css2?family=Abel&family=Lobster&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Zen+Loop&display=swap');
        <link rel="stylesheet" href="https://fonts.sandbox.google.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      </style>
        <Main />
        <Sidebar />
        <Footer />
    </div>
  );
}

export default App;
