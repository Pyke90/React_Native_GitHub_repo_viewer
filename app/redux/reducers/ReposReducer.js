const initialState = {
    repos: [],
  };
  
export const reposReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCHED_REPOS':{ 
      return {
        ...state,
        repos: action.repos,
      }
    }

    default: {
      return state;
    }
  }
};