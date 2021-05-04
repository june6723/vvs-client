import { ACTIVATE_CREATE_POST_MODAL, DEACTIVATE_CREATE_POST_MODAL } from '../constants/actionTypes.js';

export const activateCreatePostModal = () => ({ type: ACTIVATE_CREATE_POST_MODAL });
export const deactivateCreatePostModal = () => ({ type: DEACTIVATE_CREATE_POST_MODAL });

