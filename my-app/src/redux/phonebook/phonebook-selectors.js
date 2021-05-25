import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.phonebook.loading;
const getFilter = state => state.phonebook.filter;
const getAllContacts = state => state.phonebook.contacts;

const getVisibleContacts = createSelector(
  [getFilter, getAllContacts],
  (filter, contacts) => {
    const normalize = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalize),
    );
  },
);

export default { getLoading, getAllContacts, getFilter, getVisibleContacts };
