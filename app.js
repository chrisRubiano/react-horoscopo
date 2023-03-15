import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [sign, setSign] = useState('');
  const [day, setDay] = useState('');
  const [horoscopeData, setHoroscopeData] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage('');

    try {
      const response = await axios.get(`http://localhost:5000/get-horoscope/daily?sign=${sign}&day=${day}`);
      setHoroscopeData(response.data.data);
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <div>
      <h1>Horoscope App</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Sign:
          <input type="text" value={sign} onChange={(e) => setSign(e.target.value)} />
        </label>
        <label>
          Day:
          <input type="text" value={day} onChange={(e) => setDay(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
      {horoscopeData && <p>{horoscopeData}</p>}
    </div>
  );
}

export default App;