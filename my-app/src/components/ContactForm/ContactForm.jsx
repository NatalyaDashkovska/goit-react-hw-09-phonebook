import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './ContactForm.module.css';
import { phonebookOperations, phonebookSelectors } from '../../redux/phonebook';

const Form = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(phonebookSelectors.getAllContacts);
  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleNumberChange = e => {
    setNumber(e.target.value);
  };
  const formSubmit = useCallback(
    e => {
      e.preventDefault();

      const oldCard = contacts.find(
        newCard => name.toLowerCase() === newCard.name.toLowerCase(),
      );

      if (oldCard) {
        alert(`${oldCard.name}  is already in contacts`);
        return;
      } else {
        dispatch(phonebookOperations.makeCard(name, number));
      }

      setName('');
      setNumber('');
    },
    [dispatch, name, number, contacts],
  );

  return (
    <div>
      <h3 className={styles.title}>Name</h3>
      <form className={styles.form} onSubmit={formSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={handleNameChange}
          className={styles.input}
        />
        <h3 className={styles.title}>Number</h3>
        <input
          type="tel"
          name="number"
          value={number}
          pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
          title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
          required
          onChange={handleNumberChange}
          className={styles.input}
        />
        <br />
        <button type="submit" className={styles.button}>
          Add contact
        </button>
      </form>
    </div>
  );
};

export default Form;

// class Form extends Component {
//   state = {
//     name: '',
//     number: '',
//   };
//   handleChange = e => {
//     this.setState({ [e.target.name]: e.target.value });
//   };
//   formSubmit = e => {
//     e.preventDefault();
//     const { name } = this.state;
//     const contacts = this.props.contacts;

//     const oldCard = contacts.find(
//       newCard => name.toLowerCase() === newCard.name.toLowerCase(),
//     );

//     if (oldCard) {
//       alert(`${oldCard.name}  is already in contacts`);
//       return;
//     }

//     this.props.onSubmit(this.state.name, this.state.number);
//     this.reset();
//   };

//   reset = () => {
//     this.setState({
//       name: '',
//       number: '',
//     });
//   };
//   render() {
//     return (
// <div>
//   <h3 className={styles.title}>Name</h3>
//   <form className={styles.form} onSubmit={this.formSubmit}>
//     <input
//       type="text"
//       name="name"
//       value={this.state.name}
//       pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//       title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//       required
//       onChange={this.handleChange}
//       className={styles.input}
//     />
//     <h3 className={styles.title}>Number</h3>
//     <input
//       type="tel"
//       name="number"
//       value={this.state.number}
//       pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
//       title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
//       required
//       onChange={this.handleChange}
//       className={styles.input}
//     />
//     <br />
//     <button type="submit" className={styles.button}>
//       Add contact
//     </button>
//   </form>
// </div>
//     );
//   }
// }
// const mapStateToProps = state => ({
//   contacts: phonebookSelectors.getAllContacts(state),
// });
// const mapDispatchToProps = dispatch => ({
//   onSubmit: (name, number) =>
//     dispatch(phonebookOperations.makeCard(name, number)),
// });
// export default connect(mapStateToProps, mapDispatchToProps)(Form);
