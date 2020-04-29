/* eslint-disable camelcase */
import {
  ADD_FAVORITE_SUCCESS,
  ADD_FAVORITE_FAILURE,
  REMOVE_FAVORITE_SUCCESS,
  REMOVE_FAVORITE_FAILURE
} from './actionTypes';

export const addFavoriteSuccess = city => ({
  type: ADD_FAVORITE_SUCCESS,
  payload: city
});

export const addFavoriteFailure = () => ({
  type: ADD_FAVORITE_FAILURE
});

export const removeFavoriteSuccess = city => ({
  type: REMOVE_FAVORITE_SUCCESS,
  payload: city
});

export const removeFavoriteFailure = () => ({
  type: REMOVE_FAVORITE_FAILURE
});

export const onAddFavorite = city => dispatch => {
  dispatch(addFavoriteSuccess(city));
  dispatch(addFavoriteFailure());
};

export const onRemoveFavorite = city => dispatch => {
  dispatch(removeFavoriteSuccess(city));
  dispatch(removeFavoriteFailure());
};
