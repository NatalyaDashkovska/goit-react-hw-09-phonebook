import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './Filter.module.css';

import { phonebookActions, phonebookSelectors } from '../../redux/phonebook';
const Filter = () => {
  const value = useSelector(phonebookSelectors.getFilter);
  const dispatch = useDispatch();

  const onChange = useCallback(
    e => dispatch(phonebookActions.filterValue(e.target.value)),
    [dispatch],
  );
  return (
    <div className={styles.form}>
      <label>
        <p className={styles.title}>Filter</p>
        <input
          className={styles.input}
          type="text"
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

export default Filter;
