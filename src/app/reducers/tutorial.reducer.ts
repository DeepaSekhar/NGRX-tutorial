//A reducer is what takes the incoming action and decides what to do with it. It takes the previous state and returns a new state based on the given action
import { Action } from '@ngrx/store'
import { Tutorial } from '../../app/models/models.tutorial'
import * as TutorialActions from '../actions/tutorial.action'

// defining an initial or default state
const initialState: Tutorial = {
    name: 'Intial Tutorial',
    url: 'www.google.com'

}