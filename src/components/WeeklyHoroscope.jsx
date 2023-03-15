import React, { useState } from 'react';
import { getWeeklyHoroscope } from '../api';

function WeeklyHoroscope() {
  const [sign, setSign] = useState('');
  const [week, setWeek] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const horoscope = await getWeeklyHoroscope(sign, week);
    console.log(horoscope);
  };

  return (
    <div>
      <h2>Weekly Horoscope</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="sign">Sign:</label>
          <select
            id="sign"
            value={sign}
            onChange={(event) => setSign(event.target.value)}
          >
            <option value="">Select your sign</option>
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
        </div>
        <div>
          <label htmlFor="week">Week:</label>
          <input
            type="week"
            id="week"
            value={week}
            onChange={(event) => setWeek(event.target.value)}
          />
        </div>
        <button type="submit">Get Weekly Horoscope</button>
      </form>
    </div>
  );
}

export default WeeklyHoroscope;