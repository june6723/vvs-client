import * as api from '../api'
import { FIND_ME, FIND_USER, UPLOAD_PROFILE_IMG } from '../constants/actionTypes';

export const findUserById = (userId) => async (dispatch) => {
  try {
    const { data } = await api.findUser("id", userId)
    dispatch({ type: FIND_USER, data });
  } catch (error) {
    console.log(error)
  }
}

export const findMe = (userId) => async (dispatch) => {
  try {
    const { data } = await api.findUser("id", userId)
    dispatch({ type: FIND_ME, data });
  } catch (error) {
    console.log(error)
  }
}

export const uploadProfileImg = (imgFile) => async (dispatch) => {
  try {
    const formBody = new FormData()
    formBody.append('file', imgFile)
    const result = await api.upload(formBody)
    const url = result.data.url
    const { data } = await api.uploadProfileImg(url)
    dispatch({ type: UPLOAD_PROFILE_IMG, data })
  } catch (error) {
    console.log(error)
  }
}