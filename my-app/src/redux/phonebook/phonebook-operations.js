import axios from 'axios';
import actions from './phonebook-actions';

const fetchContacts = () => async dispatch => {
  dispatch(actions.fetchContactsSuccess());
  try {
    const { data } = await axios.get(`/contacts`);

    dispatch(actions.fetchContactsSuccess(data));
  } catch (error) {
    dispatch(actions.fetchContactsError(error.message));
  }
};

const makeCard = (name, number) => dispatch => {
  const contact = { name, number };
  // console.log(contact);
  dispatch(actions.makeCardRequest());
  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(actions.makeCardSuccess(data)))
    .catch(error => dispatch(actions.makeCardError(error.message)));
};

const deleteCard = id => dispatch => {
  dispatch(actions.deleteCardRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(actions.deleteCardSuccess(id)))
    .catch(error => dispatch(actions.deleteCardError(error.message)));
};

export default { makeCard, deleteCard, fetchContacts };
