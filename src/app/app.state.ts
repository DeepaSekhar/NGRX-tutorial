//creating an app state
import { Tutorial } from '../app/models/models.tutorial'
export interface AppState {
    readonly tutorial: Tutorial[]
}
// We will import this file within the components that we wish to access ngrx.

