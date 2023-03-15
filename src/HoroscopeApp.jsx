import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DailyHoroscope from './components/DailyHoroscope';
import WeeklyHoroscope from './components/WeeklyHoroscope';
import MonthlyHoroscope from './components/MonthlyHoroscope';

function HoroscopeApp() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<h1>Welcome to the Horoscope App!</h1>} />
        <Route path="/get-horoscope/daily" element={<DailyHoroscope />} />
        <Route path="/weekly-horoscope" element={<WeeklyHoroscope />} />
        <Route path="/monthly-horoscope" element={<MonthlyHoroscope />} />
      </Routes>
    </Router>
  );
}

export default HoroscopeApp;