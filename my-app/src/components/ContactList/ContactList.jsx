import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';
import { phonebookOperations, phonebookSelectors } from '../../redux/phonebook';
import { connect } from 'react-redux';
const ContactList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(phonebookOperations.fetchContacts());
  }, [dispatch]);
  const contacts = useSelector(phonebookSelectors.getVisibleContacts);
  return (
    <div>
      <ul className={styles.list}>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className={styles.item}>
            <p className={styles.content}>
              {name} : {number}
            </p>
            <button
              className={styles.button}
              onClick={() => dispatch(phonebookOperations.deleteCard(id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// const mapStateToProps = state => {
//   return { contacts: phonebookSelectors.getVisibleContacts(state) };
// };

// const mapDispatchToProps = dispatch => ({
//   onDeleteCard: id => dispatch(phonebookOperations.deleteCard(id)),
// });

export default ContactList;
