import {CREATE_AUDIO} from './actionTypes';


export function createAudio (track) {
    return {
        type: CREATE_AUDIO,
        track
    }
}