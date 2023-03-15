import React, { useState } from 'react';
import { getMonthlyHoroscope } from '../api';

function MonthlyHoroscope() {
    const [sign, setSign] = useState('');
    const [month, setMonth] = useState('');
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      const horoscope = await getMonthlyHoroscope(sign, month);
      console.log(horoscope);
    };
  
    return (
      <div>
        <h2>Monthly Horoscope</h2>
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
            <label htmlFor="month">Month:</label>
        <input
        type="month"
        id="month"
        value={month}
        onChange={(event) => setMonth(event.target.value)}
        />
        </div>
        <button type="submit">Get Monthly Horoscope</button>
        </form>
        </div>
);
}

export default MonthlyHoroscope;