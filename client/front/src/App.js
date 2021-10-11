/** @format */
import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');

	async function submit() {
		try {
			await axios.post('http://localhost:4000/api/adddata', {
				name,
				password,
			});
		} catch (error) {
			console.log(error);
		}
	}

	// const inputName = (elem) => {
	// 	setName(elem.target.value);
	// 	console.log(elem.target.value);
	// };
	// const inputPassword = (elem) => {
	// 	setPassword(elem.target.value);
	// 	console.log(elem.target.value);
	// };

	return (
		<div className='App'>
			<form onSubmit={submit}>
				<input
					type='text'
					placeholder='name'
					onChange={(e) => setName(e.target.value)}
					value={name}
				/>

				<input
					type='text'
					placeholder='password'
					onChange={(e) => setPassword(e.target.value)}
					value={password}
				/>
				<button>submit</button>
			</form>
		</div>
	);
}

export default App;
