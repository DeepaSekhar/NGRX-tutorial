import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Tutorial } from '../../app/models/models.tutorial'

export const ADD_TUTORIAL = '[TUTORIAL]add'
export const REMOVE_TUTORIAL = '[TUTORIAL]remove'

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