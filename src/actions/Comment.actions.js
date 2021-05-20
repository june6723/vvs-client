import * as api from '../api/index.js';
import { CREATE_COMMENT, CREATE_REPLY, GET_COMMENTS, GET_REPLIES, LIKE_COMMENT } from '../constants/actionTypes.js';

export const getComments = (postId) => async (dispatch) => {
  try {
    const { data } = await api.getComments(postId)
    dispatch({ type: GET_COMMENTS, comments: data, postId })
  } catch (error) {
    console.log(error)
  }
}

export const createComment = (commentForm) => async (dispatch) => {
  try {
    const { data } = await api.createComment(commentForm)
    dispatch({ type: CREATE_COMMENT, data })
  } catch (error) {
    console.log(error)
  }
}

export const createReply = (commentForm) => async (dispatch) => {
  try {
    const { data } = await api.createReply(commentForm)
    dispatch({ type: CREATE_REPLY, data, commentId: commentForm.commentId })
  } catch (error) {
    console.log(error)
  }
}

export const likeComment = (commentId) => async (dispatch) => {
  try {
    const { data } = await api.likeComment(commentId)
    dispatch({ type: LIKE_COMMENT, data })
  } catch (error) {
    console.log(error)
  }
}

export const getReplies = (commentId) => async (dispatch) => {
  try {
    const { data } = await api.getReplies(commentId)
    dispatch({ type: GET_REPLIES, data, commentId })
  } catch (error) {
    console.log(error)
  }
}