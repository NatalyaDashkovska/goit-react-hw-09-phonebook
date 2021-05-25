import { createAction } from '@reduxjs/toolkit';

const fetchContactsRequest = createAction('contacts/fetchContactsRequest');
const fetchContactsSuccess = createAction('contacts/fetchContactsSuccess');
const fetchContactsError = createAction('contacts/fetchContactsError');

const makeCardRequest = createAction('contacts/makeCardRequest');
const makeCardSuccess = createAction('contacts/makeCardSuccess');
const makeCardError = createAction('contacts/makeCardError');

const deleteCardRequest = createAction('contacts/deleteCardRequest');
const deleteCardSuccess = createAction('contacts/deleteCardSuccess');
const deleteCardError = createAction('contacts/deleteCardError');

const filterValue = createAction('contacts/filter');

export default {
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
};
