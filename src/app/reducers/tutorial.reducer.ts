//A reducer is what takes the incoming action and decides what to do with it. It takes the previous state and returns a new state based on the given action
import { Action } from '@ngrx/store'
import { Tutorial } from '../../app/models/models.tutorial'
import * as TutorialActions from '../actions/tutorial.action'

// defining an initial or default state
const initialState: Tutorial = {
    name: 'Intial Tutorial',
    url: 'www.google.com'
}
// This is our actual reducer. It takes in a state, which we're defining as a Tutorial type
// and we've optionally bound it to initialState. It also takes in the action from our 
// actions/tutorial.actions file.

export function reducer(state: Tutorial[] = [initialState], action: TutorialActions.Actions) {
    switch (action.type) {
        case TutorialActions.ADD_TUTORIAL:
            return [...state, action.payload];

        default:
            return state;
    }
}