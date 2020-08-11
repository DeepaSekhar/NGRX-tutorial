//  importing our Tutorial model and Action from ngrx/store.

import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Tutorial } from '../../app/models/models.tutorial'

// defining the type of action, which is in the form of a string constant.

export const ADD_TUTORIAL = '[TUTORIAL]add'
export const REMOVE_TUTORIAL = '[TUTORIAL]remove'

//  creating a class for each action with a constructor that allows us to pass in the payload. 

export class AddTutorial implements Action {
    readonly type = ADD_TUTORIAL
    constructor(public payload: Tutorial) { }
}
export class RemoveTutorial implements Action {
    readonly type = REMOVE_TUTORIAL
    constructor(public payload: Tutorial) { }
}
// exporting all of our action classes for use within our upcoming reducer.

export type Actions = AddTutorial | RemoveTutorial