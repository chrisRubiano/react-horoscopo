import React, { useState } from 'react';
import { getDailyHoroscope } from '../api';

function DailyHoroscope() {
  const [sign, setSign] = useState('');
  const [day, setDay] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const horoscope = await getDailyHoroscope(sign, day);
    console.log(horoscope); // log the horoscope to the console for now
    };
    
    return (
    <div>
    <h2>Daily Horoscope</h2>
    <form onSubmit={handleSubmit}>
    <label>
    Select your zodiac sign:
    <select value={sign} onChange={(event) => setSign(event.target.value)}>
    <option value="">Choose a sign</option>
    <option value="aries">Aries</option>
    <option value="taurus">Taurus</option>
    <option value="gemini">Gemini</option>
    <option value="cancer">Cancer</option>
    <option value="leo">Leo</option>
    <option value="virgo">Virgo</option>
    <option value="libra">Libra</option>
    <option value="scorpio">Scorpio</option>
    <option value="sagittarius">Sagittarius</option>
    <option value="capricorn">Capricorn</option>
    <option value="aquarius">Aquarius</option>
    <option value="pisces">Pisces</option>
    </select>
    </label>
    <br />
    <label>
    Select a day:
    <input type="date" value={day} onChange={(event) => setDay(event.target.value)} />
    </label>
    <br />
    <button type="submit">Get Horoscope</button>
    </form>
    </div>
    );
    }
    
    export default DailyHoroscope;