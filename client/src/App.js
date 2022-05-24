import { useState } from 'react';
import './App.css';
import assets from './assets/travelbook.JPG';
import StripeContainer from './components/StripeContainer';

function App() {
	const [showItem, setShowItem] = useState(false);
	return (
		<div className='App'>
			<h1>TRAVELA</h1>
			{showItem ? (
				<StripeContainer />
			) : (
				<>
					<h3>$25.00</h3>
					<img src={assets} alt='travelbook' />
					<button onClick={() => setShowItem(true)}>Purchase Travel Book</button>
				</>
			)}
		</div>
	);
}

export default App;