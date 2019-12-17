const initialState = {
    userInput:'testi2'
  };
  
export const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_INPUT':{ 
      return {
        ...state,
        userInput: action.userInput,
      }
    }

    default: {
      return state;
    }
  }
};