import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Formik, Form, Field } from 'formik'
import * as ActionsUser from '../../actions/actionsUser';

const UserForm = props => {
  const { createUserRequest } = bindActionCreators(ActionsUser, useDispatch());

  const onSubmit = (values, formikBag) => {
    createUserRequest(values)
    formikBag.resetForm()
  }
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        birthday: '',
        isMale: true
      }}
      onSubmit={onSubmit}
    >
      <Form>
        <Field name='firstName' placeholder='firstName' />
        <Field name='lastName' placeholder='lastName' />
        <Field name='email' placeholder='email' />
        <Field name='password' placeholder='password' />
        <Field name='birthday' placeholder='birthday' />
        <Field name='isMale' type='checkbox' /> Male
        <input type='submit' value='Send' />
      </Form>
    </Formik>
  )
}

export default UserForm;
