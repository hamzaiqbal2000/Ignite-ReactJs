const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
};

const gameReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return { ...state };
    default:
      return { ...state };
  }
};

//ACTION CREATOR
const fetchGames = (userData) => {
  return {
    type: "FETCH_GAMES",
    payload: userData,
  };
};

fetchGames({ user: "name" });

// {s
//   type: "FETCH_GAMES";
// }
// dispatch({ type: "FETCH_GAMES" });

export default gameReducer;
