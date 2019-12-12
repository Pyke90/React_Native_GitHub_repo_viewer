import { NEW_INPUT } from './ActionTypes';

export const newInput = input => ({
    type: NEW_INPUT,
    userInput: input
});