const initialState = {
    commits: [],
  };
  
export const commitsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCHED_COMMITS':{ 
      return {
        ...state,
        commits: action.commits,
      }
    }

    default: {
      return state;
    }
  }
};