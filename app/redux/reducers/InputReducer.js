const initialState = {
    userInput:'testi2'
  };
  
const inputReducer = (state = initialState, action) => {
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

export default inputReducer;