import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { BsSearch } from 'react-icons/bs';
import {
  FormBox,
  FormContainer,
  Button,
  ButtonText,
  Input,
  Error,
} from './Searchbar.styled'; // імпорт стилів

const queryRegex = /^[a-zA-Zа-яА-Я]*$/; // регулярний вираз для запиту

const schema = Yup.object().shape({
  query: Yup.string()
    .matches(queryRegex, 'Query is not valid!')
    .max(15, 'Too Long!')
    .trim(),  
}); // валідація полів форми

const INITIAL_STATE = {
  query: '',
}; // ініціалізація полів форми

export const Searchbar = ({ onSubmit }) => {
  const formSubmit = values => {
    onSubmit(values.query);
  };
  
  return (
    <FormBox>
      <Formik        
        initialValues={INITIAL_STATE}
        validationSchema={schema}
        onSubmit={formSubmit}
      >
        <FormContainer>
          <Button type="submit">
            <BsSearch />
            <ButtonText>Search</ButtonText>
          </Button>
          <Input
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"            
          />
          <Error name="query" component="p" />
        </FormContainer>
      </Formik>
    </FormBox>
  ); // при настанні події onSubmit викликається метод formSubmit
  // }
}; // повернення для рендеру розмітки форми (тег Button та тег Input для поля форми і тег Error (р))

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}; // типізація (опис типів) пропсів компоненту класу ContactForm