import { combineReducers } from 'redux';

import { createReducer } from '@reduxjs/toolkit';
import actions from './phonebook-actions';
const {
  makeCardRequest,
  makeCardSuccess,
  makeCardError,
  deleteCardRequest,
  deleteCardError,
  deleteCardSuccess,
  filterValue,

  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} = actions;

const contactsReducer = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,

  [makeCardSuccess]: (state, { payload }) => [...state, payload],
  [deleteCardSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const loading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [makeCardRequest]: () => true,
  [makeCardSuccess]: () => false,
  [makeCardError]: () => false,
  [deleteCardRequest]: () => true,
  [deleteCardSuccess]: () => false,
  [deleteCardError]: () => false,
});

const filterReducer = createReducer('', {
  [filterValue]: (_, { payload }) => payload,
});

const error = createReducer(null, {
  [makeCardError]: (_, { payload }) => payload,
  [deleteCardError]: (_, { payload }) => payload,
  [fetchContactsError]: (_, { payload }) => payload,
});

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  loading,
  error,
});

export default rootReducer;
