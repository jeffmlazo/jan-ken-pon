import React, { useState } from 'react';
import axios from 'axios';
// import logo from './logo.svg';
import './App.css';

// const api = axios.create({
//   baseURL: 'http://localhost', // Replace with your Laravel app URL
//   withCredentials: true, // Important for sending cookies
// });

// const getCsrfToken = async () => {
//   await api.get('/sanctum/csrf-cookie');
// };

// Call this function before making any POST requests
// getCsrfToken();

function App() {
  // const [message, setMessage] = useState('');

  // useEffect(() => {
  //   axios
  //     .get('http://localhost/api/echo')
  //     .then((response) => {
  //       setMessage(response.data.message);
  //     })
  //     .catch((error) => {
  //       console.error('There was an error fetching the message!', error);
  //     });
  // }, []);

  const [rounds, setRounds] = useState(0);
  const [winsPlayer1, setWinsPlayer1] = useState(0);
  const [winsPlayer2, setWinsPlayer2] = useState(0);
  const [ties, setTies] = useState(0);
  const [resultMessage, setResultMessage] = useState('');
  const [gameOver, setGameOver] = useState(false);

  //   const registerUser = async (credentials) => {
  //     await getCsrfToken(); // Ensure CSRF token is set

  //     try {
  //         const response = await api.post('/api/register', credentials);
  //         console.log('User registered:', response.data);
  //     } catch (error) {
  //         console.error('Registration error:', error.response.data);
  //     }
  // };

  const playGame = async (choice) => {
    // await getCsrfToken(); // Ensure CSRF token is set

    if (rounds >= 10) return; // Prevent playing more than 10 rounds

    try {
      const response = await axios.post('http://localhost/api/play', {
        choice,
      });
      const playerChoice = response.data.player_choice;
      const result = response.data.result;

      // Update statistics based on the result
      if (result === 'win') {
        setWinsPlayer1(winsPlayer1 + 1);
        setResultMessage(`You win! Player chose ${playerChoice}`);
      } else if (result === 'lose') {
        setWinsPlayer2(winsPlayer2 + 1);
        setResultMessage(`You lose! Player chose ${playerChoice}`);
      } else {
        setTies(ties + 1);
        setResultMessage(`It's a tie! Player chose ${playerChoice}`);
      }

      // Update rounds played
      setRounds(rounds + 1);

      // Check if game is over after 10 rounds
      if (rounds + 1 >= 10) {
        setGameOver(true);
      }
    } catch (error) {
      console.error('Error playing game:', error);
    }
  };

  const resetGame = () => {
    setRounds(0);
    setWinsPlayer1(0);
    setWinsPlayer2(0);
    setTies(0);
    setResultMessage('');
    setGameOver(false);
  };

  const winPercentage = (wins) =>
    rounds > 0 ? ((wins / rounds) * 100).toFixed(2) : 0;
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Rock, Paper, Scissors</h1>
      <div>
        <button onClick={() => playGame('rock')} disabled={gameOver}>
          Rock
        </button>
        <button onClick={() => playGame('paper')} disabled={gameOver}>
          Paper
        </button>
        <button onClick={() => playGame('scissors')} disabled={gameOver}>
          Scissors
        </button>
      </div>
      {resultMessage && <h2>{resultMessage}</h2>}
      {gameOver && (
        <div>
          <h2>Game Over!</h2>
          <p>Total Rounds Played: {rounds}</p>
          <p>Player 1 Wins: {winsPlayer1}</p>
          <p>Player 2 Wins: {winsPlayer2}</p>
          <p>Ties: {ties}</p>
          <p>Player 1 Win Percentage: {winPercentage(winsPlayer1)}%</p>
          <p>Player 2 Win Percentage: {winPercentage(winsPlayer2)}%</p>
          <button onClick={resetGame}>Play Again</button>
        </div>
      )}
    </div>
  );
}

export default App;
