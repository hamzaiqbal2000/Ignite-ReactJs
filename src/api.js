//Base URL
const base_url = "https://api.rawg.io/api/";

//getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

//getting the date

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//popular games
const popular_games = `games?key=d809e5b727cb4fbfa0b05ca62a240cc3&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcomming_games = `games?key=d809e5b727cb4fbfa0b05ca62a240cc3&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?key=d809e5b727cb4fbfa0b05ca62a240cc3&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcomming_games}`;
export const newGamesURL = () => `${base_url}${newGames}`;
//GAME details
export const gameDetailsURL = (game_id) =>
  `${base_url}games?key=d809e5b727cb4fbfa0b05ca62a240cc3&/${game_id}`;
//game screenshots
export const gameScreenshotURL = (game_id) =>
  `${base_url}games?key=d809e5b727cb4fbfa0b05ca62a240cc3&/${game_id}&/screenshots`;
