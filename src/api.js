const API_BASE_URL = 'http://127.0.0.1:5000';

export async function getDailyHoroscope(sign, day) {
  const response = await fetch(`${API_BASE_URL}/horoscope/daily/${sign}/${day}`);
  const data = await response.json();
  console.log(response)
  return data;
}

export async function getWeeklyHoroscope(sign) {
  const response = await fetch(`${API_BASE_URL}/horoscope/weekly/${sign}`);
  const data = await response.json();
  return data;
}

export async function getMonthlyHoroscope(sign) {
  const response = await fetch(`${API_BASE_URL}/horoscope/monthly/${sign}`);
  const data = await response.json();
  return data;
}